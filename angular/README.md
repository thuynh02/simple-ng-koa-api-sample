# Calling API example.

Before you start, ensure that the ./app/globals.ts file is up to date with:

    1. The url the koa-api example is being hosted on (includes port 12000 by default)
    2. The client id of the Auth0 account you want to test
    3. The client domain of the Auth0 account

The api config will also need to be updated. Ensure the /.env file (hidden) in 
the koa-api project is updated with:
    
    1. The client secret of the Auth0 account
    2. The port you want to use (12000 by default)
    3. The DB name you want to reference to register new users
    4. The DB username
    5. The DB password
    6. The url to access the DB
    7. The type of DB (postgres by default)

Once that's all settled, just run each example with:

```
npm install
npm start
```


