import { useState } from 'react'
import { shareTokenABI, CONTRACT_ADDRESS } from '../../ABIs/PICTokenABI'

function TransferNFT(props) {

    const [baseUri, setState] = useState('')

    const web3GetBaseUri = async () => {

        if (props.trxObj) {

            let web3 = props.trxObj;

            const userAccount = await web3.eth.getAccounts();
            const account = userAccount[0];
            // alert(account)

            let contract = new props.trxObj.eth.Contract(shareTokenABI, CONTRACT_ADDRESS)

            const symbol = await contract.methods
                .safeTransferFrom(account,"0xD51dD71e7a47e73d4A3f97d4dB167EFb6B694F25",2)
                .send({
                    from: account
                })
                .on("receipt", function (receipt) {
                    alert("Success pay");
                })
                .on("error", function (error) {
                    alert("Fail");
                });
            console.log(symbol)
        }

    }

    return (
        <>
            <div>
                <button type='button' onClick={web3GetBaseUri}>TransferNFT</button>
            </div>
        </>
    )

}


export default TransferNFT