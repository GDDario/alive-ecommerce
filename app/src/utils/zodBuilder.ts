import {z} from "zod";

export function buildZodSchemaFromFilters(filters: any[]): z.ZodObject<any> {
    const shape: Record<string, any> = {};

    filters.forEach((filter) => {
        switch (filter.type) {
            case "range":
                shape[filter.name] = z
                    .tuple([
                        z.number().min(filter.minimum),
                        z.number().max(filter.maximum),
                    ])
                    .refine(([min, max]) => min <= max, {
                        message: "Valor mínimo deve ser menor que o máximo",
                    });
                break;

            case "checkbox":
                shape[filter.name] = z.array(z.string()).optional();
                break;

            default:
                // Fallback
                shape[filter.name] = z.any();
        }
    });

    return z.object(shape);
}
