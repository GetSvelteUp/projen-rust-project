import { RustProjectBase, RustProjectBaseOptions } from './base';

export interface RustProjectLambdaEventHandlerOptions
  extends RustProjectBaseOptions {}

export class RustProjectLambdaEventHandler extends RustProjectBase {
  constructor(options: RustProjectLambdaEventHandlerOptions) {
    super(options);
  }
}
