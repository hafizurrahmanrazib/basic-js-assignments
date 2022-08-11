// Oil Price Calculator
// Problem-03: Have to Result Out oil price I have to pay
function oilPrice(diselQuantity, petrolQuantity, octenQuantity) {
    if (typeof diselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octenQuantity !== 'number') {
        return 'Please Enter a Number';
    }

    const diselPerLiter = 114;
    const petrolPerLiter = 130;
    const octenPerLiter = 135;

    const diselPrice = diselQuantity * diselPerLiter;
    const petrolPrice = petrolQuantity * petrolPerLiter;
    const octenPrice = octenQuantity * octenPerLiter;

    const totalPrice = diselPrice + petrolPrice + octenPrice;
    return totalPrice;
}
const result = oilPrice(0, 2, 3);
console.log(result);