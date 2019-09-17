# Data fetching library MVP

The main `index.js` is run, calling functions from the imported `Aragon` class from the `wrapper/index.js` file.

Currently calling `pastEvents()`, `getApp()` and `runApp()`.

### Usage

Run `npm run start` after every change (I know, it is too much hassle xD I will look for alternatives)

### Goal

First Goal: be able to subscribe to all the events occurring in a specific DAO. 

### Notes

For it to work you need to copy the `artifacts` folder inside the `wrapper` into the `dist` folder. Like this:

```
cp -r node_modules/@aragon/wrapper/artifacts/ dist/
```
And `apps-artifacts` too:

```
cp -r app-artifacts dist/
```

Also, I am copy-pasting the `wrapper-index.js` file into `node_modules/@aragon/wrapper/src/index.js`.