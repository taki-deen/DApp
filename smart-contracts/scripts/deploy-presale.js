// scripts/deploy-presale.js
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  // 1) Deploy token
  const initialSupply = ethers.parseUnits("1000000", 18);
  const Token = await ethers.getContractFactory("MyTestToken");
  const token = await Token.deploy(initialSupply);
  await token.waitForDeployment();
  console.log("Token deployed:", token.target);

  // 2) Deploy Presale (تعديل args حسب constructor عندك)
  // مثال افتراضي: Presale(tokenAddress, tokenPrice, endTimestamp)
  const Presale = await ethers.getContractFactory("PresaleContract");
  const tokenPrice = ethers.parseUnits("0.01", 18); // مثال: 0.01 BNB per token
  const endsAt = Math.floor(Date.now() / 1000) + 7 * 24 * 3600; // أسبوع من الآن

  const presale = await Presale.deploy(token.target, tokenPrice, endsAt);
  await presale.waitForDeployment();
  console.log("Presale deployed:", presale.target);

  // 3) Fund presale: نقل توكنات للعقد
  const amountForPresale = ethers.parseUnits("500000", 18);
  const tx = await token.transfer(presale.target, amountForPresale);
  await tx.wait();
  console.log("Funded presale with tokens:", amountForPresale.toString());

  console.log("Done. Update frontend .env.local with NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS=", presale.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
