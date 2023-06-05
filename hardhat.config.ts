import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('hardhat-ethernal');
const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: ["dbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97"]
    }
  }
};

export default config;
