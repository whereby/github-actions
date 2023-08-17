# deploy_node_lambda.yml

After defining a lambda function inside the [platform repository](https://github.com/whereby/platform) like so:

```tf
module "example-lambda" {
  source  = "app.terraform.io/whereby/lambda/aws"
  version = "0.2.1"

  environment            = var.environment
  name                   = "example-lambda"
  github_repository_name = "github-actions"

  description = "example"

  function_handler = "example"
  function_runtime = "nodejs14.x"

  schedule_expression = "cron(0 * * * ? *)"
}
```

Pushing a lambda to an s3 bucket is as simple as:

```yaml
name: "Testing again"

on: push

jobs:
  push:
    name: "Push example lambda"
    uses: whereby/github-actions/.github/workflows/deploy_node_lambda.yml@main
    with:
      lambda_name: example-lambda
      aws_role_to_assume: arn:aws:iam::964528283748:role/ga-lambda-example-lambda-role
      source_dir: ./src
    secrets:
      node_auth_token: ${{ secrets.WHEREBY_GITHUB_TOKEN }}
```

## Inputs

### aws_role_to_assume

To get the aws_role_to_assume you can check [here](https://us-east-1.console.aws.amazon.com/iamv2/home?region=eu-west-1#/roles). If created via the platform repository this will be in the format of `ga-${lambda_name}-role`.

### node_auth_token

This should exist in ${{ secrets.WHEREBY_GITHUB_TOKEN }}

## source_dir

This presumes that your package.json and lambda entrypoint exist in one folder.
