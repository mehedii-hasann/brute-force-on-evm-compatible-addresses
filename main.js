const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/hdkey');
const { Buffer } = require('buffer');
const { privateToAddress, toChecksumAddress } = require('ethereumjs-util');
const bitcoin = require('bitcoinjs-lib');
const fs = require('fs');
const data = fs.readFileSync('./addresses.txt', 'utf-8');
let adrs = [];
let num = 0;
let brk = true;
let lines = data.split('\n');
for(let i =0;i<lines.length;i++)
{
    adrs[lines[i]]= 1;
}
console.log(adrs['0x63a9975ba31b0b9626b34300f7f627147df1f526'])