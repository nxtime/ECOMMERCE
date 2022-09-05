import StyledRadio from "./styles";

interface RadioType {
    name: string;
    label?: string;
    id: any;
    setSelected?(): void;
    checked: boolean;
}

type DefaultRadioType = {
    label: string;
    setSelected(): void;
};

export default function Radio({ name, id, label, setSelected, checked }: RadioType & DefaultRadioType) {
    return (
        <StyledRadio>
            <input type="radio" name={name} id={id} onChange={() => setSelected?.()} checked={checked} readOnly />
            <label htmlFor={id}>{label}</label>
        </StyledRadio>
    );
}
