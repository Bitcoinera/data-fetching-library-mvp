# Data fetching library MVP

The main `index.js` is run, calling functions from the imported `Aragon` class from the `wrapper/index.js` file.

Currently calling `pastEvents()`, `getApp()` and `runApp()`.

### Usage

Run `npm run start` after every change (I know, it is too much hassle xD I will look for alternatives)

### Goal

First Goal: be able to subscribe to all the events occurring in a specific DAO. 

### Notes

For it to work you need to:

1. copy the `artifacts` folder inside the `wrapper` into the `dist` folder. Like this:

```
cp -r node_modules/@aragon/wrapper/artifacts/ dist/
```
2. `apps-abis` too:

```
cp -r app-abis dist/
```

3. copy-pasting the `wrapper-index.js` file into `node_modules/@aragon/wrapper/src/index.js`.

4. You will get a `ReferenceError: self is not defined` at MessagePortMessage. You need to change `self` to `global` (this is because of NodeJS specifications) at `node_modules/@aragon/rpc-messenger/dist/providers/MessagePortMessage.js`

5. Another error at `node_modules/rxjs/internal/util/hostReportError.js:4`. It reads `TypeError: Invalid event target`.
You need to change the `throw err` in:
``` 
setTimeout(function () { throw err; }, 0);
```
for `return err`.