import { Link } from "react-router-dom";

const NewsCard = ({ blogId, blogImage, title, category }) => {
    const link = blogId;
    return (
        <>
            <div className="w-1/3 px-5">
                <div className="blog-wrap mb-[30px] scroll-zoom">
                    <div className="blog-img relative overflow-hidden">
                        <Link to={`posts/${link}`}>
                            <img className="w-full" src={blogImage} alt="" />
                        </Link>
                        <span className="bg-[#a749ff] absolute top-[10px] left-[10px] block leading-1 text-[13px] font-[500] px-[10px] pb-[5px] pt-[2px] text-white">{category}</span>
                    </div>
                    <div className="blog-content-wrap text-center">
                        <div className="blog-content text-center inline-block bg-white py-[14px] px-[44px] mt-[-64px] z-[99] relative">
                            <h3 className="text-[20px] font-[500] leading-[30px] mb-[5px] ">
                                <Link to={`posts/${link}`}>
                                    {title}
                                </Link>
                            </h3>
                            <span className="italic text-[#666] font-[300]">By Shop <Link to="#">Admin</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCard;