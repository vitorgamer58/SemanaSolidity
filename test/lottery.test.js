const Lottery = artifacts.require("Lottery");

contract("Lottery", function ([accA, accB, accC]) {
  beforeEach(async () => {
    contract = await Lottery.new();
  });

  it("Verify owner", async () => {
    const ownerAddress = await contract.OWNER();

    assert(ownerAddress == accA, "Need to be equal");
  });

  it("getPlayers should to be an empty array", async () => {
    const players = await contract.getPlayers();

    assert(players.length === 0, "Should be empty");
  });

  it("Balance should be zero", async () => {
    const contractAddress = await contract.address;
    const balance = await web3.eth.getBalance(contractAddress);
    const etherBalance = web3.utils.fromWei(balance, "ether");

    assert(etherBalance === "0", "Balance should be zero");
  });
});
