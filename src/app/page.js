import Main from "./home/Main";
import Features from "./home/Features";
import FeaturedProperties from "./home/FeaturedProperties"
import Reviews from './home/Reviews'
import Questions from "./home/Questions"
import Cta from "./home/Cta";

const Home = () => {
    return ( 
        <div>
            <Main /> 
            <Features />
            <FeaturedProperties />
            <Reviews />
            <Questions />
            <Cta />
        </div>
     );
}
 
export default Home;