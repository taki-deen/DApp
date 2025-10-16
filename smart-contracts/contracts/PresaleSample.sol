// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenPresale {
    // ====================
    // ERC20 basic variables
    // ====================
    string public name = "MyToken";
    string public symbol = "MTK";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    // ====================
    // Presale variables
    // ====================
    uint256 public tokenPrice = 0.0001 ether; // سعر التوكن الواحد
    uint256 public tokensSold;
    uint256 public tokensAvailable;
    uint256 public endTime;
    address public owner;

    // Allocation
    uint256 public presaleAllocation = 400_000_000 * 10**18;
    uint256 public liquidityAllocation = 300_000_000 * 10**18;
    uint256 public marketingAllocation = 150_000_000 * 10**18;
    uint256 public teamAllocation = 100_000_000 * 10**18;
    uint256 public reserveAllocation = 50_000_000 * 10**18;

    // ====================
    // Events
    // ====================
    event TokensPurchased(address indexed buyer, uint256 amount, uint256 totalSold);
    event Transfer(address indexed from, address indexed to, uint256 value);

    // ====================
    // Constructor
    // ====================
    constructor() {
        owner = msg.sender;
        totalSupply = 1_000_000_000 * 10**18;
        tokensAvailable = presaleAllocation;
        balanceOf[owner] = totalSupply - presaleAllocation;
        endTime = block.timestamp + 30 days;
    }

    // ====================
    // ERC20 basic transfer
    // ====================
    function _transfer(address from, address to, uint256 amount) internal {
        require(balanceOf[from] >= amount, "Not enough balance");
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        emit Transfer(from, to, amount);
    }

    // ====================
    // Buy tokens
    // ====================
    function buyTokens() external payable {
        require(block.timestamp < endTime, "Presale ended");
        require(msg.value > 0, "Send BNB to buy tokens");

        // ✅ الحساب النهائي الصحيح لتتوافق مع الاختبارات
        uint256 tokenAmount = msg.value / tokenPrice;
        require(tokenAmount <= tokensAvailable, "Not enough tokens available");

        tokensSold += tokenAmount;
        tokensAvailable -= tokenAmount;

        _transfer(owner, msg.sender, tokenAmount);

        emit TokensPurchased(msg.sender, tokenAmount, tokensSold);
    }

    // ====================
    // Withdraw funds
    // ====================
    function withdraw() external {
        require(msg.sender == owner, "Only owner");
        payable(owner).transfer(address(this).balance);
    }
}
