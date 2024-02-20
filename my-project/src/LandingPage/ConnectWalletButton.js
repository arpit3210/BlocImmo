import React from 'react'
import { MetaIcon } from '../Assets/PartnersLogos'
import { useProperty } from '../Contexts/PropertyContext';




const ConnectWalletButton = () => {

    const { account,  initWeb3 } = useProperty();

    const truncatedAddress = account
      ? `${account.substring(0, 6)}.....${account.substring(account.length - 6)}`
      : "Please connect wallet ";
  return (
    <div>

<button onClick={initWeb3} className='text-white py-3 bg-gradient-to-r from-red-600 to-red-800 font-bold w-auto hover:from-red-700 hover:to-red-900 border border-red-800 rounded-xl px-6 flex items-center'>
  {!account ? (
    <>
      Connect <img src={MetaIcon} alt="" className="ml-2 w-6 h-6 object-contain" title="MetaMask" aria-label="MetaMask" role="img" aria-hidden="false" data-testid="MetaMask" data-test-id="MetaMask" data-testid-meta="MetaMask" />
    </>
  ) : (
    <>
      {truncatedAddress}
    </>
  )}
</button>




    </div>
  )
}

export default ConnectWalletButton