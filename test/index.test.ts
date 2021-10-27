import { RustLambdaHttpEventHandler } from '../src';

test('RustLambdaHttpEventHandler', () => {
  const project = new RustLambdaHttpEventHandler({
    name: 'test',
    defaultReleaseBranch: 'main',
  });
  expect(project.srcdir).toEqual('src');
  expect(project.libdir).toEqual('lib');
});
