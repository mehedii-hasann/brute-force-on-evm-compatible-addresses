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

console.log('searching started..');

function generatePermutations(arr) {
    function swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    function permute(arr, start) {
      if (start === arr.length - 1 && brk) {
        const seedPhrase = arr[0]+' '+arr[1]+' '+arr[2]+' '+arr[3]+' '+arr[4]+' '+arr[5]+' '+arr[6]+' '+arr[7]+' '+arr[8]+' '+arr[9]+' '+arr[10]+' '+arr[11];
        const seed = bip39.mnemonicToSeedSync(seedPhrase);
        const masterNode = hdkey.fromMasterSeed(seed);
        const accountNode = masterNode.derivePath("m/44'/60'/0'/0/0");
        const privateKey = accountNode.getWallet().getPrivateKey();
        const private_key = '0x'+privateKey.toString('hex');
        const addressBuffer = privateToAddress(privateKey);
        const eth_public_address = '0x'+ addressBuffer.toString('hex');
        if(adrs[eth_public_address] != null)
        {
            //print the address and break if matches 
            console.log(seedPhrase);
            brk = false;
        }
      }
  
      for (let i = start; i < arr.length; i++) {
        swap(arr, start, i);
        permute(arr, start + 1);
        swap(arr, start, i);
      }
    }
    permute(arr, 0);
  }
  // function called with 12 word seed phrase
  generatePermutations(['word1','word2','word3','word4','word5','word6','word7','word8','word9','word10','word11','word12']);

  console.log('all possible addresses generated');