import {useState} from 'react'
import Web3 from 'web3'
import './CSS/all.css'

import ConnectWallet from './components/ConnectWallet'
import MintNFT from './components/NFT/MintNFT'
import GetNFTList from './components/NFT/GetNFTList'
import TransferNFT from './components/NFT/TransferNFT'


function App() {
  const [trxObj,setTransction] = useState(new Web3())
  const [nftList,setNFTList] = useState([])

  return (
    <>
      <ConnectWallet trxObj={trxObj} setTransction={setTransction}/>
      <MintNFT trxObj={trxObj} setTransction={setTransction} />
      <GetNFTList trxObj={trxObj} nftList={nftList} setNFTList={setNFTList} />
      <TransferNFT trxObj={trxObj} setTransction={setTransction} />
    </>
  )

}

export default App;

