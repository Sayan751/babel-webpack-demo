# Babel Webpack Decorator Demo

This repository demonstrates an issue with webpack and babel-loader when using decorators.

## Reproduction steps
- Run the following command to prepare a nginx container with the compiled files.

```shell
# Replace PATH_TO with correct path
docker run --name babel-webpack-deco-demo --mount type=bind,source=PATH_TO\babel-webpack-demo\dist,target=/usr/share/nginx/html,readonly -p 9899:80 -d nginx
```
- Do `npm ci`
- Do `npm run build`
- Open `http://localhost:9899` in browser

Following error will be shown in console: `Uncaught ReferenceError: testVarOne is not defined`

If the decorator usage (`@bar`) in the `my-element.js` is removed, the error will disappear.