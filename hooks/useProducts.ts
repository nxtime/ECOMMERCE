import { useEffect, useState } from "react";
import axios from "axios";

export default async function useProducts() {
    const [products, setProducts] = useState<any>(null);
    const [pages, setPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [defaultFetch, setDefaultFetch] = useState({
        page: 1,
        productsPerPage: 50
    });

    const { productsData, pagesData }: any = axios.get("http://localhost:3001/products", { params: defaultFetch }).then((res) => res.data);

    useEffect(() => {
        if (!isLoading) {
            if (productsData.length) {
                setProducts(productsData);
                setPages(pagesData);
                setIsLoading(false);
            }
        }
    }, [isLoading]);

    // useEffect(() => {
    //     console.log(products.length, pages);
    // }, [products, pages]);

    const changePage = (options: { page: number; productsPerPage: number }) => {
        setDefaultFetch(options);
    };

    return {
        isLoading,
        products,
        pages,
        changePage
    };
}
