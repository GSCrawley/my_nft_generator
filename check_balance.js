const Web3 = require('web3');
require('dotenv').config()


const INFURA_PROJECT_ID = process.env.INFURA_API_KEY;
const INFURA_ENDPOINT = `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`;

const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_ENDPOINT));

const address = process.env.ETHER_ADDRESS;

async function checkBalance() {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
  console.log(`Balance for ${address}: ${balanceEth} ETH`);
}

checkBalance();
