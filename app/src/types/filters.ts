export type CheckboxOption = {
    label: string;
    value: string | number;
    quantity?: number;
    color?: string;
};

export type TextFilterOption = {
    required?: boolean;
    placeholder?: string;
    default?: string;
    description?: string; // Below the input
};