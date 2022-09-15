import CartItem from "@/components/molecules/CartItem";
import { Product } from "@/store/userCart";
import StyledCart from "./styles";

export default function Cart({ items }: { items: Product[] }) {
    console.log(items);
    return (
        <StyledCart>
            <ul>
                {items.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </ul>
        </StyledCart>
    );
}
