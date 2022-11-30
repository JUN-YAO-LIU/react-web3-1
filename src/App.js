import {useState} from 'react';
import Web3 from 'web3';
import ConnectWallet from './components/ConnectWallet';
import GetBaseUri from './components/NFT/TestContract';
import './CSS/all.css'


function App() {
  const [trxObj,setTransction] = useState(new Web3())

  return (
    <>
      <ConnectWallet trxObj={trxObj} setTransction={setTransction}/>
      <GetBaseUri trxObj={trxObj} setTransction={setTransction} />
    </>
  )

}

export default App;

