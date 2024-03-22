
const {gmx} = require('@decentralized-technologies/web3-client');

const privateKey = '...'
const gasLimit = 1000000

gmx.web_gmx_buy_glb(privateKey, gasLimit).then((txHash) => {
  console.log(txHash)
}).catch((error) => {
  console.log(error)
})

