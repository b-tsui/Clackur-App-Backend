const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { ValidationError } = require("sequelize");
const { environment } = require("./config");
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');



const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
const index = require('./routes/index')

// Set up Auth0 configuration
const authConfig = {
    domain: "dev-1232de9a.auth0.com",
    audience: "clackurAuthAPI"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-1232de9a.auth0.com
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
});


app.use('/', index);

app.get('/authorized', checkJwt, (req, res) => {
    res.send('Secured Resource');
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
    res.send({
        msg: "Your Access Token was successfully validated!"
    });
});

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

// Error handlers. (must have all four arguments to communicate to Express that
// this is an error-handling middleware function)

// Process sequelize errors
app.use((err, req, res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = "Sequelize Error";
    }
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === "production";
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;
