'use client';

import React, {useEffect, useState} from "react";
import {useFilters} from "@/app/context/FilterContext";
import headFiltersMock from "../../../../mock/head-filters-mock";
import headProducts from "../../../../mock/header-products-mock";
import {Product} from "@/types/product";
import ProductsGrid from "@/app/Components/ProductsGrid/ProductsGrid";

const HeadPage = () => {
    const {setFilters} = useFilters();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setProducts(headProducts);
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        setFilters(headFiltersMock);
    }, []);

    return (
        <main>
            <h1 className="text-xl">Produtos de <span className="font-bold">pernas</span></h1>

            <hr className="my-4 w-full" />

            {
                !loading ?
                    <ProductsGrid products={products}/>
                    : <p>Carregando...</p>
            }
        </main>
    );
};

export default HeadPage;