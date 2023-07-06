import { Suite } from "mocha";

export interface ExecutionConfig {
  executionEnvironments: Array<ExecutionEnvironment>;
}
export type ExecutionEnvironment = "developmentLocal" | "ci" | "developmentCd" | "previewCd";

/**
 * This higher-level function can be used to control in which environments a given test suite is executed
 * @param name the name of the test suite
 * @param execConfig controls in which environments the test suite is executed
 * @param fn the test suite
 * @returns a new test suite that is only executed when the current environment matches one in the execution config
 */
export function describeIf(name: string, execConfig: ExecutionConfig, fn: (this: Suite) => void): Suite {
  const executionEnvironment = Cypress.env("EXECUTION_ENVIRONMENT") as ExecutionEnvironment;

  if (execConfig.executionEnvironments.indexOf(executionEnvironment) === -1) {
    return describe(`${name} - Disabled`, () => {
      it(`Has been disabled because the execution environment ${executionEnvironment} has not been allowed`, () => {
        // Stub-Test just so its displayed why test suit wasn't executed
      });
    });
  }

  return describe(name, fn);
}
