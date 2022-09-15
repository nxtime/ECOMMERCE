import Cart from "@/components/pages/Cart";
import { getProductByID } from "@/lib/get_products";
import { Product, userCartStore } from "@/store/userCart";
import { useState, useEffect } from "react";

const Carrinho = () => {
    const [isBrowser, setIsBrowser] = useState(false);

    const [cartItems, setCartItems] = useState<any>([]);

    const { products } = userCartStore((state) => state);
    useEffect(() => {
        if (!isBrowser) setIsBrowser(true);
    });

    useEffect(() => {
        const productsData = products.map<Product>((value: any) => ({ ...value, ...getProductByID(value.id) }));
        setCartItems(productsData);
    }, [JSON.stringify(products)]);

    if (!isBrowser) return null;
    return <Cart items={cartItems} />;
};

export default Carrinho;
