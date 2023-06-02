import BlockLinks from "./BlockLinks";

function LinksFooter() {
    return (
        <div className="container-blocks">
            <div className="box-blocks">
                <div className="footer__block-left">
                    <div className="block1">
                        <h4>Client Care</h4>
                        <BlockLinks block="block1" />
                    </div >
                    <div className="block2">
                        <h4>Our Company</h4>
                        <BlockLinks block="block2" />
                    </div>
                    <div className="block3">
                        <h4>Related Tiffany Sites</h4>
                        <BlockLinks block="block3" />
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