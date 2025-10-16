// scripts/deploy-token.js
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const initialSupply = ethers.parseUnits("1000000", 18); // عدّل الكمية إذا بدك
  const MyToken = await ethers.getContractFactory("MyTestToken");
  const token = await MyToken.deploy(initialSupply);
  await token.waitForDeployment();

  console.log("Token deployed to:", token.target);
  console.log("Add this address to frontend .env.local as NEXT_PUBLIC_TOKEN_ADDRESS");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
