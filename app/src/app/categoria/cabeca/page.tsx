'use client';

import {useEffect} from "react";
import {useFilters} from "@/app/context/FilterContext";
import headFiltersMock from "../../../../mock/head-filters-mock";

const HeadPage = () => {
    const {setFilters} = useFilters();

    useEffect(() => {
        setFilters(headFiltersMock);
    }, []);

    return (
        <main>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
            <p>Oi</p>
        </main>
    );
};

export default HeadPage;