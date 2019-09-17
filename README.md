# Data fetching library MVP

The main `index.js` is run, calling functions from the imported `Aragon` class from the `wrapper/index.js` file in the `@aragon/wrapper` package.

Currently calling `pastEvents()` and `currentEvents()`.

<b>With the `currentEvents()` function we achieve getting subscribed to the events currently happening within an Aragon DAO app.</b>

### Usage

Run `npm run start` after every change (I know, it is too much hassle xD I will look for alternatives)

I will add more instructions. Currently it is connecting with `currentEvents()` to the Voting App inside the `dappwalltest0.aragonid.eth` DAO.

### Goal

First Goal: be able to subscribe to all the events occurring in a specific DAO. 
---> <b>Accomplished</b> in the way that found out how to subscribe to the events occurring within an app with the `currentEvents()` function.

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

3. replace the `node_modules/@aragon/wrapper/src/index.js` file with the `wrapper-index.js` one.

4. replace the `node_modules/@aragon/wrapper/interfaces.js` file with the `interfaces.js` one.


-----------------> This is only if you are going to use the `runApp()` function. Not sure if this function is useful at all.

5. You will get a `ReferenceError: self is not defined` at MessagePortMessage. You need to change `self` to `global` (this is because of NodeJS specifications) at `node_modules/@aragon/rpc-messenger/dist/providers/MessagePortMessage.js`

6. Another error at `node_modules/rxjs/internal/util/hostReportError.js:4`. It reads `TypeError: Invalid event target`.
You need to change the `throw err` in:
``` 
setTimeout(function () { throw err; }, 0);
```
for `return err`.