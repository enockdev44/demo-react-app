import {Hero, Product, ShippingInfo, Banner, ProductSlide, ProductSlideCard, Testimonials, InstagramPost} from "../../router/index";
import { Title, Caption } from "../../components/common/CustomComponents";

export const Home = () => {
    return <>
        <Hero/>
        <Product />
        <ShippingInfo />
        <Banner />
        <ProductSlide />
        <Testimonials />

        <div className="container my-16 slideproduct">
            <Title level={3}>Recent Product</Title>
            <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN MOONCART.</Caption>
            <br />
            <ProductSlideCard />
        </div>
        <InstagramPost />
    </>
};

