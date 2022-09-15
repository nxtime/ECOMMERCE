import create from "zustand";
import { persist } from "zustand/middleware";

export type ProductId = {
    id: string;
    qty: number;
};

export type Product = {
    id: string;
    image: string;
    name: string;
    price: number;
    qty: number;
};

export interface UserCartStore {
    products: ProductId[];
    addToCart(product: ProductId): void;
    removeFromCart(id: string): void;
}

const MOCK_PRODUCTS = [
    {
        id: "1",
        qty: 3
    },
    {
        id: "2",
        qty: 7
    },
    {
        id: "3",
        qty: 1
    }
];

export const userCartStore = create(
    persist<UserCartStore>(
        (set) => ({
            products: MOCK_PRODUCTS,
            addToCart: (product: ProductId) => {
                set((state) => {
                    const index: number = state.products.findIndex(({ id }) => id === product.id);
                    if (index !== -1) {
                        console.log("Já existe");
                        console.log(state.products);
                        // eslint-disable-next-line no-param-reassign
                        const cloneProducts = state.products;
                        cloneProducts[index].qty += product.qty;
                        return { products: cloneProducts };
                    }
                    return { products: [...state.products, product] };
                });
            },
            removeFromCart: (itemId: string) => set((state) => ({ products: state.products.filter(({ id }: { id: string }) => itemId !== id) }))
        }),
        { name: "userCart" }
    )
);
