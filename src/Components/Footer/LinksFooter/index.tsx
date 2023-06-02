import { useState } from "react";
import { useWindowSize } from "../../../Hooks/useWindowSize";
import BlockLinks from "./BlockLinks";

function LinksFooter() {
    const [open, setOpen] = useState(false);
    const [openDois, setOpenDois] = useState(false);
    const window = useWindowSize();
    
    return (
        <div className="container-blocks">
            <div className="box-blocks">
                <div className="footer__block-left">
                    <div className="block1">
                        <h4>Client Care</h4>
                        <BlockLinks block="block1" />
                    </div >
                    <div className={`${window.width && window.width > 900 ? 'block2 eventnone' : "block2"}`} onClick={() => {
                        setOpen(!open);
                        document.querySelector(".mobile")!.classList.toggle('fixed');
                    }}>
                        <h4>Our Company</h4>
                        <div className={`${open === true ? 'mobile footer-open' : "mobile footer-close"}`}>
                            <BlockLinks block="block2" />
                        </div>
                    </div>
                    <div className={`${window.width && window.width > 900 ? 'block3 eventnone' : "block3"}`} onClick={() => {
                        setOpenDois(!openDois);
                        document.querySelector(".mobile")!.classList.toggle('fixed');
                    }}>
                        <h4>Related Tiffany Sites</h4>
                        <div className={`${openDois === true ? 'mobile footer-open' : "mobile footer-close"}`}>
                            <BlockLinks block="block3" />
                        </div>
                    </div>
                </div>
                <div className="block4">
                    <h4>Latest from Tiffany</h4>
                    <BlockLinks block="block4" />
                </div>
            </div>
        </div>
    );
}

export default LinksFooter;