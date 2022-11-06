import HeroSection from "../../components/hero-section/hero-section";
import cat1Image from "../../assets/images/banner-1.webp";
import NewsSection from "../../components/news-section/news-section";
import CategoryCard from "../../components/category-card/category-card";



const HomeScreen = () => {
    return (

        <div className="home-body">
            <HeroSection />

            <div className="container pt-[60px] pb-[65px] max-w-[1200px] mx-auto">
                <div className="flex  gap-10">
                    <CategoryCard catImage={cat1Image} />
                    <CategoryCard catImage={cat1Image} />
                    <CategoryCard catImage={cat1Image} />
                </div>
            </div>

            <NewsSection />
        </div>
    )
}

export default HomeScreen;