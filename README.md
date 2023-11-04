# brute-force-on-evm-compatible-addresses

Note : If you install these required packages on your local machine and after running this script, an error will appear in terminal "Cannot find module 'ethereumjs-wallet/hdkey' ". Because the ethereumwalletjs version > 0.6.0 has some directory problem. The hdkey.js, index.js, and thirdparty.js are kept inside a dist folder of ethereumjs-wallet. To fix this, copy these three files and paste under ethereumjs-wallet directory.

Instructions : 
1. The data.js contains the evm compatible addresses
2. You may keep big data set on the data.js but the max capacity of adrs array when i tested was 110 million. You may ask yourself why this kind                   of big array is required. Well, since we are brute forcing to find the exact address generated from 12 word seed phrase, we need to create an                   array with key value pair to make searching faster instead of using the search algorithms. Hopefully this make sense.
