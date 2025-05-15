import React from "react";
import {FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Controller} from "react-hook-form";
import {CheckboxOption} from "@/types/filters";
import {Checkbox} from "@/components/ui/checkbox";

type CheckboxFilterProps = {
    name: string;
    label: string;
    options: CheckboxOption[];
    control: any;
};

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({name, label, options, control}) => {
    const generateLabelText = (option: CheckboxOption): string => {
        let text: string = option.label;

        if (option.quantity !== undefined) {
            text += ` (${option.quantity})`;
        }

        return text;
    }

    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>

            <Controller
                control={control}
                name={name}
                defaultValue={[]}
                render={({field}) => {
                    const value = field.value ?? [];

                    return (
                        <div className="flex flex-col gap-2">
                            {options.map((option: CheckboxOption) => {
                                const isChecked = value.includes(option.value);

                                const handleChange = () => {
                                    if (isChecked) {
                                        field.onChange(value.filter((v: string) => v !== option.value));
                                    } else {
                                        field.onChange([...value, option.value]);
                                    }
                                };

                                return (
                                    <div className="flex items-center gap-2" key={option.value}>
                                        <Checkbox
                                            checked={isChecked}
                                            onCheckedChange={handleChange}
                                            style={{backgroundColor: option.color ? option.color : "black"}}
                                        />

                                        <span className="text-sm" onClick={() => handleChange()}>{generateLabelText(option)}</span>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }}
            />

            <FormMessage/>
        </FormItem>
    );
};

export default CheckboxFilter;