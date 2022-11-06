import { Link } from "react-router-dom";
import backGroundImage from "../../assets/images/slider-1.webp";


const HeroSection = () => {
    return (
        <div className="flex justify-end items-center" style={{ backgroundImage: `url(${backGroundImage})`, backgroundPosition: "center center", backgroundSize: "cover", minHeight: "750px" }}>
            <div className="mx-16">
                <h3 className="relative ml-[135px] mb-0 text-black text-[24px] font-[500] leading-8 before:absolute before:left-[-135px] before:top-[14px] before:content-[''] before:w-[120px] before:h-[2px] before:bg-black">Sale Off 40%</h3>
                <h1 className="text-[72px] leading-[97px] mt-[6px] mb-[37px]">Summer Offer <br />2020 Collection</h1>
                <div>
                    <Link className="text-[16px] relative font-[400] text-black inline-block border-[1px] border-solid border-black px-[50px] py-[19px]">SHOP NOW</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;