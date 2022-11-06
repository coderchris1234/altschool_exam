import { Link } from "react-router-dom";
import Logo from "../images/logo";

const Footer = () => {
    return (
        <footer className="footer-area relative bg-gray-100 pt-[100px] pb-[70px]">
            <div className="container max-w-[1200px] mx-auto px-[10px]">
                <div className="row flex gap-16">
                    <div className="w-1/6">
                        <div className="copyright mb-[30px]">
                            <Logo className="mt-[41px] mb-[12px]" />
                            <p>
                                © 2021 <Link to="#">Flone</Link>.
                                <br /> 
                                All Rights Reserved
                            </p>
                        </div>
                    </div>
                    <div className="w-1/6">
                        <div className="footer-widget mb-[30px] ml-[30px]">
                            <div className="footer-title">
                                <h3 className="text-[16px] font-[500] text-black mb-[16px] leading-1">ABOUT US</h3>
                            </div>
                            <div className="footer-list">
                                <ul className="list-outside m-0 p-0">
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">About us</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Store location</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Contact</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Orders tracking</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/6">
                        <div className="footer-widget mb-30 ml-50">
                            <div className="footer-title">
                                <h3 className="text-[16px] font-[500] text-black mb-[16px] leading-1">USEFUL LINKS</h3>
                            </div>
                            <div className="footer-list">
                                <ul className="list-outside m-0 p-0">
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Returns</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Support Policy</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Size guide</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/6">
                        <div className="footer-widget mb-30 ml-75">
                            <div className="footer-title">
                                <h3 className="text-[16px] font-[500] text-black mb-[16px] leading-1">FOLLOW US</h3>
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Facebook</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Twitter</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Instagram</Link></li>
                                    <li className="mb-[11px]"><Link className="text-[#5d5d5d] tracking-[0.3px]" to="#">Youtube</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/6">
                        <div className="footer-widget mb-30 ml-70">
                            <div className="footer-title">
                                <h3 className="text-[16px] font-[500] text-black mb-[16px] leading-1">SUBSCRIBE</h3>
                            </div>
                            <div className="subscribe-style">
                                <p className="text-[#5d5d5d] mb-[20px] text-[14px] font-[400] leading-[24px]" >Get E-mail updates about our latest shop and special offers.</p>
                                <div id="mc_embed_signup" className="subscribe-form">
                                    <form id="mc-embedded-subscribe-form" className="validate" noValidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="">
                                        <div id="mc_embed_signup_scroll" className="mc-form">
                                            <input className="email" type="email" required="" placeholder="Enter your email here.." name="EMAIL"  />
                                            <div className="clear">
                                                <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" value="Subscribe" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;