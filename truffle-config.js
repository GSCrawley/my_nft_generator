require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = process.env.INFURA_API_KEY;
// const mnemonic = process.env.WALLET_MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Change this to match the port used by your local blockchain (e.g., Ganache)
      network_id: "*",
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          process.env.WALLET_MNEMONIC,
          `https://goerli.infura.io/v3/${infuraKey}`
        ),
      network_id: 5, // Goerli's network id
      gas: 3000000, // Gas limit
      // gasPrice: 10000000000, // 10 gwei
      maxPriorityFeePerGas: 1000000000,
      maxFeePerGas: 81000000000,
      confirmations: 2, // # of confs to wait between deployments
      timeoutBlocks: 200, // # of blocks before a deployment times out
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets)
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          process.env.WALLET_MNEMONIC,
          `https://sepolia.infura.io/v3/${infuraKey}`
        ),
      network_id: 11155111, // Sepolia's network id
      gas: 5500000, // Gas limit
      maxPriorityFeePerGas: 2000000000, // 2 gwei in wei
      maxFeePerGas: 5000000000, // 5 gwei in wei
      confirmations: 2, // # of confs to wait between deployments
      timeoutBlocks: 200, // # of blocks before a deployment times out
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets)
    },
   },
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  db: {
    enabled: false,
  },
 }

