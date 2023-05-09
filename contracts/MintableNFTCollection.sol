pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintableNFTCollection is ERC721Enumerable, Ownable {
    uint256 public constant MAX_NFT_SUPPLY = 10;
    uint256 private _currentTokenId = 0;
    uint256 private constant MINT_PRICE = 0.01 ether;

    constructor() ERC721("Mintable NFT Collection", "MNFTC") {}

    function mintNFT() public payable {
        require(_currentTokenId < MAX_NFT_SUPPLY, "All NFTs have been minted");
        require(msg.value == MINT_PRICE, "Incorrect payment amount");

        _safeMint(msg.sender, _currentTokenId);
        _currentTokenId++;
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(msg.sender).transfer(balance);
    }
}
