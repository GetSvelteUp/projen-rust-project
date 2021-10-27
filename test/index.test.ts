import { RustProjectBase } from '../src';

test('RustLambdaHttpEventHandler', () => {
  const project = new RustProjectBase({
    name: 'test',
    defaultReleaseBranch: 'main',
    target: 'aarch64-unknown-linux-musl',
    manifest: {
      package: {
        name: 'test',
        version: '0.0.1',
      },
    },
  });
  expect(project.srcdir).toEqual('src');
  expect(project.libdir).toEqual('lib');
});
