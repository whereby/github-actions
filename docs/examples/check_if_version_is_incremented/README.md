# package.json version increment checker

```yml
name: Testing Workflow
on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
      - ready_for_review

jobs:
  check_if_version_has_been_incremented:
    name: "Test if package.json incremented"
    uses: whereby/github-actions/.github/workflows/check_if_version_is_incremented.yml@1.0.0
    with:
      source_dir: src
```

If the branch's `package.json` `version` number is less than or equal to current
`version` then this check will fail with:

`Version is unchanged, please update version in package.json`

## Inputs

`source_dir`: required, the folder that will be checked for changes (can be `.`)

`main_branch`: optional, defaults to `main`

`packagejson_dir`: optional, defaults to `.`

## Outputs

`new_version`: If the version has changed since last commit, returns the new
version.
