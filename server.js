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
const https = require('https')

import('lowdb/node').then(lowdb_node => {
  JSONFile = lowdb_node.JSONFile
import('lowdb').then(lowdb => {
  Low = lowdb.Low
import('@nostr/tools/pure').then(nostr_tools_pure => {
  const { getEventHash } = nostr_tools_pure

const CLNREST_HOST = process.env.CLNREST_HOST
const CLNREST_PORT = process.env.CLNREST_PORT
const CLNREST_RUNE = process.env.CLNREST_RUNE
const CLNREST_CERT = process.env.CLNREST_CERT
const CLNREST_CA   = process.env.CLNREST_CA
const CLNREST_KEY  = process.env.CLNREST_KEY

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

  const result = {
    test: "value",
    cwd: process.cwd(),
    host: `${CLNREST_HOST}`,
    port: `${CLNREST_PORT}`,
    id: req.query.id
  }

  const cert = CLNREST_CERT && fs.readFileSync(CLNREST_CERT)
  const ca   = CLNREST_CA   && fs.readFileSync(CLNREST_CA)
  const key  = CLNREST_KEY  && fs.readFileSync(CLNREST_KEY)

  var data = "amount=any"
  var options = {
    hostname: `${CLNREST_HOST}`,
    port: CLNREST_PORT,
    path: '/v1/offer',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': data.length,
      'Rune': `${CLNREST_RUNE}`
    },
    cert,
    ca,
    key
  }
  var requ = https.request(options, resp => {
    result.statusCode = resp.statusCode
    result.headers = 'resp.headers'
    let buf = ''
    resp.on('data', chunk => {
      buf += chunk
    })
    resp.on('end', () => {
      result.response = 'buf'
console.error(buf)
      res.send(JSON.stringify(result))
      res.end();
    })
  })
  requ.on('error', e => {
    result.err = e
    res.send(JSON.stringify(result))
    res.end();
  })
  requ.write(data)
  requ.end()
});


var http = require('http')
const port = +opts.port
http.createServer(app_options, app).listen(port)
console.log(`node ${process.version}`)
console.log(`listening on port ${port}`)

})
})
})
