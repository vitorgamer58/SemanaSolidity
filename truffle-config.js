const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config();

const mnemonic = process.env.MNEMONIC.toString().trim();
const bscscan_apikey = process.env.BSC_SCAN_APIKEY;

module.exports = {
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    bscscan: bscscan_apikey,
  },
  networks: {
    bsctest: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic,
          },
          providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
        }),
      network_id: "97",
    },
  },
  compilers: {
    solc: {
      version: "0.8.1",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
