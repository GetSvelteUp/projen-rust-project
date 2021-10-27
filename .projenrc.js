const { TypeScriptProject, NpmAccess } = require("projen");
const project = new TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "@svelte-up/projen-lambda-http-handler-rs",
  authorName: "Michael Edelman",
  authorEmail: "michael@svelteup.io",
  authorUrl: "https://twitter.com/edelman215",

  deps: ["projen"],
  devDeps: ["projen"],
  peerDeps: ["projen"],

  npmAccess: NpmAccess.PUBLIC,

  npmDistTag: "latest",
  npmRegistryUrl: "https://npm.pkg.github.com",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();
