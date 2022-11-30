import { useState } from 'react'
import { shareTokenABI, CONTRACT_ADDRESS } from '../../ABIs/PICTokenABI'

function GetBaseUri(props) {

    const [baseUri, setState] = useState('')

    const web3GetBaseUri = async () => {

        if (props.trxObj) {

            let web3 = props.trxObj;

            const userAccount = await web3.eth.getAccounts();
            const account = userAccount[0];
            // alert(account)

            let contract = new props.trxObj.eth.Contract(shareTokenABI, CONTRACT_ADDRESS)

            const symbol = await contract.methods
                .mintNFT()
                .send({
                    from: account,
                    value: web3.utils.toWei(String(0.001), "ether")
                })
                .on("receipt", function (receipt) {
                    alert("Success pay");
                })
                .on("error", function (error) {
                    alert("Fail");
                });
            console.log(symbol)
            alert(symbol)
        }

    }

    return (
        <>
            <button type='button' onClick={web3GetBaseUri}>GetBaseUri</button>
        </>
    )

}


export default GetBaseUri