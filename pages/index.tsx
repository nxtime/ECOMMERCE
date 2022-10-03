import BannerText from "@/components/molecules/BannerText";
import ProductsList from "@/components/organisms/ProductsList";
import type { NextPage } from "next";
import { prefetchProductsPages } from "@/lib/get_products";
import { useEffect, useState } from "react";
import { userSavePointStore } from "@/store/userSavePoint";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, react/function-component-definition
export const Home: NextPage = ({ products }: any) => {
    const lastVisitedPage: number = userSavePointStore((state: any) => state.lastVisitedPage);
    const [isBrowser, setIsBrowser] = useState<boolean>(false);
    useEffect(() => {
        setIsBrowser(true);
    }, []);

    if (!isBrowser) return null;

    const { pages, productsItems } = prefetchProductsPages(lastVisitedPage);

    return (
        <>
            <BannerText
                src="/images/home_page_banner.png"
                title="20% OFF NA PROMOÇÃO"
                subtitle="Somente se for sua primeira compra"
                width={1000}
                height={240}
                alt="Qualquer coisa"
            />
            <ProductsList title="Produtos Populares" products={productsItems} pages={pages} />
            <BannerText
                src="/images/home_page_banner.png"
                title="CALÇAS & CAMISAS"
                subtitle="por apenas R$99,99"
                width={1000}
                height={240}
                alt="Qualquer coisa"
            />
        </>
    );
};

export default Home;
