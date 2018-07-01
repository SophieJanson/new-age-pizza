export const pizzaOptions = {
    base: {
        data: [
            {
                id: 1,
                size: 20,
                name: "NY Style Small - 20cm",
                price: 6.25
            },
            {                
                id: 2,
                size: 25,
                name: "NY Style Medium - 25cm",
                price: 8.99
            },
            {
                id: 3,
                size: 30,
                name: "NY Style Large - 30cm",
                price: 11.49,
            },
            {
                id: 4,
                size: 35, 
                name: "NY Style Family - 35cm",
                price: 13.49
            }
        ],
        type: 'radio',
        defaultValue: null
    },
    sauce: {
        data: [
            {
                id: 1,
                name: "White sauce",
                price: 0
            },
            {
                id: 2,
                name: "Red sauce",
                price: 0
            },
            {
                id: 3,
                name: "Double red sauce",
                price: 1
            },
            {
                id: 4,
                name: "Mix it up",
                price: 1.5
            },
        ],
        type: 'radio',
        defaultValue: null
    },
    toppings: {
        data: [
            "Pineapple",
            "Corn",
            "Olives (green)",
            "Red onion",
            "Spinach",
            "Cherry tomatoes",
            "Chicken"
        ],
        type: 'checkbox',
        limit: 3,
        defaultValue: null
    },
    delivery: {
        data: [
            {
                id: 1,
                name: "Regular",
                priceMultiplier: 1
            },
            {
                id: 2,
                name: "Turbo Drone",
                priceMultiplier: 1.1
            }
        ],
        type: 'radio',
        defaultValue: 'Regular'
    }
}