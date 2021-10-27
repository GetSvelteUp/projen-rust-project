import { RustProjectBase, RustProjectBaseOptions } from './base';

export interface RustProjectLambdaHttpHandlerOptions
  extends RustProjectBaseOptions {}

export class RustProjectLambdaHttpHandler extends RustProjectBase {
  constructor(options: RustProjectLambdaHttpHandlerOptions) {
    super(options);
  }
}
