# deploy_python_lambda.yml

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
  function_runtime = "python3.10"

  schedule_expression = "cron(0 * * * ? *)"
}
```

Pushing a lambda to an s3 bucket is as simple as:

```yaml
name: "Testing"

on: push

jobs:
  push:
    name: "Push example lambda"
    uses: whereby/github-actions/.github/workflows/deploy_python_lambda.yml@main
    with:
      lambda_name: example-lambda
      aws_role_to_assume: arn:aws:iam:123456789:role/ga-lambda-example-role
      source_dir: 
```
## Inputs

### aws_role_to_assume

To get the aws_role_to_assume you can check [here](https://us-east-1.console.aws.amazon.com/iamv2/home?region=eu-west-1#/roles). If created via the platform repository this will be in the format of `ga-${lambda_name}-role`.

## source_dir

This presumes that your `requirements.txt` folder and lambda entrypoint (normally lambda_function.py) exist in one folder. 
