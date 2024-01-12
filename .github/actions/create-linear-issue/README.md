## Description

This is a small action to allow Linear issues to be opened from within your
worflows.

### Usage

| Input       | Required | Description                                 |
| ----------- | -------- | ------------------------------------------- |
| api-key     | true     | Linear api key to use                       |
| team-id     | true     | Id of Linear team for which to create issue |
| state-id    | true     | Id of the issue state                       |
| title       | true     | Issue title                                 |
| description | true     | Issue description                           |

An `api-key` can be generated

The `team-id` can be retrieved using the following curl command:

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: <Replace this with your Linear API Key>" \
  --data '{ "query": "{ teams { nodes { id name } } }" }' \
  https://api.linear.app/graphql | jq
```

Similarly, the `state-id` can be fetched using:

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: <Replace this with your Linear API Key>" \
  --data '{ "query": "{ workflowStates { nodes { id name type } } }" }' \
  https://api.linear.app/graphql | jq
```

### Building

`yarn build` compiles the action and all its dependencies into `dist/index.js`.
Remember to commit this file, as it is the main entrypoint of the action.
