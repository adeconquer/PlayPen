function formatNumber(number) {
    let trimmedNumber = number.replace(/\s/g, "");
    let formattedNumber;
    const regex = /^07\d{9}$/;

    function regexNumber(trimmedNumber) {
        if (regex.test(trimmedNumber)) {
            return trimmedNumber
        }
    }

    if (trimmedNumber.slice(0, 3) === "+44") {

        const appropriateNumber = "0" + trimmedNumber.slice(3, trimmedNumber.length);
        formattedNumber = regexNumber(appropriateNumber)
    }

    if (trimmedNumber.slice(0, 2) === "44") {

        const appropriateNumber = "0" + trimmedNumber.slice(2, trimmedNumber.length);
        formattedNumber = regexNumber(appropriateNumber)
    }

    if (trimmedNumber.slice(0, 2) === "07") {
        // const appropriateNumber = "0" + trimmedNumber.slice(2, trimmedNumber.length);
        formattedNumber = regexNumber(trimmedNumber)
    }

    return formattedNumber;
}


// const number = "+447123456789";
// const number = "447123456789";
const number = "07123 456789";
// const number = "07 123 456 789";

console.log(formatNumber(number));