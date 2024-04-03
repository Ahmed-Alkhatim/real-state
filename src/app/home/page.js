import Main from "./Main";
import Features from "./Features";
import FeaturedProperties from "./FeaturedProperties"
import Reviews from './Reviews'
import Questions from "./Questions"

const Home = () => {
    return ( 
        <div className="pb-[200px]">
            <Main />
            <Features />
            <FeaturedProperties />
            <Reviews />
            <Questions />
        </div>
     );
}
 
export default Home;