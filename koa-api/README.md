Ensure the /.env file (hidden) is updated with:
    
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