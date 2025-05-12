import React, {FormEvent, useState} from "react";
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Slider} from "@/components/ui/slider";
import {SliderRange} from "@radix-ui/react-slider";
import {Controller} from "react-hook-form";

type RangeFilterProps = {
    name: string;
    label: string;
    minimum: number;
    maximum: number;
    control: any;
};

const RangeFilter: React.FC<RangeFilterProps> = ({name, label, maximum, minimum, control}: RangeFilterProps) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>

            <Controller
                control={control}
                name={name}
                defaultValue={[minimum, maximum]}
                render={({ field }) => (
                    <>
                        <Slider
                            min={minimum}
                            max={maximum}
                            step={10}
                            value={field.value}
                            onValueChange={field.onChange}
                        />
                        <div className="text-sm text-muted-foreground mt-1 text-right">
                            R$ {field.value?.[0]} - R$ {field.value?.[1]}
                        </div>
                    </>
                )}
            />

            <FormMessage />
        </FormItem>
    );
};

export default RangeFilter;