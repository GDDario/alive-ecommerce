import React from "react";
import {FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Slider} from "@/components/ui/slider";
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