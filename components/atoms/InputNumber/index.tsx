import { useRef, useState } from "react";
import Button from "../Button";
import StyledInputNumber from "./styles";

type InputNumberProps = {
    maxNumber?: number;
    defaultNumber?: number;
    onChange?: (value: number) => void;
};

export default function InputNumber({ maxNumber = 999, defaultNumber = 1, onChange }: InputNumberProps) {
    const [inputValue, setInputValue] = useState<number>(defaultNumber < 0 || defaultNumber > maxNumber ? 1 : defaultNumber);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <StyledInputNumber className="input__number">
            <div className="input__number-field">
                <input
                    ref={inputRef}
                    value={inputValue}
                    type="number"
                    maxLength={3}
                    onChange={() => {
                        // console.log(inputRef.current!.value);
                        const newValue = typeof inputRef.current!.value === "string" ? 1 : parseInt(inputRef.current!.value, 10);
                        if (newValue > maxNumber || newValue < 1) return;
                        setInputValue(newValue);
                        onChange?.(newValue);
                    }}
                />
            </div>
            <div className="input__number-actions">
                <Button
                    type="button"
                    color="secondary"
                    onClick={() => {
                        if (inputValue === maxNumber) return;
                        setInputValue((prev) => prev + 1);
                        onChange?.(inputValue + 1);
                    }}
                >
                    <span>{"<"}</span>
                </Button>
                <Button
                    type="button"
                    color="secondary"
                    onClick={() => {
                        if (inputValue === 1) return;
                        setInputValue((prev) => prev - 1);
                        onChange?.(inputValue - 1);
                    }}
                >
                    <span>{">"}</span>
                </Button>
            </div>
        </StyledInputNumber>
    );
}
