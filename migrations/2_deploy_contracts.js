var MyContract = artifacts.require("./AnacCodeToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
