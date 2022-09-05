import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getProductByID } from "@/lib/get_products";
import ProductDetail from "@/components/pages/ProductDetail";
import { useEffect } from "react";
import { userSavePointStore, UserSavePointStoreType } from "@/store/userSavePoint";

// eslint-disable-next-line react/function-component-definition
export const ProductDetailPage: NextPage = () => {
    const { setLastVisitedProductPageId } = userSavePointStore((state) => state) as UserSavePointStoreType;

    const router = useRouter();
    const { id } = router.query as { id: string };
    const product = getProductByID(id);

    useEffect(() => {
        setLastVisitedProductPageId(parseInt(id!, 10));
    }, [setLastVisitedProductPageId, id]);

    if (!id) return <h2>Carregando...</h2>;

    if (!product) return <h2>Produto não encontrado</h2>;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return product && <ProductDetail {...product} />;
};

export default ProductDetailPage;
