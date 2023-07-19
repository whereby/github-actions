# push_to_s3.yml

After defining an s3 bucket inside the [platform repository](https://github.com/whereby/platform) like so:

```tf
module "s3_bucket" {
  source  = "app.terraform.io/whereby/s3_bucket/aws"
  version = "0.2.1"
  environment = local.environment
  name = "example-bucket"
  github_repos_access = ["github-actions"]
}
```

Pushing to an s3 bucket is as simple as:

```yaml
name: "Testing"

on: push

jobs:
  push:
    name: "Push random text file"
    uses: whereby/github-actions/.github/workflows/push_to_s3.yml@main
    with: 
      s3_bucket_name: whereby-example-bucket-sx-wmbd
      aws_role_to_assume: arn:aws:iam::964528283748:role/ga-s3-example-bucket-role
      source_dir: example_folder
      destination_dir: example # if this is omitted then files within example_folder will be copied into the s3 bucket's root directory
```
## Inputs

### s3_bucket_name

To get the s3_bucket_name you can check [here](https://s3.console.aws.amazon.com/s3/buckets?region=eu-west-1&region=eu-west-1). If created via the platform repository this will be in the format of `whereby-${bucket-name}-${random-suffix}`.

### aws_role_to_assume

To get the aws_role_to_assume you can check [here](https://us-east-1.console.aws.amazon.com/iamv2/home?region=eu-west-1#/roles). If created via the platform repository this will be in the format of `ga-${bucket-name}-role`.

