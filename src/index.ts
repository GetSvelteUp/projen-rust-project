import { TypeScriptAppProject, TypeScriptProjectOptions } from "projen";

export interface RustLambdaHttpEventHandlerOptions
  extends TypeScriptProjectOptions {}

export class RustLambdaHttpEventHandler extends TypeScriptAppProject {
  constructor(options: RustLambdaHttpEventHandlerOptions) {
    super({
      ...options,
    });
  }
}
