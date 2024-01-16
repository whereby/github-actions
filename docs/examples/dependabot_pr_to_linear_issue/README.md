# package.json version increment checker

```yml
name: Testing Workflow
on:
  pull_request:
    types:
      - opened

jobs:
  create_linear_issue_from_dependabot_prs:
    name: "Create Linear issue from Dependabot PRs"
    uses: whereby/github-actions/.github/workflows/dependabot_pr_to_linear_issue.yml@main
    secrets:
      linear_api_key: ${{ secrets.LINEAR_API_KEY }}
    with:
      actor: ${{ github.actor }}
      linear_team_id: ${{ vars.LINEAR_TEAM_ID }}
      linear_state_id: ${{ vars.LINEAR_STATE_ID }}
```

Creates a Linear issue for given team in given state if the pull request has
been opened by Dependabot.

## Secrets

`linear_api_key`: Required. Linear api key to use when creating issue.

## Inputs

`actor`: [Optional] Override which username to check. Defaults to `dependabot[bot]`

`linear_team_id`: Required. Id of the Linear team to create issue for.

`linear_state_id`: Required. Id of the issue state.
