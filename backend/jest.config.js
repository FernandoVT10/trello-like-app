const commonOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: "./",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};


/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  projects: [
    {
      displayName: "integration",
      testPathIgnorePatterns: ["./src/"],
      setupFilesAfterEnv: ["./test/setupTests.ts"],
      ...commonOptions,
    },
    {
      displayName: "unit",
      testPathIgnorePatterns: ["./test/"],
      ...commonOptions,
    },
  ],
};
