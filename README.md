# env-parser
Simple env variables parser 🎈

``` typescript
const ENV_FILE_LOCATION = "../../.env"
// if ENV_FILE_LOCATION is not set then the function will
// assume the file location is ".env"

// parse in sync
// you can use this method in you root project file whenever the program is executed
envParser(ENV_FILE_LOCATION)

// now you can access whatever env variables you want in the enviroment file through process.env object 🎉
// example
const ENVIROMENT = process.env.NODE_ENVIROMENT
const SMTP_PASSWORD = process.env.SMTP_PASSWORD
```
