export type CargoManifestSection =
  | 'package'
  | 'dependencies'
  | 'dev-dependencies'
  | 'badges'
  | 'features'
  | 'patch'
  | 'replace'
  | 'profile'
  | 'lib'
  | 'bin'
  | 'example'
  | 'test'
  | 'bench';

export type CargoManifestRustEdition = '2021' | '2018' | '2015';

export interface CargoManifestPackage {
  readonly name: string;
  readonly version: string;
  readonly authors?: string[];
  readonly license?: string;
  readonly readme?: string;
  readonly edition?: CargoManifestRustEdition;

  // readonly 'rust-version'?: string;
  readonly description?: string;
  readonly documentation?: string;
  readonly homepage?: string;
  readonly repository?: string;
  // readonly 'license-file'?: string;
  readonly keywords?: string[];
  readonly categories?: string[];
  readonly workspace?: string;
  // readonly build?: string;
  readonly links?: string[];
  readonly exclude?: string[];
  readonly include?: string[];
  readonly publish?: string[];
  readonly metadata?: string[];
  // readonly 'default-run'?: string;
  readonly autobins?: boolean;
  readonly autoexamples?: boolean;
  readonly autotests?: boolean;
  readonly autobenches?: boolean;
  readonly resolver?: string;
}

export enum CargoManifestCrateType {
  BIN = 'bin',
  LIB = 'lib',
  R_LIB = 'rlib',
  DY_LIB = 'dylib',
  CDY_LIB = 'cdylib',
  STATIC_LIB = 'staticlib',
  PROC_MACRO = 'proc-macro',
}

export interface CargoManifestTableCommonSettings {
  readonly name: string;
  readonly path?: string;
  readonly test?: boolean;
  readonly doctest?: boolean;
  readonly bench?: boolean;
  readonly doc?: boolean;
  readonly plugin?: boolean;
  readonly harness?: boolean;
  readonly edition?: string;
  // readonly 'crate-type'?: CargoManifestCrateType;
  // readonly 'required-features': string[];
}

export interface CargoManifestLib extends CargoManifestTableCommonSettings {
  // readonly 'proc-macro'?: boolean;
}

export interface CargoManifestBin extends CargoManifestTableCommonSettings {}

export interface CargoManifestExample
  extends CargoManifestTableCommonSettings {}

export interface CargoManifestTest extends CargoManifestTableCommonSettings {}

export interface CargoManifestBench extends CargoManifestTableCommonSettings {}

export interface CargoManifestProfileCommonSettings {
  // readonly 'overflow-checks'?: boolean;
  // readonly 'opt-level'?: 0 | 1 | 2 | 3 | 's' | 'z';
  // readonly 'debug-assertions'?: boolean;
  // readonly 'split-debuginfo'?: string;
  readonly debug?: 0 | 1 | 2 | true | false;
  readonly lto?: 'false' | 'true' | 'fat' | 'thin' | 'off';
  readonly panic?: 'unwind' | 'abort';
  readonly incremental?: boolean;
  // readonly 'codegen-units'?: number;
  readonly rpath?: 'string';
  // readonly 'build-override'?: CargoManifestProfileCommonSettings;
  readonly package?: {
    readonly [index: string]: CargoManifestProfileCommonSettings;
  };
}

export type CargoManifestProfileName = 'dev' | 'release' | 'test' | 'bench';

export type CargoManifestProfile = {
  readonly [index: string]: CargoManifestProfileCommonSettings;
};

export type CargoManifestDependencyDeclarationExpanded = {
  readonly git?: string;
  readonly version?: string;
  readonly registry?: string;
  readonly branch?: string;
  readonly path?: string;
  readonly optional?: boolean;
  readonly features?: string[];
};

export type CargoManifestDependencyDeclaration =
  | string
  | CargoManifestDependencyDeclarationExpanded;

export interface CargoManifestDependencies {
  readonly [index: string]: CargoManifestDependencyDeclaration;
}

export interface CargoManifest {
  readonly package: CargoManifestPackage;
  readonly lib?: CargoManifestLib;
  readonly bin?: CargoManifestBin[];
  readonly example?: CargoManifestExample[];
  readonly test?: CargoManifestTest[];
  readonly bench?: CargoManifestBench[];
  readonly dependencies?: CargoManifestDependencies;
  readonly devDependencies?: CargoManifestDependencies;
  readonly buildDependencies?: CargoManifestDependencies;
  readonly profile?: CargoManifestProfile;
}
