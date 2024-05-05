function getShippingCost(country) {
    let priceForDelivering;
    switch (country) {
        case "China":
            priceForDelivering = 100;
            return `Shipping to ${country} will cost ${priceForDelivering} credits`;
            break; 
        case "Chile":
            priceForDelivering = 250;
            return `Shipping to ${country} will cost ${priceForDelivering} credits`;
            break; 
        case "Australia":
            priceForDelivering = 170;
            return `Shipping to ${country} will cost ${priceForDelivering} credits`;
            break; 
        case "Jamaica":
            priceForDelivering = 120;
            return `Shipping to ${country} will cost ${priceForDelivering} credits`;
            break; 
        default:
            return "Sorry, there is no delivery to your country";
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"