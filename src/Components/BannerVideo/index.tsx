import React, { useState } from "react";
import "./BannerVideo.css";
import ImageClick from "../ImageClick";
import { useWindowSize } from "../../Hooks/useWindowSize";

type ArrayType = {
  src: string;
  poster: string;
};

const BannerVideo: React.FC = () => {
  const [mutedConst, setmutedConst] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const window = useWindowSize();


  const array: number | ArrayType =
    window.width && window.width < 900
      ? {
        src: "//media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Desktop-1",
        poster: "//media.tiffany.com/is/image/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile-1?$tile$&amp;&amp;hei=900",
      }
      : {
        src: "//media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile",
        poster: "//media.tiffany.com/is/image/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Desktop?$tile$&amp;&amp;hei=900",
      };

  const handlemutedConst = () => {
    setmutedConst(!mutedConst);
  };

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const {src, poster } = array;

  return (
    <div className="container">
      <div className="container-box__video">
        <video
          style={{ zIndex: "-1", position: "relative" }}
          width="100%"
          height="100%"
          autoPlay={autoPlay}
          muted={mutedConst}
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          data-preload="true"
          src={src}
          className="load-lazily b-loaded"
          poster={poster}
        ></video>
        <div className="box-video">
          <h2>This Is Tiffany HardWear</h2>
          <p>Our brand ambassadors redefine Tiffany HardWear in our latest campaign.</p>
          <a
            className="button-video cta secondary"
            href="https://www.tiffany.com/jewelry/shop/tiffany-hardwear/"
            target="_self"
          >
            Shop the Collection
          </a>
        </div>
        <div className="box-pause-play-mute">
          <ImageClick className="groupResearch__ContactUs-img">
            <button style={{ display: "none" }} onClick={handleAutoPlay}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="50px"
                viewBox="0 0 256 256"
              >
                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,2c-12.69141,0 -23,10.30859 -23,23c0,12.69141 10.30859,23 23,23c12.69141,0 23,-10.30859 23,-23c0,-12.69141 -10.30859,-23 -23,-23zM25,4c11.60938,0 21,9.39063 21,21c0,11.60938 -9.39062,21 -21,21c-11.60937,0 -21,-9.39062 -21,-21c0,-11.60937 9.39063,-21 21,-21zM16,15v20h7v-20zM27,15v20h7v-20zM18,17h3v16h-3zM29,17h3v16h-3z" />
                  </g>
                </g>
              </svg>
            </button>
            <button style={{ display: "none" }} onClick={handleAutoPlay}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="50px"
                viewBox="0 0 256 256"
              >
                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,2c-12.69141,0 -23,10.30859 -23,23c0,12.69141 10.30859,23 23,23c12.69141,0 23,-10.30859 23,-23c0,-12.69141 -10.30859,-23 -23,-23zM25,4c11.60938,0 21,9.39063 21,21c0,11.60938 -9.39062,21 -21,21c-11.60937,0 -21,-9.39062 -21,-21c0,-11.60937 9.39063,-21 21,-21zM18,13.25v23.5l1.5,-0.875l17,-10l1.46875,-0.875l-1.46875,-0.875l-17,-10zM20,16.75l14,8.25l-14,8.25z" />
                  </g>
                </g>
              </svg>
            </button>
          </ImageClick>
          <ImageClick className="groupResearch__ContactUs-img">
            <button onClick={handlemutedConst}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="48px"
                height="48px"
                viewBox="0 0 256 256"
              >
                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M24,2c-4.96,0 -9,4.04 -9,9v15c0,0.21 0.00953,0.41914 0.01953,0.61914l2.98047,-2.97852v-12.64062c0,-0.20688 0.01074,-0.41175 0.03125,-0.61328c0.30765,-3.02289 2.86563,-5.38672 5.96875,-5.38672c3.31,0 6,2.69 6,6v0.64063l2.75,-2.75c-0.95,-3.95 -4.52,-6.89062 -8.75,-6.89062zM42.4707,3.98633c-0.38956,0.01135 -0.75941,0.17386 -1.03125,0.45312l-27.72461,27.72461c-0.5913,-0.98434 -1.04429,-2.0591 -1.33399,-3.20312c-0.0694,-0.26575 -0.12928,-0.53448 -0.17969,-0.80664c-0.04498,-0.24901 -0.08386,-0.49967 -0.11328,-0.75391c-0.01293,-0.10963 -0.02528,-0.21954 -0.03516,-0.33008c-0.03104,-0.35295 -0.05273,-0.70898 -0.05273,-1.07031v-3.5c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v3.5c0,0.48731 0.02442,0.96833 0.07031,1.44336c0.13826,1.44603 0.48066,2.83236 1,4.12695l0.01172,-0.01172c0.3953,0.97616 0.89831,1.89525 1.48242,2.75586l-7.125,7.125c-0.39185,0.37623 -0.54969,0.9349 -0.41265,1.46055c0.13704,0.52565 0.54754,0.93616 1.07319,1.07319c0.52565,0.13704 1.08432,-0.02081 1.46055,-0.41265l6.90625,-6.90625c2.374,2.35255 5.52882,3.90907 9.0332,4.25977v4.58594c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-4.57617c7.56839,-0.75536 13.5,-7.16015 13.5,-14.92383v-3.5c0,-0.83 -0.67,-1.5 -1.5,-1.5c-0.83,0 -1.5,0.67 -1.5,1.5v3.5c0,6.55875 -5.28269,11.89391 -11.81836,11.99219c-0.02597,-0.00329 -0.05202,-0.00589 -0.07812,-0.00781c-0.0026,-0.00066 -0.00521,-0.00131 -0.00781,-0.00195c-0.00911,-0.00008 -0.01823,-0.00008 -0.02734,0c-0.03055,-0.00224 -0.06117,-0.00354 -0.0918,-0.00391c-0.01042,0.00054 -0.02084,0.00119 -0.03125,0.00195c-0.01042,0.00054 -0.02084,0.00119 -0.03125,0.00195c-1.17531,-0.00869 -2.30617,-0.1915 -3.37695,-0.51172c-0.08579,-0.02593 -0.17284,-0.04839 -0.25781,-0.07617c-0.27685,-0.08962 -0.54692,-0.19405 -0.81445,-0.30273c-0.13522,-0.05546 -0.26965,-0.11166 -0.40234,-0.17187c-0.21816,-0.0981 -0.4336,-0.20202 -0.64453,-0.3125c-0.19034,-0.10058 -0.37646,-0.208 -0.56055,-0.31836c-0.15689,-0.09329 -0.31468,-0.18503 -0.4668,-0.28516c-0.29114,-0.19314 -0.57324,-0.39805 -0.8457,-0.61523c-0.04011,-0.03174 -0.08335,-0.05955 -0.12305,-0.0918c-0.29205,-0.23896 -0.56794,-0.49664 -0.83594,-0.76172l2.12695,-2.12695c1.62487,1.59457 3.83691,2.5918 6.28711,2.5918c4.96,0 9,-4.04 9,-9v-8.87891l10.56055,-10.56055c0.4429,-0.43135 0.57582,-1.09023 0.33479,-1.65955c-0.24103,-0.56932 -0.80665,-0.93247 -1.42463,-0.91467zM30,20.12109v5.87891c0,3.31 -2.69,6 -6,6c-1.62697,0 -3.10072,-0.64655 -4.17969,-1.69922z">
                    </path>
                  </g>
                </g>
              </svg>
            </button>
            <button onClick={handlemutedConst}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50px"
                height="50px"
                viewBox="0 0 256 256"
              >
                <g
                  fill="#000000"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: 'normal' }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path
                      d="M24.15625,3c-0.30469,0 -0.60547,0.0625 -0.90625,0.15625c-0.60547,0.19141 -1.18359,0.55078 -1.6875,1.0625l-11.75,11.75h-6.8125c-1.66797,0 -3.03125,1.36328 -3.03125,3.03125v12c0,1.66797 1.36328,3.03125 3.03125,3.03125h6.8125l11.71875,11.65625c1.11719,1.12109 2.55078,1.61328 3.71875,1.0625c1.17578,-0.55469 1.75,-1.89062 1.75,-3.4375v-37c0,-1.5 -0.76562,-2.74609 -1.9375,-3.15625c-0.29297,-0.10156 -0.60156,-0.15625 -0.90625,-0.15625zM24.1875,5c0.10156,0 0.17969,0.00781 0.25,0.03125c0.28516,0.09766 0.5625,0.35156 0.5625,1.28125v37c0,1.06641 -0.35156,1.54297 -0.59375,1.65625c-0.24219,0.11328 -0.73047,0.125 -1.5,-0.65625l-12.59375,-12.59375c-0.01953,-0.01172 -0.04297,-0.02344 -0.0625,-0.03125c0.07422,0.06641 -0.25,-0.56641 -0.25,-0.9375v-11.5c0,-0.37109 0.33594,-1.01172 0.25,-0.9375c0.02344,-0.01953 0.04297,-0.03906 0.0625,-0.0625l12.65625,-12.625c0.46875,-0.47266 0.91016,-0.62109 1.21875,-0.625zM38.28125,6.8125c-0.4375,0.07422 -0.77344,0.42969 -0.82422,0.87109c-0.04687,0.44141 0.19531,0.86328 0.60547,1.03516c5.94922,3 10,9.15234 10,16.28125c0,7.12891 -4.05078,13.28125 -10,16.28125c-0.36719,0.125 -0.625,0.45313 -0.66797,0.83594c-0.04297,0.38672 0.14063,0.76172 0.47266,0.96484c0.32813,0.19922 0.74609,0.19141 1.07031,-0.01953c6.60156,-3.33203 11.125,-10.16797 11.125,-18.0625c0,-7.89453 -4.52344,-14.73047 -11.125,-18.0625c-0.17187,-0.09766 -0.36719,-0.14062 -0.5625,-0.125c-0.03125,0 -0.0625,0 -0.09375,0zM34.71875,12.125c-0.44531,0.05469 -0.80078,0.40234 -0.86328,0.84766c-0.06641,0.44141 0.17188,0.875 0.58203,1.05859c3.90234,2.10547 6.5625,6.21484 6.5625,10.96875c0,4.73828 -2.64844,8.85938 -6.53125,10.96875c-0.48437,0.26563 -0.66016,0.875 -0.39062,1.35938c0.26563,0.48438 0.875,0.66016 1.35938,0.39063c4.50781,-2.44922 7.5625,-7.23437 7.5625,-12.71875c0,-5.5 -3.0625,-10.30469 -7.59375,-12.75c-0.17969,-0.10156 -0.38672,-0.14453 -0.59375,-0.125c-0.03125,0 -0.0625,0 -0.09375,0zM3,18.03125h5.1875c-0.12891,0.38281 -0.1875,0.80078 -0.1875,1.21875v11.5c0,0.41797 0.0625,0.83203 0.1875,1.21875h-5.1875c-0.53906,0 -0.96875,-0.42969 -0.96875,-0.96875v-12c0,-0.53906 0.42969,-0.96875 0.96875,-0.96875zM30.53125,18.40625c-0.54687,0 -0.96875,0.42187 -0.96875,0.96875v11.25c0,0.54687 0.42188,0.96875 0.96875,0.96875h-5.15625c0.125,-0.41797 0.1875,-0.83203 0.1875,-1.21875v-11.5c0,-0.41797 -0.0625,-0.83594 -0.1875,-1.25zM20.03125,23.0625c-0.33984,0 -0.625,0.27734 -0.625,0.625v5.1875c0,0.34375 0.28516,0.625 0.625,0.625h11.625c0.33984,0 0.625,-0.28125 0.625,-0.625v-5.1875c0,-0.34766 -0.28516,-0.625 -0.625,-0.625zM21.40625,24.4375v2.9375h-1.75v-2.9375zM25.96875,24.4375v2.9375h-1.75v-2.9375zM30.53125,24.4375v2.9375h-1.75v-2.9375zM21.40625,28v2.9375h-1.75v-2.9375zM25.96875,28v2.9375h-1.75v-2.9375zM30.53125,28v2.9375h-1.75v-2.9375z"
                    ></path>
                  </g>
                </g>
              </svg>
            </button>
          </ImageClick>
        </div>
      </div>
    </div>
  );
};

export default BannerVideo;
