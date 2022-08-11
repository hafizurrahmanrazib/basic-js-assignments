// Problem-01: Convert Radian To Degree
function radianToDegree(num) {
    if (typeof num !== 'number') {
        return 'Please Enter a Number';
    }
    const degree = num * (180 / Math.PI);
    const afterTwoDecimal = degree.toFixed(2);
    const result = parseFloat(afterTwoDecimal);
    return result;
}

// Problem-02: Check Whether The Given File Name Is A JavaScript File Or Not
function isJavaScriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'Please Enter a String';
    }
    const result = fileName.endsWith('.js');
    return result;
}

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

// Problem-05: Have to Result Out True Or False Between compare two input as object
function isBestFriend(a, b) {
    if ((typeof a !== 'object' || Array.isArray(a) === true) || (typeof b !== 'object' || Array.isArray(b) === true)) {
        return 'Please Enter An Object';
    }
    if ((a.name.toLowerCase() === b.friend.toLowerCase()) && (b.name.toLowerCase() === a.friend.toLowerCase())) {
        return true;
    }
    return false;
}