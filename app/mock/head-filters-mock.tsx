// Range
// Radio
// Select
// Checkbox
// Text

const HeadFiltersMock = (): any[] => [
    {
        "type": "range",
        "name": "price",
        "label": "Preço",
        "minimum": 0,
        "maximum": 1000,
    },
    {
        "type": "checkbox",
        "name": "colors",
        "label": "Cores",
        "options": [
            {
                "label": "Preto",
                "value": "black",
                "quantity": 30,
                "color": "#000"
            },
            {
                "label": "Azul",
                "value": "blue",
                "quantity": 40,
                "color": "#00f"
            },
        ],
    },
    // {
    //     "type": "checkbox",
    //     "name": "size",
    //     "label": "Tamanhos",
    //     "options": [
    //         {
    //             "label": "33",
    //             "value": "33",
    //             "quantity": 25,
    //             "color": null,
    //         },
    //         {
    //             "label": "34",
    //             "value": "34",
    //             "quantity": 45,
    //             "color": null,
    //         },
    //     ],
    // },
    // {
    //     "type": "checkbox",
    //     "name": "gender",
    //     "label": "Gênero",
    //     "options": [
    //         {
    //             "label": "Homem",
    //             "value": "H",
    //             "quantity": 30,
    //             "color": null,
    //         },
    //         {
    //             "label": "Mulher",
    //             "value": "M",
    //             "quantity": 30,
    //             "color": null,
    //         },
    //         {
    //             "label": "Unissex",
    //             "value": "U",
    //             "quantity": 10,
    //             "color": null,
    //         },
    //     ],
    // },
];

export default HeadFiltersMock;