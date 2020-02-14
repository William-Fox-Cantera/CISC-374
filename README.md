# try-typescript

Repository full of sample typescript problems.

When you are done this assignment, replace the text below to indicate how many of the problems you have finished.

**Current Progress:** I have not yet finished any of the problems.

You should complete as many questions as you can.
This is a chance to learn how to write TypeScript.

I've set up unit tests for all but the Class questions - you are directed to write your instantiations rather than unit testing them (sorry, ran out of time!). The other questions all have unit tests through *Jasmine* (a popular JS/TypeScript unit testing framework).

These questions are not meant to be assessments. They are learning opportunities. Most of them came from the internet, so you shouldn't be afraid to google to help figure things out. Focus on learning key concepts in TypeScript!

# Testing your solutions

Once properly configured, you should be able to run all the tests using the `test` command
in `package.json`.

From within VSCode, expand "NPM SCRIPTS" in the bottom left corner, expand `package.json`.
There should be a `test` command; hovering over it will expose a triangular "run" button.
Click the button and you should see that you are currently failing all the unit tests.

If the "NPM SCRIPTS" menu is not available, then open up your `package.json` file, right-click anywhere on line 6, and click "run script". Afterwards, the menu should appear for this project.

Go through each of the following files and implement them. You can run the unit tests
at any time to see whether your solution is working.

* `src/strings.ts`
* `src/arrays.ts`
* `src/objects.ts`
* `src/classes.ts`

## Example Error Output

When you fail a unit test, you can see output like this:

```
21) countTriple xxxabyyyycd
  Message:
    Expected 0 to be 3.
  Stack:
    Error: Expected 0 to be 3.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\acbart\Projects\cisc374\games\try-typescript\tests\strings.test.ts:38:44)
        at <Jasmine>
```

You can also install the [Jasmine Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-jasmine-test-adapter) extension to improve the output.