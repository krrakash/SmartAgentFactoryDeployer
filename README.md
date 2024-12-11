# Smart Agent Factory Deployer
## Update your Tenderly Rpc, Project Id, Userame Credentials in `hardhat.config.ts`. 
```ts
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
url: "<your_Tenderly_RPC>",
chainId: 1,
},
},
tenderly: {
// https://docs.tenderly.co/account/projects/account-project-slug
project: "<Your_Project_ID>",
username: "<Your_UserName>",
privateVerification : process.env.TENDERLY_PUBLIC_VERIFICATION !== 'true'
},
};
```
```bash
    npm install
    TENDERLY_AUTOMATIC_VERIFICATION=true npx hardhat run scripts/deploy.ts --network virtual_mainnet

```

