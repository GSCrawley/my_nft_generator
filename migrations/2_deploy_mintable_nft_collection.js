const MintableNFTCollection = artifacts.require("MintableNFTCollection");

module.exports = function (deployer) {
  deployer.deploy(MintableNFTCollection);
};
