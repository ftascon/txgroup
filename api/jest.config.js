/* tslint:disable */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
    ],
    coveragePathIgnorePatterns: [
        "/src/Visas/Infrastructure/",
        "/node_modules/",
        "/test/",
        "/src/core/",
        "/src/provider/",
    ],
};
