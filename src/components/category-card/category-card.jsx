import { Link } from "react-router-dom";

const CategoryCard = ({ catImage }) => {
    
    return (
        <div className="single-banner w-1/3 relative mb-[30px]">
            <Link to="/">
                <img className="w-full " src={catImage} alt="product-category" />
            </Link>
            <div className="banner-content absolute top-[40px] left-[36px] content-[''] z-[5]">
                <h3>Watches</h3>
                <h4>
                    Starting at 
                    <span>$99.00</span>
                </h4>
                <Link to="/"><i className="fa fa-long-arrow-right"></i></Link>
            </div>
        </div>

    );

}

export default CategoryCard;