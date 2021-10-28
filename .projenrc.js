const { TypeScriptProject, NpmAccess, JsiiProject } = require('projen');

const project = new JsiiProject({
  defaultReleaseBranch: 'main',
  name: '@getsvelteup/projen-rust-project',
  authorName: 'GetSvelteUp',
  authorEmail: 'michael@svelteup.io',
  authorUrl: 'https://twitter.com/edelman215',
  authorOrganization: true,
  repository: 'https://github.com/GetSvelteUp/projen-rust-project.git',

  deps: ['projen', 'fs-extra'],
  devDeps: ['@types/fs-extra@^8', 'projen'],
  peerDeps: ['projen'],
  bundledDeps: ['fs-extra'],

  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,

  githubOptions: {
    authorName: 'GetSvelteUp',
  },

  docgen: true,
  codeCov: true,
  dependabot: true,

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

project.synth();
