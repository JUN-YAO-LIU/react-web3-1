import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import Web3 from 'web3'

import "./assets/styles/main.css"
import "./assets/styles/all.css"
import "./assets/styles/responsive.css"

import ConnectWallet from './components/wallet/ConnectWallet'
import MintNFT from './components/NFT/MintNFT'
import GetNFTList from './components/NFT/GetNFTList'
import TransferNFT from './components/NFT/TransferNFT'
import DefaultLayout from './components/layout1/DefaultLayout'
import About from './pages/About'
// import Login from './pages/RegisterLogin/Login'
import Register from './pages/RegisterLogin/Register'
import TestAPIPage from './pages/TestAPI/TestAPIPage'

function App() {
  const [trxObj, setTransction] = useState(new Web3())
  const [nftList, setNFTList] = useState([])

  return (
    <>
      <Routes>
        <Route path="*"
          name="home"
          element={<DefaultLayout />}
        />
        <Route path="/" element={<DefaultLayout />}></Route>
        <Route path="/About" element={<About />}></Route>
        {/* <Route path="/Login" element={<Login />}></Route> */}
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/TestAPI" element={<TestAPIPage />}></Route>
      </Routes>

      {/*
      <ConnectWallet trxObj={trxObj} setTransction={setTransction} />
      <MintNFT trxObj={trxObj} setTransction={setTransction} />
      <GetNFTList trxObj={trxObj} nftList={nftList} setNFTList={setNFTList} />
      <TransferNFT trxObj={trxObj} setTransction={setTransction} /> */}
    </>
  )

}

export default App;

