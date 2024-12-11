import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy AgentRegistration contract without any constructor argument
    const AgentRegistration = await ethers.getContractFactory("SmartAgentContractFactory");
    const agentRegistration = await AgentRegistration.deploy();  // No arguments needed

    // Wait for the contract to be mined (transaction to be confirmed)
    await agentRegistration.deploymentTransaction();

    console.log("AgentRegistration deployed to:", await agentRegistration.getAddress());

    console.log("Deployment complete!");
}

// Error handling
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
    });

