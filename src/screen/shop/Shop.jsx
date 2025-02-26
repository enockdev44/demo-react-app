import { productlists } from "../../assets/data/data";
import { ProductCard } from "../../router";

export const Shop = () => {
	return (
		<>
			<section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
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
			</section>
		</>
	)
}