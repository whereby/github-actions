# push_to_s3.yml

```
name: "Testing"

on: push

jobs:
  push:
    name: "Push random text file"
    uses: whereby/github-actions/.github/workflows/push_to_s3.yml@main
    with: 
      s3_bucket_name: whereby-example-bucket-sx-wmbd
      aws_role_to_assume: arn:aws:iam::964528283748:role/ga-s3-example-bucket-role
      directory: example_folder
      destination_folder_name: example # if this is omitted then files within example_folder will be copied into the s3 bucket's root directory
```
## Inputs

### s3_bucket_name

To get the s3_bucket_name you can check [here](https://s3.console.aws.amazon.com/s3/buckets?region=eu-west-1&region=eu-west-1). If created via the platform account this will be in the format of `whereby-${bucket-name}-${random-suffix}`.

### aws_role_to_assume

To get the aws_role_to_assume you can check [here](https://us-east-1.console.aws.amazon.com/iamv2/home?region=eu-west-1#/roles). If created via the platform account this will be in the format of `ga-${bucket-name}-role`.

