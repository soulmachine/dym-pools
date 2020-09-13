const YearnRewards = artifacts.require("YearnRewards");

module.exports = function (deployer) {
  deployer.deploy(YearnRewards);
};
