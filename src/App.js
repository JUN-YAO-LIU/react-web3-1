import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import Web3 from 'web3'
import './CSS/all.css'

import ConnectWallet from './components/ConnectWallet'
import MintNFT from './components/NFT/MintNFT'
import GetNFTList from './components/NFT/GetNFTList'
import TransferNFT from './components/NFT/TransferNFT'
import { DatePicker } from 'antd'
import DefaultLayout from './layout/DefaultLayout'
import About from './pages/About'
import TestAPIPage from './pages/TestAPI/TestAPIPage'

function App() {
  const [trxObj, setTransction] = useState(new Web3())
  const [nftList, setNFTList] = useState([])

  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/TestAPI" element={<TestAPIPage/>}></Route>
      </Routes>

      {/* <DatePicker />
      <ConnectWallet trxObj={trxObj} setTransction={setTransction} />
      <MintNFT trxObj={trxObj} setTransction={setTransction} />
      <GetNFTList trxObj={trxObj} nftList={nftList} setNFTList={setNFTList} />
      <TransferNFT trxObj={trxObj} setTransction={setTransction} /> */}
    </>
  )

}

export default App;

