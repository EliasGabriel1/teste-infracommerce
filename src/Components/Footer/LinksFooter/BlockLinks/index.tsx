import React from "react";
import Link from "../../../Link";

function BlockLinks(props: any) {
    if (!props.block) {
        return null;
    }

    return (
        <>
            {(
                props.block === "block1" ?
                    (<div className="BlockLinks">
                        <Link className="links links-footer" href="" text="Contact Us" />
                        <Link className="links links-footer" href="" text="Track Your Order" />
                        <Link className="links links-footer" href="" text="Product Care & Repair" />
                        <Link className="links links-footer" href="" text="Book an Appointment" />
                        <Link className="links links-footer" href="" text="Frequently Asked Questions" />
                        <Link className="links links-footer" href="" text="Shipping & Returns" />
                        <Link className="links links-footer" href="" text="Tiffany Select Financing" />
                        <Link className="links links-footer" href="" text="Gift Cards" />
                        <Link className="links links-footer" href="" text="Website Accessibility" />
                    </div>)

                    :

                    props.block === "block2" ?
                        (<div className="BlockLinks">
                            <Link className="links links-footer" href="" text="Our Company" />
                            <Link className="links links-footer" href="" text="World of Tiffany" />
                            <Link className="links links-footer" href="" text="Sustainability" />
                            <Link className="links links-footer" href="" text="California Supply Chains Act" />
                            <Link className="links links-footer" href="" text="California Privacy" />
                            <Link className="links links-footer" href="" text="Tiffany Careers" />
                            <Link className="links links-footer" href="" text="Website Policies" />
                            <Link className="links links-footer" href="" text="Transparency in Coverage" />
                            <Link className="links links-footer" href="" text="Do Not Sell or Share My Personal Information" />
                            <Link className="links links-footer" href="" text="Opt-Out of Targeted Advertising" />
                        </div>)

                        :

                        props.block === "block3" ?
                            (<div className="BlockLinks">
                                <Link className="links links-footer" href="" text="Wedding & Gift Registry" />
                                <Link className="links links-footer" href="" text="Business Accounts" />
                                <Link className="links links-footer" href="" text="Tiffany for the Press" />
                                <Link className="links links-footer" href="" text="The Tiffany & Co. Foundation" />
                                <Link className="links links-footer" href="" text="Tiffany Alertline" />
                                <Link className="links links-footer" href="" text="Site Index" />
                            </div>)

                            :

                            props.block === "block4" ?
                                (<div className="BlockLinks">
                                    <p className="footer__mw-block4 text4">Be the first to know about exciting new designs, special events, store openings and much more.</p>
                                    <input type="email" name="email" placeholder="Email" id="email-footer" />
                                    <button className="cta button-signup" type="submit">Sign up</button>
                                    <div className="footer__socials">
                                        <a href="https://instagram.com/tiffanyandco/" aria-label="Instagram" title="Instagram" target="_blank" data-exit-context="footer" rel="noreferrer" data-exit-type="social" data-exit-name="Instagram">
                                            <div className="cta-content hover-cta">
                                                <img src="https://img.icons8.com/?size=512&id=32292&format=png" width="24" alt="" />
                                            </div>
                                        </a>
                                        <a href="https://www.facebook.com/Tiffany/" aria-label="Facebook" title="Facebook" target="_blank" data-exit-context="footer" rel="noreferrer" data-exit-type="social" data-exit-name="Facebook">
                                            <div className="cta-content hover-cta">
                                                <img src="https://img.icons8.com/?size=512&id=85330&format=png" width="32" alt="" />
                                            </div>
                                        </a>
                                        <a href="https://pinterest.com/TiffanyAndCo/" aria-label="Pinterest" title="Pinterest" target="_blank" data-exit-context="footer" rel="noreferrer" data-exit-type="social" data-exit-name="Pinterest">
                                            <div className="cta-content hover-cta">
                                                <img src="https://img.icons8.com/?size=512&id=11101&format=png" width="24" alt="" />
                                            </div>
                                        </a>
                                        <a href="https://twitter.com/TiffanyAndCo/" aria-label="Twitter" title="Twitter" target="_blank" data-exit-context="footer" rel="noreferrer" data-exit-type="social" data-exit-name="Twitter">
                                            <div className="cta-content hover-cta">
                                                <img src="https://img.icons8.com/?size=512&id=60014&format=png" width="32" alt="" />
                                            </div>
                                        </a>
                                        <a href="https://www.youtube.com/OfficialTiffanyAndCo/" aria-label="YouTube" title="YouTube" target="_blank" data-exit-context="footer" rel="noreferrer" data-exit-type="social" data-exit-name="YouTube">
                                            <div className="cta-content hover-cta">
                                                <img src="https://img.icons8.com/?size=512&id=37326&format=png" width="32" alt="" />
                                            </div>
                                        </a>
                                    </div>
                                </div>)
                                :
                                ""
            )}
        </>
    );
}

export default BlockLinks;