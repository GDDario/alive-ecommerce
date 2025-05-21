import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Controller} from "react-hook-form";
import React from "react";
import {TextFilterOption} from "@/types/filters";
import {Input} from "@/components/ui/input";

type TextFilterProps = {
    name: string;
    label: string;
    control: any;
    options?: TextFilterOption,
};

const TextFilter: React.FC<TextFilterProps> = (
        {name, label, control, options = {}}: TextFilterProps
    ) => {
        return (
            <Controller
                control={control}
                name={name}
                defaultValue=""
                render={({field}) => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder={options?.placeholder}/>
                        </FormControl>

                        {options.description !== null &&
                            <FormDescription>
                                {options?.description}
                            </FormDescription>
                        }
                        <FormMessage/>
                    </FormItem>
                )}
            />
        );
    }
;

export default TextFilter;