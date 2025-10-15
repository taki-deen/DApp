// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenPresale {
    uint256 public tokenPrice = 0.0001 ether;
    uint256 public tokensSold;
    uint256 public tokensAvailable = 400_000_000 * 10**18;
    uint256 public endTime;
    address public owner;
    
    uint256 public totalSupply = 1_000_000_000 * 10**18;
    uint256 public presaleAllocation = 400_000_000 * 10**18;
    uint256 public liquidityAllocation = 300_000_000 * 10**18;
    uint256 public marketingAllocation = 150_000_000 * 10**18;
    uint256 public teamAllocation = 100_000_000 * 10**18;
    uint256 public reserveAllocation = 50_000_000 * 10**18;

    constructor() {
        owner = msg.sender;
        endTime = block.timestamp + 30 days;
    }

    function buyTokens() external payable {
        require(block.timestamp < endTime, "Presale ended");
        require(msg.value > 0, "Send BNB to buy tokens");
        
        uint256 tokenAmount = (msg.value * 10**18) / tokenPrice;
        require(tokenAmount <= tokensAvailable, "Not enough tokens available");
        
        tokensSold += tokenAmount;
        tokensAvailable -= tokenAmount;
    }

    function withdraw() external {
        require(msg.sender == owner, "Only owner");
        payable(owner).transfer(address(this).balance);
    }
}

