const Migrations = artifacts.require('Migrations');


//how to make updates to smart contract by re deploying etc!!

module.exports = function deployer() {
    deployer.deploy(Migrations);
}