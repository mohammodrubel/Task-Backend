const express = require('express');
const { ContactRouter } = require('./router_contats');

const router = express.Router()

const myRouter = [
    {path:'/contact',route:ContactRouter},
]

myRouter.forEach((route) => router.use(route.path, route.route));



module.exports = router