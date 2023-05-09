const MintableNFTCollection = artifacts.require("MintableNFTCollection");

contract("MintableNFTCollection", function ( accounts ) {
  it("should assert true", async function () {
    await MintableNFTCollection.deployed();
    return assert.isTrue(true);
  });
});
