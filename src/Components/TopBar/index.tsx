import React, { useState } from 'react';
import "./topbar.css";

function Index() {
  const [topbarVisible, setTopbarVisible] = useState(true);

  const handleTopbarClose = () => {
    setTopbarVisible(false);
  };

  return (
    <>
      {topbarVisible && (
        <div className="topbar">
          <div className="">
            <p>
              Purchases made on this site will ship to U.S. addresses only. Do you want to shop the U.S. site?
            </p>
          </div>
          <div className="topbar__groupshop-shop-at-us">
            <a className="shop-at-us" href="https://www.tiffany.com/">
              Shop the U.S. site
            </a>
            <p className='shop-at-us__or'>or</p>
            <a className="links" href="https://www.tiffany.com/">
              Shop the U.S. site
            </a>
            <button className="close-button" onClick={handleTopbarClose}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 256 256"><g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
