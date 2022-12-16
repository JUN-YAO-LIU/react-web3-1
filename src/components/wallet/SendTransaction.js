import Web3 from "web3"

export default async function SendTransaction(props) {


    //goril : "0x1e0B563a3Fc114c8A557b05E00d121E0bE480720" ,"0xd78777fafd4c1b82e50885f27822027171abd3351d4e34b0ae9c13cf611cc955"

    // Example: Local Geth Node
    // var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // Example: Remote Node Provider
    // var web3 = new Web3("https://eth-mainnet.alchemyapi.io/v2/your-api-key");

    // const provider = detectProvider()
    // console.log({p:provider})
    // var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    //const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

    const web3_1 = new Web3(new Web3.providers.HttpProvider("https://api-goerli.etherscan.io/api?apikey=3GTWHKTC6GWVB4U7SF7A3EUW5XNJXYTI52"));
    const web3 = new Web3("https://api-goerli.etherscan.io");
    // const web3_1 = new Web3("https://api-goerli.etherscan.io/api?apikey=3GTWHKTC6GWVB4U7SF7A3EUW5XNJXYTI52");

    const fromaddr = '0x3519bb0BbeBb0829BF4e8B43866C1A52a01d4bd7'
    const privateKey = 'b7b186a5bf1750618475faf2bf68e8144ba7e21cb65597698cdba55d5c672abb'

    const toAddress = "0x1e0B563a3Fc114c8A557b05E00d121E0bE480720"; // Address of the recipient

    let txn = { to: 'receiver', from: 'sender', value: web3.utils.toWei("0.5", "ether") }
    let txn1 = { to: 'receiver', value: web3.utils.toWei("0.5", "ether"), gas: 2000000 }

    //alert(web3.utils.toWei("0.5", "ether"))


    //const nonce = web3.eth.getTransactionCount(fromaddr, 'latest'); // nonce starts counting from 0
    const txn2 = {
        'to': toAddress, // faucet address to return eth
        'value': 100,
        'gas': 30000,
        'maxFeePerGas': 1000000108,
        //'nonce': nonce,
    };

    //const signedTx = web3.eth.accounts.signTransaction(txn2, privateKey);

    web3.eth.personal.unlockAccount(fromaddr, 'numinerjim', 600)
        .then((e) => {
            alert(1)
            console.log(e)
        });


    // const amount = '0.0001'; // Willing to send 2 ethers
    // const amountToSend = web3.utils.toWei(amount, "ether"); // Convert to wei value
    // web3.eth.accounts.signTransaction(txn1, privateKey);
    // web3.eth.sendTransaction({ from: fromaddr, to: toAddress, value: amountToSend })
    //     .then(console.log);


    //    const nonce =  web3.eth.getTransactionCount('0x3519bb0BbeBb0829BF4e8B43866C1A52a01d4bd7', 'latest');
    //    const transaction = {
    //     'to': '0x1e0B563a3Fc114c8A557b05E00d121E0bE480720', // faucet address to return eth
    //     'value': 100,
    //     'gas': 30000,
    //     'maxFeePerGas': 1000000108,
    //     'nonce': nonce,
    //     // optional data field to send message or execute smart contract
    //    };
    //      web3.eth.accounts.signTransaction(transaction, 'b7b186a5bf1750618475faf2bf68e8144ba7e21cb65597698cdba55d5c672abb').then(console.log);

    // web3_1.eth.accounts.signTransaction({
    //     to: '0x1e0B563a3Fc114c8A557b05E00d121E0bE480720',
    //     value: '1000000000',
    //     gas: 2000000
    // }, '0xb7b186a5bf1750618475faf2bf68e8144ba7e21cb65597698cdba55d5c672abb')
    //     .then(console.log);

}