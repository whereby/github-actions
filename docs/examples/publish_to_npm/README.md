# Publish to NPM

## Publish to NPM

```yml
# publish_to_npm.yml
name: Publish Actual
on:
  push:
    branches: [master]

jobs:
  push:
    name: "Release Package"
    uses: whereby/github-actions/.github/workflows/release_main.yml@main
    secrets:
      npm_token: ${{ secrets.WHEREBY_GITHUB_TOKEN }}example_folderWHEREBY_GITHUB_TOKEN }}
```

## Publish Canary Version

```yml
# publish_canary_version.yml
name: Publish-Draft
on:
  pull_request:
    branches: [master]
jobs:
  push:
    name: "Push Canary"
    uses: whereby/github-actions/.github/workflows/release_canary.yml@main
    secrets:
      npm_token: ${{ secrets.WHEREBY_GITHUB_TOKEN }}
```

### Inputs

`npm_token` should be available in all repositories.

### Pre-reqs

This setup presumes that your package.json includes the following lines:

```json
 "dependencies": {
    "@whereby/auto-config": "^0.0.2",
  },
 "auto": {
     "extends": "@whereby/auto-config"
   }
```
