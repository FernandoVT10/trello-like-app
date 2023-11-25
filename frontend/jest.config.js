/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.ts"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};