const { parseArgs } = require('node:util')
const fs = require('fs')
const path = require('path')
const express = require('express')
const { exec } = require("child_process")
const bm = require('bitcoinjs-message')
const bl = require('bitcoinjs-lib')
const z32 = require('z32')
const qrlib = require('qrcode')
const { Verifier } = require('bip322-js')
const { bech32 } = require('bech32')
const { schnorr } = require('@noble/curves/secp256k1')

import('lowdb/node').then(lowdb_node => {
  JSONFile = lowdb_node.JSONFile
import('lowdb').then(lowdb => {
  Low = lowdb.Low
import('@nostr/tools/pure').then(nostr_tools_pure => {
  const { getEventHash } = nostr_tools_pure

const URL = process.env.URL

const options = {
  port: {
    type: 'string',
    short: 'p',
    default: '8077',
  }
}

const { values: opts, positionals: args } = parseArgs({
  options,
  allowPositionals: true,
})


var app = express()
var app_options = {}


app.get('/api/v1/lno', (req, res) => {
  const content = JSON.stringify({
    test: "value",
    url: `$URL`,
    id: req.query.id
  })
  res.send(content)
  res.end();
});


var http = require('http')
const port = +opts.port
http.createServer(app_options, app).listen(port)
console.log(`node ${process.version}`)
console.log(`listening on port ${port}`)

})
})
})
