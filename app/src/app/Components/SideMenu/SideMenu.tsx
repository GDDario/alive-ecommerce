'use client';

import React, {useEffect} from "react";
import FiltersDictionary from "@/app/Components/SideMenu/FiltersDictionary";
import {useFilters} from "@/app/context/FilterContext";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form} from "@/components/ui/form";
import {buildZodSchemaFromFilters} from "@/utils/zodBuilder";
import {Button} from "@/components/ui/button";

const SideMenu: React.FC = () => {
    const {filters} = useFilters();

    const schema = buildZodSchemaFromFilters(filters);

    const form = useForm<any>({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        console.log('Filters feitos', filters);
    }, [filters]);

    const renderFilter = (filter: any) => {
        // @ts-ignore
        const Filter = FiltersDictionary[filter.type];

        return <Filter key={filter.name} {...filter} control={form.control}/>;
    };

    const onSubmit = (formData: any) => {
        console.log('formData', formData);
    }

    const onInvalid = (formData: any) => {
        console.log('formData', formData);
    }

    return (
        <aside className="h-[85vh] min-w-[300px] glassy-panel sticky top-[8%] left-0 px-4 py-2 flex flex-col gap-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
                    {
                        filters.map((filter: any) => renderFilter(filter))
                    }

                    <Button type="submit" className="mt-4">Filtrar</Button>
                </form>
            </Form>
        </aside>
    )
};

export default SideMenu;