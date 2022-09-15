/* eslint-disable react/jsx-props-no-spreading */
import InputNumber from "@/components/atoms/InputNumber";
import Radio from "@/components/atoms/Radio";
import { PropsWithChildren, useState } from "react";
import StyledFieldset from "./styles";

interface InputType {
    type: "radio" | "button" | "number" | "custom";
    category?: "text" | "number";
    defaultValue?: any;
    content?: any[];
    onChange?: (value: any) => void;
}

interface FieldsetType extends InputType {
    title?: string;
}

export default function Fieldset({
    title,
    type,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    category,
    content,
    defaultValue,
    onChange,
    children
}: FieldsetType & PropsWithChildren) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const optionDescription = selectedOption !== null && content !== undefined && content![selectedOption!]?.description!;

    return (
        <StyledFieldset>
            {title && (
                <h4>
                    {title}: {optionDescription}
                </h4>
            )}
            <div className="input-container">
                {type === "custom" && children}
                {type === "radio" &&
                    content?.map((item, i) => (
                        <Radio
                            checked={i === selectedOption}
                            key={item.id}
                            {...item}
                            setSelected={() => {
                                setSelectedOption?.(i);
                                onChange?.(i);
                            }}
                            defaultValue={defaultValue}
                        />
                    ))}
                {type === "number" && (
                    <InputNumber
                        onChange={(value: number) => {
                            onChange?.(value);
                        }}
                        defaultNumber={defaultValue}
                    />
                )}
            </div>
        </StyledFieldset>
    );
}
