/* eslint-disable @typescript-eslint/no-unused-expressions */
import IconButton from "@/components/molecules/IconButton";
import { PropsWithChildren, useRef, useState } from "react";
import StyledTextfield from "./styles";

interface TextFieldProps extends PropsWithChildren {
    name: string;
    label: string | undefined;
    type?: "text";
    id: any;
    disabled?: boolean;
    defaultValue?: string;
    edit?: boolean;
    onChange?(value: any): void;
    onInputChange?(value: any): void;
}

// eslint-disable-next-line import/prefer-default-export
export const TextField = ({ type = "text", name, label, id, disabled = false, defaultValue = "", edit = false, onChange, onInputChange }: TextFieldProps) => {
    const [isDisabled, setIsDisabled] = useState(disabled);
    const [isEditing, setIsEditing] = useState(false);
    const [currentValue, setCurrentValue] = useState(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <StyledTextfield>
            {label !== undefined && <label htmlFor={id}>{label}</label>}
            <div className={`input__actions ${isDisabled && "disabled"}`}>
                <input
                    type={type}
                    ref={inputRef}
                    value={currentValue}
                    id={id}
                    name={name}
                    disabled={isDisabled}
                    placeholder="Digite..."
                    onChange={() => {
                        inputRef?.current!.value !== null ? setCurrentValue(inputRef?.current!.value) : setCurrentValue("");
                        onInputChange !== undefined && onInputChange(inputRef?.current!.value);
                    }}
                />
                {edit &&
                    (!isEditing ? (
                        <IconButton
                            icon="clarity:edit-solid"
                            onClick={() => {
                                setIsDisabled(false);
                                setIsEditing(true);
                            }}
                        />
                    ) : (
                        <IconButton
                            icon="el:ok"
                            color="secondary"
                            onClick={() => {
                                setIsDisabled(true);
                                setIsEditing(false);
                                onChange?.(currentValue);
                            }}
                        />
                    ))}
            </div>
        </StyledTextfield>
    );
};
