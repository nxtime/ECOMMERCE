import Image from "next/image";
import Link from "next/link";
import StyledProduct from "./styles";

interface ProductType {
    name: string;
    image: string;
    price: number;
    id: any;
}

export default function Product({ name, image, price, id }: ProductType) {
    return (
        <StyledProduct className="product" src={image}>
            <Link href={`/produto/${id}`}>
                <div className="product__image">
                    <Image src={image} width={240} height={256} alt={name} />
                </div>
            </Link>
            <div className="product__info">
                <Link href={`/produto/${id}`}>
                    <h2 className="product__info__name">{name}</h2>
                </Link>
                <h4 className="product__info__price">
                    {price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </h4>
            </div>
        </StyledProduct>
    );
}
