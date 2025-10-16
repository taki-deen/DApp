const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenPresale", function () {
  let tokenPresale;
  let owner;
  let buyer;

  beforeEach(async function () {
    [owner, buyer] = await ethers.getSigners();
    
    const TokenPresale = await ethers.getContractFactory("TokenPresale");
    tokenPresale = await TokenPresale.deploy();
    await tokenPresale.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await tokenPresale.owner()).to.equal(owner.address);
    });

    it("Should have correct initial values", async function () {
      expect(await tokenPresale.tokenPrice()).to.equal(ethers.parseEther("0.0001"));
      expect(await tokenPresale.tokensAvailable()).to.equal(ethers.parseUnits("400000000", 18));
      expect(await tokenPresale.totalSupply()).to.equal(ethers.parseUnits("1000000000", 18));
    });
  });

  describe("Buy Tokens", function () {
    it("Should allow buying tokens with BNB", async function () {
      const buyAmount = ethers.parseEther("0.1");
      const expectedTokens = buyAmount * BigInt(10**18) / ethers.parseEther("0.0001");
      
      await expect(tokenPresale.connect(buyer).buyTokens({ value: buyAmount }))
        .to.emit(tokenPresale, "TokensPurchased")
        .withArgs(buyer.address, buyAmount, expectedTokens);
    });

    it("Should fail if presale has ended", async function () {
      await hre.network.provider.send("evm_increaseTime", [30 * 24 * 60 * 60 + 1]);
      await hre.network.provider.send("evm_mine");

      await expect(
        tokenPresale.connect(buyer).buyTokens({ value: ethers.parseEther("0.1") })
      ).to.be.revertedWith("Presale ended");
    });
  });
});
