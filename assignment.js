// assignment link: https://github.com/albiummid/3rd-assignment


// 1st-function
function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        return "distance can't be negative";
    }
    else {
        meter = kilometer * 1000;
    }
    return meter;
}


// 2nd-function
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "product quantity can't be negative";
        // wrong input should be add
    }
    else {
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;
        // feedback : variables should outside of conditions.
        var totalWatchPrice = watch * watchPrice;
        var totalPhonePrice = phone * phonePrice;
        var totalLaptopPrice = laptop * laptopPrice;
        var total = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
    }
    return total;
}

// 3rd-function
function hotelCost(day) {
    var totalCost = 0;
    var costPerFirstTenDays = 100;
    var costPerSecondTenDays = 80;
    var costPerThirdTenDayToAnyDay = 50;
    if (day <= 10) {
        totalCost = day * costPerFirstTenDays;
    }
    else if (day <= 20) {
        var firstTenDayCost = 10 * costPerFirstTenDays;
        var remainingDays = day - 10;
        var secondTenDayCost = remainingDays * costPerSecondTenDays;
        totalCost = firstTenDayCost + secondTenDayCost;
    }
    else {
        var firstTenDayCost = 10 * costPerFirstTenDays;
        var secondTenDayCost = 10 * costPerSecondTenDays;
        var remainingDays = day - 20;
        var thirdTenDayToAnyDayCost = remainingDays * costPerThirdTenDayToAnyDay;
        totalCost = firstTenDayCost + secondTenDayCost + thirdTenDayToAnyDayCost;
    }
    return totalCost;
}

// feedback: Negative value should be ignored. function to function gap should be 2 lines.

// 4th-function
function megaFriend(friends) {
    var largestName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        element = friends[i];
        if (element.length > largestName.length) {
            largestName = element;
        }
    }
    return largestName;
}

