import Fieldset from "@/components/molecules/Fieldset";
import IconButton from "@/components/molecules/IconButton";
// import { Product } from "@/store/userCart";
import { useState } from "react";

interface FormProps {
    submitHandler(qty: number, type: string): void;
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

export default function Form({ submitHandler }: FormProps) {
    const [sizeValue, setSizeValue] = useState<undefined | string>(undefined);
    const [colorValue, setColorValue] = useState<undefined | string>(undefined);
    const [qtyValue, setQtyValue] = useState(1);

    const clickHandler = (type: "addToCart" | "checkout") => {
        console.log(sizeValue, colorValue, qtyValue);
        submitHandler(qtyValue, type);
    };

    return (
        <form onSubmit={(e: any) => e.preventDefault()}>
            <Fieldset title="Tamanho" type="radio" content={MOCK_SIZES} onChange={(size: string) => setSizeValue(size)} />
            <Fieldset title="Cor" type="radio" content={MOCK_COLORS} onChange={(color: string) => setColorValue(color)} />
            <div className="product-detail__form-multi">
                <Fieldset title="Quantidade" type="number" onChange={(qty: number) => setQtyValue(qty)} defaultValue={qtyValue} />
                <div className="product-actions">
                    <IconButton onClick={() => clickHandler("addToCart")} pos="right" icon="akar-icons:cart">
                        Adicionar
                    </IconButton>
                    <IconButton onClick={() => window.alert("Quero Comprar")} pos="right" icon="akar-icons:shopping-bag" color="secondary">
                        Comprar
                    </IconButton>
                </div>
            </div>
        </form>
    );
}
