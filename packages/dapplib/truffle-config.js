require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth script assume hidden narrow flee spray'; 
let testAccounts = [
"0x808df72fbafe366da1c36e750cacc35c55b72cfc4bd44ea20de6444ead120ecc",
"0x43a78162456589697fbfd05f233a85dcead1672f44ec0021459488f4953615a7",
"0xe7463c68805066ab31cf406f6fd6bb57208eac987b99d4c129c71a36c0777b89",
"0x16378e578d533442c5c0a045f075b5bd8028fd1087d126ee709d0c315e46d7ab",
"0xf86520456e815dfc50f68a1462af05382d7e581da6cecced3eb350c85905efa6",
"0x2e6672a1fd590fb20371b126d7bcc3249f646fd6319c96ee9e621a0f2c7c937e",
"0xc183b5bb05db373ae7cc043b58cb440472f9acae32cf8bf1124f40acaa70bdde",
"0x6566a69fd52f1a27f203da303f773b7c7c04df90b7fa64496d1e9273c841f8bc",
"0x0e5548bec98f7921e4392ca261e6f414798c265853a4eb21279d58c8f18de90a",
"0xcd9317ac407ff2f5e53f3ea67b0b69e1a18022ff42c6fb5d27c4a6f058393681"
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
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
