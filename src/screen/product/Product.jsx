import { Title, BodyOne } from "../../components/common/CustomComponents";
import { productlists } from "../../assets/data/data";
import { ProductCard } from "../../router";

export const Product = () => {
  return (
    <div>
      <section className="py-20 bg-white-100">
        <div className="container">
          <Title level={4}>Most Popular Products</Title>
          <div className="flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">All products (39)</BodyOne>
            <BodyOne className="text-sm text-primary-green">
              wooden products (15)
            </BodyOne>
          </div>

          <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {productlists.map((product) => {
              return <div key={product.id}>
                        <ProductCard
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            images={product.images}
                            price={product.price}
                            discount={product.discount}
                            rating={product.rating}
                            featured={product.featured}
                            category={product.category}
                            color={product.color}
                        />
              </div>
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
