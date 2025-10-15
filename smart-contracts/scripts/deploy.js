const hre = require("hardhat");

async function main() {
  console.log("Deploying TokenPresale contract...");

  const TokenPresale = await hre.ethers.getContractFactory("TokenPresale");
  const tokenPresale = await TokenPresale.deploy();

  await tokenPresale.waitForDeployment();

  const contractAddress = await tokenPresale.getAddress();
  console.log("TokenPresale deployed to:", contractAddress);
  
  console.log("\nContract Details:");
  console.log("Contract Address:", contractAddress);
  console.log("Network:", hre.network.name);
  console.log("Chain ID:", hre.network.config.chainId);
  
  console.log("\nCopy this address to your .env.local file:");
  console.log(`NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS=${contractAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
