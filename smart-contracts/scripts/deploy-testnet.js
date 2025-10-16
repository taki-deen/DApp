// scripts/deploy-testnet.js
async function main(){
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const initialSupply = ethers.parseUnits("1000000", 18); // 1,000,000 tokens
  const MyToken = await ethers.getContractFactory("MyTestToken");
  const token = await MyToken.deploy(initialSupply);
  await token.waitForDeployment();
  console.log("Token deployed to:", token.target);
}

main().catch(e => { console.error(e); process.exitCode = 1; });

