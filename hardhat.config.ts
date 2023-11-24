import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

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
      url: 'https://polygon-mumbai.g.alchemy.com/v2/D-CXI9269ka4_7_hh69DoRYO5SXTZEKz',
      accounts: [''],
    }
  }
};

export default config;
