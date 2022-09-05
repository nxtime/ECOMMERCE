import Button from "@/components/atoms/Button";
import Categories from "@/components/organisms/Categories";
import Filters from "@/components/organisms/Filters";
import ProductsList from "@/components/organisms/ProductsList";
import { getPrefetchProductsPages } from "@/lib/get_products";
import { useEffect, useState } from "react";
import StyledProducts from "./styles";
// import commerce from '../lib/commerce';

export default function Products() {
    const [isBrowser, setIsBrowser] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
    useEffect(() => {
        setIsBrowser(true);
    }, []);

    if (!isBrowser) return null;

    const { pages, productsItems } = getPrefetchProductsPages(2, 100);
    return (
        <StyledProducts>
            <aside className={isMenuOpen ? "open" : "closed"}>
                {isMenuOpen && (
                    <>
                        <Categories />
                        <Filters />
                        <Button color="secondary">Filtrar</Button>
                    </>
                )}
            </aside>
            <div>
                <Button color="secondary" className={`contained ${!isMenuOpen && "menu-opened"}`} onClick={() => setIsMenuOpen((s) => !s)}>
                    {isMenuOpen ? "Fechar" : "Abrir"}
                </Button>
                <ProductsList title="Produtos" products={productsItems} pages={pages} />
            </div>
        </StyledProducts>
    );
}
