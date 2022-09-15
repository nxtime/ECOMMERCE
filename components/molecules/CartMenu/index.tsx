/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-prop-types */
import IconButton from "@/components/molecules/IconButton";
import Typography from "@/components/atoms/Typography";
import { currency } from "@/utils/numberFormat";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/store/userCart";
import Button from "@/components/atoms/Button";
import StyledCartMenu from "./styles";

export default function CartMenu({ products, removeItem }: { products: Product[]; removeItem?(itemId: string): void }) {
    const total = products.reduce((acc, { price, qty }) => acc + price * qty, 0);
    return (
        <StyledCartMenu>
            <ul>
                {products.map(({ id, image, name, price, qty }: Product) => (
                    <li key={id}>
                        <div className="cart">
                            <div className="cart__image">
                                <Link href={`/produto/${id}`}>
                                    <a>
                                        <Image src={image} height={24} width={24} alt={name} />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Typography type="subtitle">{name}</Typography>
                            </div>
                            <div className="cart__price-content">
                                <Typography>Qtd: {qty}</Typography>
                                <Typography type="subtitle">{currency(price)}</Typography>
                            </div>
                            <div className="cart__price-total">
                                <Typography type="subtitle">Total</Typography>
                                <Typography>{currency(price * qty)}</Typography>
                            </div>
                            <div className="cart__actions">
                                <IconButton onClick={() => removeItem?.(id)} icon="fa:close" color="secondary" />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart__total">
                <Typography type="subtitle" size="md">
                    Valor total: {currency(total)}
                </Typography>
            </div>
            <Link href="/carrinho">
                <a>
                    <Button color="secondary">Ver Carrinho</Button>
                </a>
            </Link>
        </StyledCartMenu>
    );
}
