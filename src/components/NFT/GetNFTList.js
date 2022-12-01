import { useState } from 'react'
import { shareTokenABI, CONTRACT_ADDRESS } from '../../ABIs/PICTokenABI'

function GetNFTList(props) {
    const [nftList, setNFTList] = useState([])

    const web3GetBaseUri = async () => {

        if (props.trxObj) {

            let web3 = props.trxObj;

            const userAccount = await web3.eth.getAccounts();
            const account = userAccount[0];

            let contract = new props.trxObj.eth.Contract(shareTokenABI, CONTRACT_ADDRESS)

            await contract.methods
                .getNFTList()
                .call({
                    from: account
                }, (err, result) => {
                    setNFTList(result)
                    console.log(err)
                    console.log(result)
                })
        }

    }

    return (
        <>
            <div>
                <button type='button' onClick={web3GetBaseUri}>GetNFTList</button>
            </div>
            <div>
                {nftList.map((i) => <li>{i}</li>)}
            </div>
        </>
    )

}


export default GetNFTList