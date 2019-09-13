# Data fetching library MVP

The main `index.js` at the first layer is run, calling functions from the imported `Aragon` class from the `wrapper/index.js` file.

Currently calling `pastEvents()`, `runApp()` and `getApp()`.


### Notes

For it to work you need to copy the `artifacts` folder inside `wrapper` into the `dist` folder. Like this:

```
cp -r wrapper/artifacts/ dist/
```