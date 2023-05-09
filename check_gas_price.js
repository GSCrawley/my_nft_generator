require('dotenv').config()
// check_gas_price.js
const Web3 = require("web3");

// Replace with the appropriate RPC URL for the network you want to check
const rpcUrl = "https://sepolia.infura.io/v3/process.env.INFURA_API_KEY";
const web3 = new Web3(rpcUrl);

(async () => {
  try {
    const gasPrice = await web3.eth.getGasPrice();
    console.log(`Current gas price on the network: ${web3.utils.fromWei(gasPrice, "gwei")} gwei`);
  } catch (error) {
    console.error("Error getting gas price:", error);
  }
})();
