
const { GnosisSafe } = require("@gnosis.io/safe-core-sdk");
const safe = new GnosisSafe("0x...", "1", "rinkeby");

const privateKey = "0x...";
const amountToSwap = "1000000000000000000"; // 1 ETH
const toTokenAddress = "0x...";
const toSymbol = "DAI";

safe.inch_swap(privateKey, amountToSwap, toTokenAddress, toSymbol).then((tx) => {
  console.log(tx);
});

