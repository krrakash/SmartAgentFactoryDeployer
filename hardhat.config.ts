import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";
import * as dotenv from "dotenv";


dotenv.config();

// tenderly.setup({ automaticVerifications: !!process.env.TENDERLY_AUTOMATIC_VERIFICATION });

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      { version: "0.8.28" }, // For Lock.sol
      { version: "0.8.20" }, // For SmartAgent.sol
      { version: "0.8.20" }, // For OpenZeppelin dependencies
    ],
  },
  networks: {
    virtual_mainnet: {
      url: "<Tenderly_RPC_URL>",
      chainId: 1,
    },
  },
  tenderly: {
    // https://docs.tenderly.co/account/projects/account-project-slug
    project: "<Tenderly_ProjectName>",
    username: "<UserName>",
    privateVerification : process.env.TENDERLY_PUBLIC_VERIFICATION !== 'true'
  },
};

export default config;