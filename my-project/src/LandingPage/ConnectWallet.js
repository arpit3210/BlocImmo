import React from 'react'
import { useProperty } from '../Contexts/PropertyContext';
import { MetaIcon } from '../Assets/PartnersLogos';



const ConnectWallet = () => {

    const { account,  initWeb3 } = useProperty();



    const truncatedAddress = account
      ? `${account.substring(0, 6)}.....${account.substring(account.length - 6)}`
      : "Please connect wallet ";




  return (
    <div>


<a onClick={initWeb3} className='text-white py-3 bg-red-600 font-bold w-auto hover:bg-red-800 border border-red-800 rounded-xl px-9 flex items-center'>


                            
                       
{!account ? <>Connect <img src={MetaIcon} alt="" className="ml-2 w-6 h-6 object-contain" title="MetaMask" aria-label="MetaMask" role="img" aria-hidden="false" data-testid="MetaMask" data-test-id="MetaMask" data-testid-meta="MetaMask " /></> : <> {truncatedAddress} </>}


</a>
    </div>
  )
}

export default ConnectWallet