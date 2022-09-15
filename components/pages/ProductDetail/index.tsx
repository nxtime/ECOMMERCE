import Form from "@/components/organisms/Form";
/* eslint-disable no-alert */
// import InputNumber from "@/components/atoms/InputNumber";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Product, userCartStore } from "@/store/userCart";
import { currency } from "@/utils/numberFormat";
import Image from "next/image";
import StyledProductDetail from "./styles";

interface ProductDetailType {
    image: string;
    price: number;
    name: string;
    description?: string;
    id: string;
}

export default function ProductDetail({ id, image, price, name, description }: ProductDetailType) {
    const addToCart = userCartStore((state) => state.addToCart);

    const submitHandler = (qty: number, type: string) => {
        if (type === "addToCart") addToCart({ id, qty });
    };

    return (
        <StyledProductDetail>
            <div className="product-detail">
                <div className="product-detail__image">
                    <Image src={image} alt={name} layout="fill" />
                </div>
                <div className="product-detail__info">
                    <h2 className="product-detail-title">{name}</h2>
                    <h4 className="product-detail-price">{currency(price)}</h4>
                    <div className="product-detail-description">
                        <p>{description}</p>
                    </div>
                    <div className="product-detail__form">
                        <Form submitHandler={(qty: number, type: string) => submitHandler(qty, type)} />
                    </div>
                </div>
            </div>
        </StyledProductDetail>
    );
}
