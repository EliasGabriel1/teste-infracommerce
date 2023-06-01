import React, { useRef, useState, useEffect } from "react";
import Loading from "../Loading";
import Logo from "../Logo";
import Researcher from "./Menu/Researcher";
import MenuContent from "./Menu";
import Minicart from "../MiniCart";
import FavoriteLink from "../FavoriteLink";
import Profile from "../Profile";
import "./header.css";
import Link from "../Link";
import ImageHover from "../ImageHover";
import { useWindowSize } from "../../Hooks/useWindowSize";


interface MenuProps {
  data: any;
  loading: boolean;
  error: any;
}

interface MinicartProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Menu(props: MenuProps) {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isBlock, setisBlock] = useState(false);

  const handleMouseEnter: MinicartProps["onMouseEnter"] = () => {
    setIsHovered(true);
    document.body.classList.add("block");
  };

  const handleMouseLeave: MinicartProps["onMouseLeave"] = () => {
    setIsHovered(false);
    document.body.classList.remove("block");
  };

  const window = useWindowSize();

  useEffect(() => {
    fetch("./api/Menu.json", {
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    }).then(data => {
      setData(data);
    }).catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    }).finally(() => {
      setLoading(false)
    })

  }, [])

  const MiniCartSvg: React.FC = () => {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="16px"
        height="16px"
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
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(5.12,5.12)">
            <path d="M25,1c-8.83984,0 -16,7.16016 -16,16c0,7.30859 3.85938,15.16406 7.65625,21.25c3.79688,6.08594 7.59375,10.40625 7.59375,10.40625c0.19141,0.21484 0.46484,0.33984 0.75,0.33984c0.28516,0 0.55859,-0.125 0.75,-0.33984c0,0 3.80078,-4.41016 7.59375,-10.53125c3.79297,-6.12109 7.65625,-13.95703 7.65625,-21.125c0,-8.83984 -7.16016,-16 -16,-16zM25,3c7.76172,0 14,6.23828 14,14c0,6.43359 -3.63672,14.08203 -7.34375,20.0625c-3.10547,5.01172 -5.73437,8.23828 -6.65625,9.34375c-0.92969,-1.09766 -3.55859,-4.25391 -6.65625,-9.21875c-3.70312,-5.9375 -7.34375,-13.59766 -7.34375,-20.1875c0,-7.76172 6.23828,-14 14,-14zM25,11c-3.85547,0 -7,3.14453 -7,7c0,3.85547 3.14453,7 7,7c3.85547,0 7,-3.14453 7,-7c0,-3.85547 -3.14453,-7 -7,-7zM25,13c2.77344,0 5,2.22656 5,5c0,2.77344 -2.22656,5 -5,5c-2.77344,0 -5,-2.22656 -5,-5c0,-2.77344 2.22656,-5 5,-5z"></path>
          </g>
        </g>
      </svg>
    );
  };


  const handleClick = () => {
    setisBlock(!isBlock);
    setIsHovered(!isHovered);
    !isHovered === true ? document.body.classList.add("block") : document.body.classList.remove("block");
  };

  if (!error) {
    return (
      <header ref={headerRef} className="sticky">
        <div className="header_child">
          {
            <div className="container head">
              <div className="groupResearch">

                <Researcher className="desktop" data={props.data} loading={props.loading} error={props.error} />
                <Link className="MiniCartSvg" href="/" text="" >
                  <MiniCartSvg />
                </Link>
                <Link className="groupResearch__ContactUs" href="/" text="" >
                  <ImageHover className="groupResearch__ContactUs-img">
                    <img src="https://media.tiffany.com/is/content/tiffanydm/Concierge?$tile$&" alt="" width={"16px"} height={"16px"} />
                    <img src="https://media.tiffany.com/is/content/tiffanydm/customer-service?$tile$&" alt="" width={"16px"} height={"16px"} />
                  </ImageHover>
                  Contact Us
                </Link>
              </div>
              <Logo />
              <div className="groupProfile__content">
                <div className={isHovered ? "groupProfile fixed" : "groupProfile"}>
                  <Link className="groupResearch__ContactUs" href="/" text="" >
                    <ImageHover className="groupResearch__ContactUs-img">
                      <img src="https://media.tiffany.com/is/content/tiffanydm/Appointment?$tile$&" alt="" width={"16px"} height={"16px"} />
                      <img src="https://media.tiffany.com/is/content/tiffanydm/book-an-apppointment?$tile$&" alt="" width={"16px"} height={"16px"} />
                    </ImageHover>
                    Book an Appointment
                  </Link>
                  <Profile />
                  <FavoriteLink />
                  <div className="Minicart-box__button"
                    onClick={handleClick}
                    onMouseEnter={window.width && window.width > 900 ? handleMouseEnter : undefined}
                    onMouseLeave={window.width && window.width > 900 ? handleMouseLeave : undefined}
                  >
                    <Minicart />
                  </div>
                </div>
              </div>
            </div>
          }
          {!loading === true ? <MenuContent api={data} /> : <Loading type="spinningBubbles" color="black" />}
        </div>
        <Researcher className="mobile" data={props.data} loading={props.loading} error={props.error} />
      </header>
    );
  }
  return <></>;
}

export default Menu;
