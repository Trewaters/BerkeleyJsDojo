### Setup NPM starter package.json

- `npm init` - setup package.json

### 2 factor authentication

- [2 factor authentication](https://docs.npmjs.com/getting-started/using-two-factor-authentication)

### npx (incomplete)

`npx PACKAGE_NAME`

### list global install directories and packages

- default location of cache on Windows `%AppData%/npm-cache`
- `npm list -g` - list global directory and installed packages
- `npm list` - list packages installed in local directory

### NPM install

- `npm install PACKAGE_NAME --save-dev` [install dev dependencies](https://docs.npmjs.com/cli/install)

### NPM uninstall

- `npm uninstall -g <PACKAGE>` [uninstall docs](https://docs.npmjs.com/cli/uninstall)

### NPM update package

- `npm update <PACKAGE>` [documentation](https://docs.npmjs.com/cli/update)

### Check npm version

- `npm -v` or `npm --version` [documentation](https://docs.npmjs.com/cli/v7/commands/npm-version)

### Update to latest version of npm

- `npm install npm@latest` (https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm)

### Change init configuration defaults

- `npm config set <key like "init-author-name"> <value usually as string>`
- important
 - "init-author-name"
 - "init-author-email"
 - "init-license"
- [documentation for config](https://docs.npmjs.com/misc/config)