import React from "react";
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Slider} from "@/components/ui/slider";

type RangeFilterProps = {
    name: string;
    label: string;
    minimum: number;
    maximum: number;
    field: any;
};

const RangeFilter: React.FC<RangeFilterProps> = ({name, label, maximum, minimum, field}: RangeFilterProps) => {
    return (
        <div>
            <FormItem>
                <FormLabel className="text-white">{label}</FormLabel>
                <FormControl>
                    <Slider
                        min={minimum}
                        max={maximum}
                    />
                    {/*<Input placeholder="user@email.com"*/}
                    {/*       className={success ? "text-green-300 border-green-300" : "text-white"}/>*/}
                </FormControl>

                <FormMessage/>
            </FormItem>
        </div>
    );
};

export default RangeFilter;