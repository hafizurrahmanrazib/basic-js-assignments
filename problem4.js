// Problem-04: Have to Result Out Total Public Bus Fare Depending On Passanger
function publicBusFare(passanger) {
    if (typeof passanger !== 'number') {
        return 'Please Enter a Number';
    }

    const perPassangerFare = 250;
    const perReservedBusContains = 50;
    const perReservedMicroBusContains = 11;

    const remainingByReservedBus = passanger % perReservedBusContains;
    const remainingByMicroBus = remainingByReservedBus % perReservedMicroBusContains;
    const goToPublicBus = remainingByMicroBus;
    const totalPublicBusFare = goToPublicBus * perPassangerFare;
    return totalPublicBusFare;
}
const pablicBusFare = publicBusFare(5);
console.log(pablicBusFare);