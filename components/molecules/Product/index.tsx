import { userCartStore } from "@/store/userCart";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@/components/molecules/IconButton";
import { currency } from "@/utils/numberFormat";
import Typography from "@/components/atoms/Typography";
import StyledProduct from "./styles";

interface ProductType {
    name: string;
    image: string;
    price: number;
    prevPrice?: number;
    id: any;
}

export default function Product({ name, image, price, prevPrice, id }: ProductType) {
    const addToCart = userCartStore((state) => state.addToCart);
    return (
        <StyledProduct className="product" src={image}>
            <div className="product__container">
                <Link href={`/produto/${id}`}>
                    <div className="product__image">
                        {prevPrice !== undefined && <Typography type="span">Promoção</Typography>}
                        <Image src={image} width={240} height={256} alt={name} />
                    </div>
                </Link>
                <div className="product__actions">
                    <IconButton onClick={() => addToCart({ id: id.toString(), qty: 1 })} icon="akar-icons:cart" color="secondary" />
                    <IconButton onClick={() => window.alert("Adicionado aos favoritos")} icon="ant-design:heart-filled" />
                </div>
            </div>
            <div className="product__info">
                <Link href={`/produto/${id}`}>
                    <h2 className="product__info__name">{name}</h2>
                </Link>
                <div className="product__info__price">
                    <Typography type="span" color="primary-700">
                        {prevPrice !== undefined && currency(prevPrice)}
                    </Typography>
                    <Typography>{currency(price)}</Typography>
                </div>
            </div>
        </StyledProduct>
    );
}
