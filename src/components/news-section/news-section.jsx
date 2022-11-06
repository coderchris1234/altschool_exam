import { useEffect } from "react";
import blogData from "../../blog-data.json";
import NewsCard from "../news-card/news-card";

const NewsSection = () => {
    useEffect(() => {
        console.log(blogData);
    }, [])

    return (
        <>
            <div className="blog-area pb-[55px]">
                <div className="container max-w-[1200px] mx-auto px-[16px]">
                    <div className="section-title text-center mb-[55px]">
                        <h2 className="text-[30px] font-[600] m-0 relative inline-block before:absolute before:content-[''] before:left-[-100px] before:bg-black before:w-[80px] before:h-[2px] before:top-[17px]  after:absolute after:content-[''] after:right-[-100px] after:bg-black after:w-[80px] after:h-[2px] after:top-[17px] leading-9">
                            OUR BLOG
                        </h2>
                    </div>
                    <div className="flex gap-10">
                        {
                            blogData.map((value, index) => {
                                const {id, title, category, imageUrl} = value;
                                return(
                                    <NewsCard key={index} blogId={id} title={title} category={category} blogImage={imageUrl}  />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsSection;