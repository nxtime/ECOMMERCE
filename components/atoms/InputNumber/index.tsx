import { useRef, useState } from "react";
import Button from "../Button";
import StyledInputNumber from "./styles";

export default function InputNumber() {
    const [inputValue, setInputValue] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <StyledInputNumber className="input__number">
            <div className="input__number-field">
                <input
                    ref={inputRef}
                    value={Number.isNaN(inputValue) ? 0 : inputValue}
                    type="number"
                    maxLength={3}
                    onChange={() => {
                        if (parseInt(inputRef.current!.value, 10) > 999) return;
                        setInputValue(parseInt(inputRef.current!?.value, 10));
                    }}
                />
            </div>
            <div className="input__number-actions">
                <Button
                    type="button"
                    color="secondary"
                    onClick={() => {
                        if (inputValue === 999) return;
                        setInputValue((prev) => prev + 1);
                    }}
                >
                    <span>{"<"}</span>
                </Button>
                <Button
                    type="button"
                    color="secondary"
                    onClick={() => {
                        if (inputValue === 0) return;
                        setInputValue((prev) => prev - 1);
                    }}
                >
                    <span>{">"}</span>
                </Button>
            </div>
        </StyledInputNumber>
    );
}
