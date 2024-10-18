export const testData = {
    "validSearch": {
        "searchTerm": "Laptop",
        "brand": "HP",
        "priceRange": {
            "max": 1000
        }
    },
    "invalidSearch": {
        "searchTerm": "ProductIsNotListed",
        "brand": "InvalidBrand",
        "priceRange": {
            "max": 10000
        }
    },
    "partialMatchSearch": {
        "searchTerm": "Headphones",
        "brand": "Sony",
        "priceRange": {
            "max": 50
        }
    }
} as const;
