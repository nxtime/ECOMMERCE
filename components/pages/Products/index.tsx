/* eslint-disable react-hooks/exhaustive-deps */
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import IconButton from "@/components/molecules/IconButton";
import Filters from "@/components/organisms/Filters";
import ProductsList from "@/components/organisms/ProductsList";
import { prefetchProductsPages } from "@/lib/get_products";
import { userSavePointStore, UserSavePointStoreType } from "@/store/userSavePoint";
import { useEffect, useState } from "react";
import StyledProducts from "./styles";

export default function Products() {
    const [isBrowser, setIsBrowser] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
    const currentPage = userSavePointStore((state: any) => state.lastVisitedPage) as UserSavePointStoreType["lastVisitedPage"];

    useEffect(() => {
        if (!isBrowser) setIsBrowser(true);
    }, []);

    if (!isBrowser) return null;

    const { pages, productsItems } = prefetchProductsPages(currentPage);

    return (
        <StyledProducts>
            <aside className={isMenuOpen ? "open" : "closed"}>
                {isMenuOpen && (
                    <>
                        <Typography type="title" size="lg">
                            Categorias
                        </Typography>
                        <Filters />
                        <Button color="secondary">Filtrar</Button>
                    </>
                )}
            </aside>
            <div>
                <IconButton
                    color="secondary"
                    // className={`contained ${!isMenuOpen && "menu-opened"}`}
                    onClick={() => setIsMenuOpen((s) => !s)}
                    icon={!isMenuOpen ? "charm:menu-hamburger" : "ep:close-bold"}
                />
                <ProductsList title="Produtos" products={productsItems} pages={pages} showPagination />
            </div>
        </StyledProducts>
    );
}
