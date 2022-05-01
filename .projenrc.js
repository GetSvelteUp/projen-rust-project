const fs = require("fs-extra");
const { JsiiProject } = require("projen/lib/cdk");

const { NpmAccess } = require("projen/lib/javascript");

const readme = fs.readFileSync("./README.md").toString();

const project = new JsiiProject({
  defaultReleaseBranch: "main",
  name: "@grifhammer/projen-rust-project",
  authorName: "Griffin Hammer",
  authorEmail: "grifhammer@grifhammer.com",
  authorOrganization: true,
  repository: "https://github.com/grifhammer/projen-rust-project.git",

  deps: ["projen", "fs-extra"],
  devDeps: ["@types/fs-extra@^8", "projen", "fs-extra"],
  peerDeps: ["projen"],
  bundledDeps: ["fs-extra"],

  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,

  githubOptions: {
    authorName: "grifhammer",
  },

  readme: { filename: "README.md", contents: readme },

  docgen: false,
  codeCov: true,
  dependabot: false,
  github: false,

  npmDistTag: "latest",
  // npmRegistryUrl: 'https://npm.pkg.github.com',
  npmTokenSecret: "NPM_TOKEN",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});

project.addFields({ publishConfig: { access: "public" } });
// project.addTask("stash-assets", { exec: "cp -r ./src/assets ./lib/assets" });
// project.buildTask.prependExec("cp -r ./src/assets ./lib/assets");
project.compileTask.exec("cp -r ./src/assets ./lib/assets");

project.synth();
