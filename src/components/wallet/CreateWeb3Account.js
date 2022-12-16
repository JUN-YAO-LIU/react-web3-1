import Web3 from "web3"

const detectProvider = () => {
    let provider
    provider = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    return provider;
}

export default function CreateAccount(props) {


    //goril : "0x1e0B563a3Fc114c8A557b05E00d121E0bE480720" ,"0xd78777fafd4c1b82e50885f27822027171abd3351d4e34b0ae9c13cf611cc955"

    // Example: Local Geth Node
    // var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // Example: Remote Node Provider
    // var web3 = new Web3("https://eth-mainnet.alchemyapi.io/v2/your-api-key");

    // const provider = detectProvider()
    // console.log({p:provider})
    // var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    //const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

    const web3 = new Web3("https://api-goerli.etherscan.io");

    let account = web3.eth.accounts.create(web3.utils.randomHex(32));
    let wallet = web3.eth.accounts.wallet.add(account);
    let keystore = wallet.encrypt(web3.utils.randomHex(32));

    alert(account.address)

    console.log({
        account: account,
        wallet: wallet,
        keystore: keystore
    });
}