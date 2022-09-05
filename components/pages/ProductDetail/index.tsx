/* eslint-disable no-alert */
// import InputNumber from "@/components/atoms/InputNumber";
import Fieldset from "@/components/molecules/Fieldset";
import IconButton from "@/components/molecules/IconButton";
import Image from "next/image";
import StyledProductDetail from "./styles";

interface ProductDetailType {
    image: string;
    price: number;
    name: string;
    description?: string;
}

const MOCK_SIZES = [
    {
        id: 213123123,
        name: "tamanho",
        label: "P",
        description: "Pequeno"
    },
    {
        id: 213122323,
        name: "tamanho",
        label: "M",
        description: "Médio"
    },
    {
        id: 21311243123,
        name: "tamanho",
        label: "G",
        description: "Grande"
    },
    {
        id: 213153123,
        name: "tamanho",
        label: "GG",
        description: "Extra Grande"
    }
];

const MOCK_COLORS = [
    {
        id: 213112323123,
        name: "cor",
        label: "Azul",
        description: "Azul"
    },
    {
        id: 213121232323,
        name: "cor",
        label: "Verde",
        description: "Verde"
    },
    {
        id: 21311231243123,
        name: "cor",
        label: "Vermelho",
        description: "Vermelho"
    },
    {
        id: 213151233123,
        name: "cor",
        label: "Amarelo",
        description: "Amarelo"
    }
];

export default function ProductDetail({ image, price, name, description }: ProductDetailType) {
    const submitHandler = (e: any) => {
        e.preventDefault();
    };

    return (
        <StyledProductDetail>
            <div className="product-detail">
                <div className="product-detail__image">
                    <Image src={image} alt={name} layout="fill" />
                </div>
                <div className="product-detail__info">
                    <h2 className="product-detail-title">{name}</h2>
                    <h4 className="product-detail-price">
                        {price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </h4>
                    <div className="product-detail-description">
                        <p>{description}</p>
                    </div>
                    <div className="product-detail__form">
                        <form onSubmit={submitHandler}>
                            <Fieldset title="Tamanho" type="radio" content={MOCK_SIZES} />
                            <Fieldset title="Cor" type="radio" content={MOCK_COLORS} />
                            <div className="product-detail__form-multi">
                                <Fieldset title="Quantidade" type="number" />
                                <div className="product-actions">
                                    <IconButton onClick={() => window.alert("Adicionado ao carrinho")} pos="right" icon="akar-icons:cart">
                                        Adicionar
                                    </IconButton>
                                    <IconButton onClick={() => window.alert("Quero Comprar")} pos="right" icon="akar-icons:shopping-bag" color="secondary">
                                        Comprar
                                    </IconButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </StyledProductDetail>
    );
}
