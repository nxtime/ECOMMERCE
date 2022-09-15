/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from "react";
import { userSavePointStore, UserSavePointStoreType } from "@/store/userSavePoint";
import Pagination from "@/components/molecules/Pagination";
import Product from "@/components/molecules/Product";
import StyledProductsList from "./styles";

interface ProductType {
    name: string;
    image: string;
    price: number;
    id: any;
}

interface ProductsListType {
    products: {
        page: number;
        products: ProductType[];
    }[];
    title: string;
    pages: number;
    showPagination?: boolean;
}

export default function ProductsList({ products, title, pages, showPagination = false }: ProductsListType) {
    const { lastVisitedPage, setLastVisitedPage, setLastVisitedPagePos, lastVisitedPagePos } = userSavePointStore((state) => state) as UserSavePointStoreType;

    useEffect(() => {
        const handleScroll = () => setLastVisitedPagePos(window.scrollY);

        window.addEventListener("scroll", handleScroll);

        window.scrollTo(0, lastVisitedPagePos);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastVisitedPagePos, setLastVisitedPagePos]);

    const currentPageProducts = products.filter(({ page }) => page === lastVisitedPage)[0]?.products ?? [];

    return (
        <StyledProductsList>
            <div className="products-title">
                <h2>{title}</h2>
            </div>
            <div className="products-container">
                {currentPageProducts.map((product: ProductType, index: number) => (
                    <Product key={index} {...product} />
                ))}
            </div>
            {showPagination && (
                <Pagination
                    className="bordered"
                    numberOfPages={pages}
                    currentPage={lastVisitedPage}
                    setCurrentPage={(page: number) => setLastVisitedPage(page)}
                />
            )}
        </StyledProductsList>
    );
}
