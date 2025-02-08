**********

- Deploy code
  * zip lambda.zip *.mjs
  * aws lambda update-function-code --function-name test-function --zip-file fileb://lambda.zip