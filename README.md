# Data fetching library MVP

The main `index.js` is run, calling functions from the imported `Aragon` class from the `wrapper/src/index.js` file in the `@aragon/wrapper` package.

<b>With the `currentEvents()` function we achieve getting subscribed to the events currently happening within an Aragon DAO app.</b>

## Installation & Preparation

Run `npm run start` after every change (I know, it is too much hassle xD)

Currently it is connecting with `currentEvents()` to the Voting App inside the `dappwalltest0.aragonid.eth` DAO.

<b>For it to work you need to:</b>

1. Install modules:
```
npm i
```
2. copy the `artifacts` folder inside the `wrapper` into the `dist` folder. Like this:
```
mkdir dist
cp -r node_modules/@aragon/wrapper/artifacts dist/artifacts
```
3. `apps-abis` content should go into the `@aragon/os` package like so:
```
cp apps-abis/* node_modules/@aragon/os/abi/
```
4. replace the `node_modules/@aragon/wrapper/src/index.js` file with the `wrapper-index.js` one.
```
cp wrapper-index.js node_modules/@aragon/wrapper/src/index.js
```

5. replace the `node_modules/@aragon/wrapper/interfaces.js` file with the `interfaces.js` one.
```
cp interfaces.js node_modules/@aragon/wrapper/src/
```
6. 
```
npm run start
```

## How to subscribe to your own DAO's app

1. Change this line `const yourDAO = new Aragon('0xeeda0bD313b8042B360Ac6755e01D7970860c445'` in the `index.js` file and replace the address with the one of your organization. You can check easily it in the UI at 'Organization'.

2. At line `265` in the `wrapper-index` file, change this line:
`let votingAppAddress = '0x40923e3215243b4a51bf411f9873d02f5bacfd60'`
and replace it for the address of the app you wish to listen to. Also it is highly recommendable to change the variable's name to match the app's

3. At line `270`, change it all with your app's name and don't forget the second parameter, which identifies you app's ABI. 
These are all the ABIs I added: 'Finance, 'TokenManager', 'Vault', 'Agent', 'Survey','Payroll', 'DAppWall'.
```
    this.votingProxy = makeProxy(votingAppAddress, 'Voting', this.web3, { initializationBlock: this.kernelProxy.initializationBlock })
```

4. At line `276` `const VOTING_CACHE_KEY = getCacheKey(votingAppAddress, 'voting')` change it for the variable name you used in line `270`. The second parameter you don't need to change it.

5. At line `313` and `298` change `votingProxy`, inside the `currentEvents` and `pastEvents` functions, for the variable name you used at line `270`.

### Goal

First Goal: be able to subscribe to all the events occurring in a specific DAO. 
---> <b>Accomplished</b> in the way that found out how to subscribe to the events occurring within an app with the `currentEvents()` function.

### Notes 

These instructions are only there if you plan to use the `runApp()` function. Not sure if this function is useful at all.

1. You will get a `ReferenceError: self is not defined` at MessagePortMessage. You need to change `self` to `global` (this is because of NodeJS specifications) at `node_modules/@aragon/rpc-messenger/dist/providers/MessagePortMessage.js`

2. Another error at `node_modules/rxjs/internal/util/hostReportError.js:4`. It reads `TypeError: Invalid event target`.
You need to change the `throw err` in:
``` 
setTimeout(function () { throw err; }, 0);
```
for `return err`.
