const Tether = artifacts.require('Tether');


//how to make updates to smart contract by re deploying etc!!

module.exports = async function deployer() {
    await deployer.deploy(Tether);
};