import {Product} from "@/types/product";
import React from "react";
import ProductCard from "@/app/Components/ProductsGrid/ProductCard";

type ProductsGridProps = {
    products: Product[];
    expandable?: boolean;
};

const ProductsGrid: React.FC<ProductsGridProps> = ({products, expandable = false}: ProductsGridProps) => {
    return (
        <section className="flex gap-8 flex-wrap">
            {products.map((product: Product) => <ProductCard key={product.uuid} product={product}/>)}
        </section>
    );
};

export default ProductsGrid;