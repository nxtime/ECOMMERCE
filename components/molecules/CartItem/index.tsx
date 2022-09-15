/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-prop-types */
import IconButton from "@/components/molecules/IconButton";
import Typography from "@/components/atoms/Typography";
import { useState } from "react";
import { currency } from "@/utils/numberFormat";
import Image from "next/image";
import Link from "next/link";
import { Product, userCartStore } from "@/store/userCart";
import InputNumber from "@/components/atoms/InputNumber";
import StyledCartItem from "./styles";

export default function CartItem({ id, image, name, price, qty }: Product) {
    const removeFromCart = userCartStore((state) => state.removeFromCart);
    const [newQty, setNewQty] = useState(qty);

    return (
        <StyledCartItem>
            <div className="cart">
                <div className="cart__image">
                    <Link href={`/produto/${id}`}>
                        <a>
                            <Image src={image} height={24} width={24} alt={name} />
                        </a>
                    </Link>
                </div>
                <div className="cart__name">
                    <Typography type="subtitle">{name}</Typography>
                </div>
                <div className="cart__qty">
                    <InputNumber defaultNumber={newQty} onChange={(value) => setNewQty(Number.isNaN(value) ? 1 : value)} />
                </div>
                <div className="cart__price-content">
                    <Typography>Qtd: {newQty}</Typography>
                    <Typography type="subtitle">{currency(price)}</Typography>
                </div>
                <div className="cart__price-total">
                    {/* <Typography type="subtitle">Total</Typography> */}
                    <Typography type="title" size="md">
                        {currency(price * newQty)}
                    </Typography>
                </div>
                <div className="cart__actions">
                    {qty !== newQty && <IconButton icon="ci:refresh" color="secondary" />}
                    <IconButton icon="bi:trash-fill" onClick={() => removeFromCart(id)} />
                </div>
            </div>
        </StyledCartItem>
    );
}
