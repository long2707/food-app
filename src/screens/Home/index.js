import React from "react";
import Layout from "components/Layout";
import { products } from "data";
import HeroSLider from "components/HeroSilder";

import {
    AnalysisHome,
    Categories, Delivey, HomeIngredient, Products, Review, WelcomeHome
} from "./components";
import img1 from "../../assets/images/food-1.png";
import img2 from "../../assets/images/food-2.png";
import img3 from "../../assets/images/food-3.png";
import img4 from "../../assets/images/food-4.png";

const CardCategory = [
    {
        img: img1,
        title: "Hamburger"
    },
    {
        img: img2,
        title: "Yummy Donuts"
    },
    {
        img: img3,
        title: "Craft Pizza"
    },
    {
        img: img4,
        title: "Ice Cream"
    }
];

function Home() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            {/* start slider */}
            <HeroSLider />
            {/* end slider */}
            {/* start categories */}
            <Categories data={CardCategory} />
            {/* end categories */}
            {/* start welcome */}
            <WelcomeHome />
            {/* end welcome */}
            {/* start ingredient */}
            <HomeIngredient />
            {/* end ingredient */}
            {/* start delivery service */}
            <Delivey />
            {/* end delivery service */}
            {/* start products */}
            <Products data={products} />
            {/* end products */}
            <AnalysisHome />
            <Review />
        </Layout>
    );
}
export default Home;
