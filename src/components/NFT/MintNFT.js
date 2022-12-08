import { useState } from 'react'
import { shareTokenABI, CONTRACT_ADDRESS } from '../../ABIs/PICTokenABI'

function MintNFT(props) {

    const [baseUri, setState] = useState('')

    const web3GetBaseUri = async () => {

        if (props.trxObj) {

            let web3 = props.trxObj;

            const userAccount = await web3.eth.getAccounts();
            const account = userAccount[0];
            // alert(account)

            let contract = new props.trxObj.eth.Contract(shareTokenABI, CONTRACT_ADDRESS)

            await contract.methods
                .mintNFT()
                .send({
                    from: account,
                    value: web3.utils.toWei(String(0.001), "ether")
                })
                .on("receipt", function (receipt) {
                    console.log(receipt)
                    alert("Success pay");
                })
                .on("error", function (error) {
                    alert("Fail");
                });

            await contract.methods
                .testEvent()
                .call({
                    from: account
                }, (err, result) => {
                    console.log('test emit')
                    console.log(err)
                    console.log(result)
                })
            //console.log(symbol)
        }

    }

    return (
        <>
            <div>
                <button type='button' onClick={web3GetBaseUri}>MintNFT</button>
            </div>
        </>
    )

}


export default MintNFT