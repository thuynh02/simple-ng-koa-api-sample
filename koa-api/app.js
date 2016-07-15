var koa = require('koa')
var jwt = require('koa-jwt');
var cors = require('koa-cors');
var routes = require('koa-route');
var bodyparser = require('koa-bodyparser');
var dotenv = require('dotenv');
dotenv.load();

// App configuration
var app = koa();
app.use(cors()); // Enable cross-site data transfer
app.use(bodyparser()); // Enable POST body parsing

// Routes
var ping = require('./routes/ping');
var register = require('./routes/register');

// Validate incoming id_tokens unless they are going through a public directory
var privateKey = new Buffer(process.env.AUTH0_CLIENT_SECRET, 'base64');
app.use( 
    jwt({
        secret: privateKey,
        algorithm: 'HS256'
    })
    .unless({path:[/^\/public/]})
);

app.use(routes.get('/public/ping', ping.publicPing));
app.use(routes.get('/ping', ping.privatePing));
app.use(routes.post('/register', register.create));

var port = process.env.PORT || 12001;
app.listen(port);
console.log(`Listening on port: ${port}`)

module.exports = app;
