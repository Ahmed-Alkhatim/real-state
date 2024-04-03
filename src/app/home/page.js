import Main from "./Main";
import Features from "./Features";
import FeaturedProperties from "./FeaturedProperties"
import Reviews from './Reviews'

const Home = () => {
    return ( 
        <div className="pb-[200px]">
            <Main />
            <Features />
            <FeaturedProperties />
            <Reviews />
        </div>
     );
}
 
export default Home;