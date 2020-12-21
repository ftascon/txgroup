/* tslint:disable */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: [ "<rootDir>/test/**/*ts"],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
    ],
    coveragePathIgnorePatterns: [
        "/src/txGroup/Infrastructure/",
        "/src/",
        "/node_modules/",
        "/test/",
        "/src/core/",
        "/src/provider/",
    ],
};
