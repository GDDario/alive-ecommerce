export type Product = {
    name: string;
    slug: string;
    brand: string;
    category: string;
    variants: Variant[];
    uuid?: string;
    discount_code?: string;
};

export type Variant = {
    color: string;
    hex_color: string;
    size: string;
    gender: "M" | "F" | "U";
    price: number;
    quantity: number;
    images: string[];
    uuid?: string;
};