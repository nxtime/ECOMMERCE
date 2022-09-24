import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
// import Categories from "@/components/organisms/Categories";
import Filters from "@/components/organisms/Filters";
import ProductsList from "@/components/organisms/ProductsList";
// import useProducts from "@/hooks/useProducts";
// import useProducts from "@/hooks/useProducts";
import { getPrefetchProductsPages } from "@/lib/get_products";
import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import StyledProducts from "./styles";
// import commerce from '../lib/commerce';

export default function Products() {
    const [isBrowser, setIsBrowser] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
    useEffect(() => {
        if (!isBrowser) setIsBrowser(true);
    }, []);

    // const products = useProducts();

    // console.log("Aqui", products);
    if (!isBrowser) return null;
    const { pages, productsItems } = getPrefetchProductsPages(2, 100);
    return (
        <StyledProducts>
            <aside className={isMenuOpen ? "open" : "closed"}>
                {isMenuOpen && (
                    <>
                        <Typography type="title" size="lg">
                            Categorias
                        </Typography>
                        {/* <Categories /> */}
                        <Filters />
                        <Button color="secondary">Filtrar</Button>
                    </>
                )}
            </aside>
            <div>
                <Button color="secondary" className={`contained ${!isMenuOpen && "menu-opened"}`} onClick={() => setIsMenuOpen((s) => !s)}>
                    {isMenuOpen ? "Fechar" : "Abrir"}
                </Button>
                <ProductsList title="Produtos" products={productsItems} pages={pages} showPagination />
            </div>
        </StyledProducts>
    );
}
