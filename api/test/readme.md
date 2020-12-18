#How-to start testing in Typescript

First of all we need to import two packages.

```typescript
import "reflect-metadata"; // Import decorators-metadata used by inversify
import * as TypeMoq from "typemoq"; // Mocking library
```

All jest suites start with a _describe(string, func)_:

```typescript
describe("Testing library X", () => {
    //CODE
});
``` 

Inside describe function we create scenarios with every branch with _it(string, func)_:

```typescript
describe("Testing library X", () => {
    it("Scenario 1", () => {
        
    });
});
```

We also have two helper functions _beforeEach_ and _afterEach_ for help preparation of scenarios:

```typescript
describe("Testing library X", () => {
    beforeEach(() => {
      releaseTheDragon();
    });
    
    afterEach(() => {
      catchAndJailTheDragon();
    });
    
    it("Scenario 1", () => {
        
    });
});
```

For more info please check documentation of libraries: [Jest](https://jestjs.io/) and [Typemoq](https://github.com/florinn/typemoq)
