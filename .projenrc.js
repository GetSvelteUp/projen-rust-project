const fs = require('fs-extra');

const { TypeScriptProject, NpmAccess, JsiiProject } = require('projen');

const readme = fs.readFileSync('./README.md').toString();

const project = new JsiiProject({
  defaultReleaseBranch: 'main',
  name: '@svelte-up/projen-rust-project',
  authorName: 'Michael Edelman',
  authorEmail: 'michael@svelteup.io',
  authorUrl: 'https://twitter.com/edelman215',
  authorOrganization: true,
  repository: 'https://github.com/GetSvelteUp/projen-rust-project.git',

  deps: ['projen', 'fs-extra'],
  devDeps: ['@types/fs-extra@^8', 'projen', 'fs-extra'],
  peerDeps: ['projen'],
  bundledDeps: ['fs-extra'],

  releaseToNpm: false,
  npmAccess: NpmAccess.PUBLIC,

  githubOptions: {
    authorName: 'GetSvelteUp',
  },

  readme: { filename: 'README.md', contents: readme },

  docgen: false,
  codeCov: true,
  dependabot: false,
  github: false,

  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',
  npmTokenSecret: 'NPM_TOKEN',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});

project.addFields({ publishConfig: { access: 'public' } });
// project.addTask("stash-assets", { exec: "cp -r ./src/assets ./lib/assets" });
// project.buildTask.prependExec("cp -r ./src/assets ./lib/assets");
project.compileTask.exec('cp -r ./src/assets ./lib/assets');

project.synth();
