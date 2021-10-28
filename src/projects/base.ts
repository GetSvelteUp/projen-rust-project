import { resolve } from 'path';
import * as fs from 'fs-extra';
import {
  SampleFile,
  TomlFile,
  TypeScriptProject,
  TypeScriptProjectOptions,
} from 'projen';
import {
  CargoManifest,
  CargoManifestBin,
  CargoManifestExample,
  CargoManifestTest,
  CargoManifestBench,
} from '../types';

export interface RustProjectBaseOptions extends TypeScriptProjectOptions {
  readonly manifest: CargoManifest;
  readonly target: string;
}

export class RustProjectBase extends TypeScriptProject {
  static readonly devDeps: string[] = ['npm-run-all'];
  static readonly scriptsToReplace: string[] = [
    'test',
    'build',
    'dev',
    'bench',
    'run',
  ];
  private readonly binaries = new Map<string, CargoManifestBin>();
  private readonly examples = new Map<string, CargoManifestExample>();
  private readonly tests = new Map<string, CargoManifestTest>();
  private readonly benchmarks = new Map<string, CargoManifestBench>();
  private readonly projectRoot = process.cwd();
  private readonly srcDir = resolve(this.projectRoot, 'src');
  private readonly binDir = resolve(this.srcDir, 'bin');
  private readonly examplesDir = resolve(this.projectRoot, 'examples');
  private readonly testsDir = resolve(this.projectRoot, 'tests');
  private readonly benchesDir = resolve(this.projectRoot, 'benches');
  private readonly cargoManifest: CargoManifest;

  constructor(protected readonly options: RustProjectBaseOptions) {
    super({
      ...options,
    });

    for (const dep of RustProjectBase.devDeps) {
      this.addDevDeps(dep);
    }

    for (const script of RustProjectBase.scriptsToReplace) {
      this.removeScript(script);
    }

    this.setScript('test', 'npx npm-run-all -p test:*');
    this.setScript('build', 'npx npm-run-all -p build:*');
    this.setScript('dev', 'npx npm-run-all -p dev:*');
    this.setScript('bench', 'npx npm-run-all -p bench:*');
    this.setScript('run', 'npx npm-run-all -p run:*');

    this.gitignore.exclude('target');

    let { manifest } = this.options;

    if (!manifest) {
      manifest = {
        package: {
          name: this.name,
          version: '0.0.1',
          authors: ['Michael Edelman <michael@svelteup.io>'],
          edition: '2021',
          homepage: 'https://get.svelteup.today',
        },
        bin: [{ name: 'svelte', path: 'src/bin/svelte.rs' }],
      };
    }

    this.cargoManifest = manifest;
  }

  private prepareDirectories() {
    fs.ensureDirSync(this.projectRoot);
    fs.ensureDirSync(this.binDir);
    fs.ensureDirSync(this.examplesDir);
    fs.ensureDirSync(this.testsDir);
    fs.ensureDirSync(this.benchesDir);
  }

  private parseIncomingManifest() {
    const { bin, bench, example, test } = this.cargoManifest ?? {};

    for (const item of bin ?? []) {
      this.binaries.set(item.name, item);
    }

    for (const item of example ?? []) {
      this.examples.set(item.name, item);
    }

    for (const item of bench ?? []) {
      this.benchmarks.set(item.name, item);
    }

    for (const item of test ?? []) {
      this.tests.set(item.name, item);
    }
  }

  private generateOutgoingManifest(): CargoManifest {
    let bin: CargoManifestBin[] = [];
    let test: CargoManifestTest[] = [];
    let bench: CargoManifestBench[] = [];
    let example: CargoManifestExample[] = [];

    for (const [_, cfg] of this.binaries.entries()) {
      bin.push(cfg);
    }

    for (const [_, cfg] of this.tests.entries()) {
      test.push(cfg);
    }

    for (const [_, cfg] of this.examples.entries()) {
      example.push(cfg);
    }

    for (const [_, cfg] of this.benchmarks.entries()) {
      bench.push(cfg);
    }

    return {
      package: this.cargoManifest.package,
      lib: this.cargoManifest.lib,
      dependencies: this.cargoManifest.dependencies,
      devDependencies: this.cargoManifest.devDependencies,
      buildDependencies: this.cargoManifest.buildDependencies,
      profile: this.cargoManifest.profile,
      bin,
      test,
      bench,
      example,
    };
  }

  private generateSampleFiles(manifest: CargoManifest) {
    for (const item of manifest.bin ?? []) {
      this._addComponent(
        new SampleFile(this, `/${this.binDir}/${item.name}.rs`, {
          sourcePath: resolve(__dirname, '../assets/generic-main.rs'),
        }),
      );
    }

    for (const item of manifest.test ?? []) {
      this._addComponent(
        new SampleFile(this, `/${this.testsDir}/${item.name}.rs`, {
          sourcePath: resolve(__dirname, '../assets/generic-main.rs'),
        }),
      );
    }

    for (const item of manifest.example ?? []) {
      this._addComponent(
        new SampleFile(this, `/${this.examplesDir}/${item.name}.rs`, {
          sourcePath: resolve(__dirname, '../assets/generic-main.rs'),
        }),
      );
    }

    for (const item of manifest.bench ?? []) {
      this._addComponent(
        new SampleFile(this, `/${this.benchesDir}/${item.name}.rs`, {
          sourcePath: resolve(__dirname, '../assets/generic-main.rs'),
        }),
      );
    }
  }

  addBinary(binName: string, opts: CargoManifestBin) {
    this.binaries.set(binName, opts);
  }

  addBench(benchName: string, opts: CargoManifestBench) {
    this.benchmarks.set(benchName, opts);
  }

  addExample(exampleName: string, opts: CargoManifestExample) {
    this.examples.set(exampleName, opts);
  }

  addTest(testName: string, opts: CargoManifestTest) {
    this.tests.set(testName, opts);
  }

  synth() {
    super.synth();
  }

  preSynthesize() {
    super.preSynthesize();
    this.parseIncomingManifest();

    this.prepareDirectories();

    const manifest = this.generateOutgoingManifest();

    this.generateSampleFiles(manifest);

    const { devDependencies, buildDependencies, ...rest } = manifest;

    this._addComponent(
      new TomlFile(this, 'Cargo.toml', {
        committed: true,
        omitEmpty: true,
        obj: {
          ...rest,
          'build-dependencies': buildDependencies,
          'dev-dependencies': devDependencies,
        },
      }),
    );

    for (const bin of this.binaries.keys()) {
      this.setScript(`build:${bin}`, this.buildBin(bin));
    }

    for (const example of this.examples.keys()) {
      this.setScript(`run:${example}`, this.runExample(example));
    }

    for (const test of this.tests.keys()) {
      this.setScript(`test:${test}`, this.testSuite(test));
    }

    for (const bench of this.tests.keys()) {
      this.setScript(`bench:${bench}`, this.benchMark(bench));
    }
  }

  postSynthesize() {
    super.postSynthesize();
  }

  private runExample = (
    name: string,
    target: string = this.options.target,
  ) => `cargo run --example ${name} \ 
    --release \ 
    --target ${target}
  `;

  private testSuite = (name: string, target: string = this.options.target) =>
    `cargo test ${name} -- --target ${target}`;

  private buildBin = (
    bin: string,
    target: string = this.options.target,
  ) => `cargo build --release \ 
    --target ${target} \ 
    --bin ${bin} \ 
    --quiet
  `;

  private benchMark = (mark: string, target: string = this.options.target) =>
    `cargo bench -- ${mark} --target ${target}`;
}
