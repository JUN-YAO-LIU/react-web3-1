import React,{ useState } from "react"
import Web3 from "web3"


const ConnectWallet = (props) => {
    const [isConnected, setIsConnected] = useState(false)
    const [balance, setEthBalance] = useState("")


    // detect the chain or node's provider using metamask on the browser.
    // return the metamask's data and node's data.
    const detectProvider = () => {
        let provider
        if (window.ethereum) {
            provider = window.ethereum
        } else if (window.web3) {
            provider = window.web3.currentProvider
        } else {
            alert("You should install the metamask to connent the relative ethereum's chain.")
        }
        return provider;
    }

    const onConnect = async () => {
        try {
            const provider = detectProvider()

            console.log(provider)
            alert(provider.chainId)

            if (provider) {
                await provider.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(provider);

                const userAccount = await web3.eth.getAccounts();
                const account = userAccount[0];
                let ethBalance = await web3.eth.getBalance(account);
                setEthBalance(ethBalance);
                setIsConnected(true);

                props.setTransction(web3)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onDisconnect = () => {
        setIsConnected(false);
    }

    return (
        <div className="app">

            <h1 class="title">React dApp connect to the MetaMask using We3.js</h1>

            <div className="app-wrapper">
                {!isConnected && (
                    <div>
                        <button className="app-button__login" onClick={onConnect}>
                            Login
                        </button>
                    </div>
                )}
            </div>
            {isConnected && (
                <div className="app-wrapper">
                    <div className="app-details">
                        <h2> You are connected to metamask.</h2>
                        <div className="app-balance">
                            <span>Balance: </span>
                            {balance}
                        </div>
                    </div>
                    <div>
                        <button className="app-buttons__logout" onClick={onDisconnect}>
                            Disconnect
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default React.memo(ConnectWallet)