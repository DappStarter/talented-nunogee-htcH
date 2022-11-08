require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember solid hover kite sun slab'; 
let testAccounts = [
"0x866ba7b05d829e63c99cfc48ec531643cc789435c9b9a6727b8cd6c8f1a35c50",
"0x4f749bf9679145a36d556ac725a2e89f55406c5101f7f08d50e34de3cb87fde2",
"0x2c1dc00abe8f7c4d80c8c3786aab95e9b05ab6403e999d7c33f7f399f965f7f0",
"0x626dce4d65528a96ad238b3fa6a3bce5f97314c1f67cde66ce3eacfcb6168802",
"0x34551d32e40bd985f277b1dbb0bd4ad34585b910b4c7795a29797fb98bfc03bd",
"0x8d36fbd8940257c7747af33057da4a8ebc039dd810ca2a74a09ef21c94b19c72",
"0x181d9b29da876c0d4d935d0642eb491a430274e6501bdc2d19879ff9dfe171f7",
"0xfd99d798f5eeb1ad9703dad2974ab1d93c0c7b194d281fdf210e0ad49fd2ea4e",
"0x002000e9341301c6d0d5a44a5c9c33999cd3a61dc26459be3199b693935693d5",
"0x18469709dd1297d660f0310b1e5ea4b324f047993e6a274b2e8dcfee3210322d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

