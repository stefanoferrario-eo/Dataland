import { faker } from "@faker-js/faker";
import { activityTree } from "@/components/forms/parts/elements/derived/ActivityTree";
import { type TreeNode } from "primevue/tree";

/**
 * Generates a random list of NACE codes (unique and sorted)
 * @param minNumberOfNaceCodes minimum number of NACE codes to generate
 * @param maxNumberOfNaceCodes maximum number of NACE codes to generate
 * @returns random list of NACE codes
 */
export function generateListOfRandomNaceCodes(minNumberOfNaceCodes = 0, maxNumberOfNaceCodes = 5): string[] {
  const values = Array.from(
    { length: faker.number.int({ min: minNumberOfNaceCodes, max: maxNumberOfNaceCodes }) },
    () => {
      return faker.helpers.arrayElement(["A", "B"]);
    },
  ).sort((a, b) => a.localeCompare(b));
  return [...new Set(values)];
}

/**
 * Gets a random number of valid NACE codes for a specific activity by parsing the activities tree.
 * It throws an error if the activity cannot be found in the activity tree.
 * @param activityName name of the activity to return NACE codes for
 * @returns a random number of valid NACE codes
 */
export function getRandomNumberOfNaceCodesForSpecificActivity(activityName: string): string[] | undefined {
  for (const node of activityTree) {
    if (node.type === "header" && node.children) {
      for (const childNode of node.children) {
        if (childNode.type === "child" && childNode.value === activityName) {
          return getRandomNumberOfNaceCodes(childNode);
        }
      }
    }
  }
  throw new Error(`Activity not found in activity tree: ${activityName}`);
}

/**
 * Gets a random number of NACE codes for one specific childNode if it actually contains NACE codes.
 * @param childNode node in the activity tree to get potential NACE codes from
 * @returns a random number of valid NACE codes or undefined
 */
function getRandomNumberOfNaceCodes(childNode: TreeNode): string[] | undefined {
  let naceCodesToReturn;
  if (Array.isArray(childNode.naceCodes) && childNode.naceCodes.every((item) => typeof item === "string")) {
    const allNaceCodesForActivity = childNode.naceCodes as string[];
    const listWithRandomNumberOfNaceCodes = Array.from(
      { length: faker.number.int({ min: 1, max: allNaceCodesForActivity.length }) },
      () => {
        return faker.helpers.arrayElement(allNaceCodesForActivity);
      },
    );
    naceCodesToReturn = [...new Set(listWithRandomNumberOfNaceCodes)];
  }
  return naceCodesToReturn;
}
