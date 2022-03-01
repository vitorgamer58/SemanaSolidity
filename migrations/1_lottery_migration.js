const Lotterry = artifacts.require("Lottery");

module.exports = function (deployer) {
  deployer.deploy(Lotterry);
};
