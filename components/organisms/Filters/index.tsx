import Fieldset from "@/components/molecules/Fieldset";
import StyledFilters from "./styles";

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

const MOCK_ESTACOES = [
    {
        id: 23123,
        name: "estacao",
        label: "Verão",
        description: "Verão"
    },
    {
        id: 3223123,
        name: "estacao",
        label: "Outono",
        description: "Outono"
    },
    {
        id: 21313424,
        name: "estacao",
        label: "Inverno",
        description: "Inverno"
    },
    {
        id: 2354325,
        name: "estacao",
        label: "Primavera",
        description: "Primavera"
    }
];

export default function Filters() {
    return (
        <StyledFilters>
            <Fieldset type="radio" title="Cor" content={MOCK_COLORS} />
            <Fieldset type="radio" title="Estação" content={MOCK_ESTACOES} />
        </StyledFilters>
    );
}
