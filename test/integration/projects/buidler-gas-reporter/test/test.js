const ContractA = artifacts.require("ContractA");

contract("contracta", function(accounts) {
  let instance;

  before(async () => instance = await ContractA.new())

  it('sends', async function(){
    await instance.sendFn();
  });

  it('calls', async function(){
    await instance.callFn();
  })
});
