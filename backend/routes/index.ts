import {Request, Response} from "express";
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req:Request, res:Response) {
  res.send("Expressss A")
});

module.exports = router;
