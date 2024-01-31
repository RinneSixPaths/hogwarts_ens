import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

// URL comes from Alchemy
// https://cloudflare-ipfs.com/ipfs/INSERT_YOUR_CID_HERE
// npx hardhat run scripts/deploy.ts --network mumbai

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
      viaIR: true,
    },
  },
  networks: {
    mumbai: {
      url: 'ALCHEMY_URL',
      accounts: ['YOU_PRIVATE_KEY']
    }
  }
};

export default config;
