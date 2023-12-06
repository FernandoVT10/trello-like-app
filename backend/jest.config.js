const commonOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./",
};


/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: [
    {
      displayName: "integration",
      testPathIgnorePatterns: ["./src/"],
      moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
        "@test/(.*)": "<rootDir>/test/$1",
      },
      setupFilesAfterEnv: ["./test/setupTests.ts"],
      maxConcurrency: 1,
      ...commonOptions,
    },
    {
      displayName: "unit",
      testPathIgnorePatterns: ["./test/"],
      moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
      },
      ...commonOptions,
    },
  ],
};
