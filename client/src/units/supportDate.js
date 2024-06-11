export function getToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return today = yyyy + '-' + mm + '-' + dd;
}

export function getDayOfMonth(date) {
    var dayCheck = new Date(date);
    dayCheck.setDate(0);
    return dayCheck.getDate();
};

export function getTodayFullFormat() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = String(today.getHours()).padStart(2, '0');
    var minutes = String(today.getMinutes()).padStart(2, '0');
    return today = yyyy + '-' + mm + '-' + dd + ':@' + hour + ':' + minutes;
}

export function getTodayFullFormat_DDMMYYY() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = String(today.getHours()).padStart(2, '0');
    var minutes = String(today.getMinutes()).padStart(2, '0');
    return today = yyyy + '-' + mm + '-' + dd + ':@' + hour + ':' + minutes;
}

export function getTodayMonth() {
    var today = new Date();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return today = yyyy + '-' + mm;
}

export function changeDateToString(value) {
    const date = new Date(value);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    return (yyyy + '-' + mm + '-' + dd);
}

export function changeDataToYYYY_MMMM_DD(date) {
    var changeDate = new Date(date)
    var dd = String(changeDate.getDate()).padStart(2, '0');
    var mm = String(changeDate.getMonth() + 1);
    var yyyy = changeDate.getFullYear();
    return (yyyy + "-" + coverMonthToString(Number(mm)) + "-" + dd);
}

export function changeDataFullFormat(date) {
    if (date) {
        var today = new Date(date);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var hour = String(today.getHours()).padStart(2, '0');
        var minutes = String(today.getMinutes()).padStart(2, '0');
        return today = yyyy + '-' + mm + '-' + dd + ':@' + hour + ':' + minutes;
    }
}

export function changeDataFullFormat_DDMMYYYY(date) {
    if (date) {
        var today = new Date(date);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var hour = String(today.getHours()).padStart(2, '0');
        var minutes = String(today.getMinutes()).padStart(2, '0');
        return today = dd + '-' + mm + '-' + yyyy + ' @' + hour + ':' + minutes;
    }
}

export function changeDataToYYYY_MMMM(date) {
    var changeDate = new Date(date)
    // var dd = String(changeDate.getDate()).padStart(2, '0');
    var mm = String(changeDate.getMonth() + 1);
    var yyyy = changeDate.getFullYear();
    return (yyyy + "-" + coverMonthToString(Number(mm)));
}

export function changeDataToDDMMYYYY(date) {
    var changeDate = date ? new Date(date) : new Date();
    var dd = String(changeDate.getDate()).padStart(2, '0');
    var mm = String(changeDate.getMonth() + 1).padStart(2, '0');
    var yyyy = changeDate.getFullYear();
    return (dd + "-" + mm + "-" + yyyy);
}

export function changeDataToDDMMYYYY2(date) {
    var changeDate = date ? new Date(date) : new Date();
    var dd = String(changeDate.getDate()).padStart(2, '0');
    var mm = String(changeDate.getMonth() + 1).padStart(2, '0');
    var yyyy = changeDate.getFullYear();
    return (dd + "/" + mm + "/" + yyyy);
}


export function changeDataToYYYY_MM(date) {
    var changeDate = new Date(date)
    var mm = String(changeDate.getMonth() + 1).padStart(2, '0');
    var yyyy = changeDate.getFullYear();
    return (yyyy + "-" + mm);
}

export function changeOldOneMonthYYYY_MM(date) {
    var dateOld = new Date(date)
    dateOld.setMonth(dateOld.getMonth() - 1)
    var mm = String((dateOld.getMonth()) + 1);
    var yyyy = dateOld.getFullYear();
    return (yyyy + "-" + mm);
}

export function extendOneMonthYYYY_MM(date) {
    var nextMonth = new Date(date)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    var mm = String((nextMonth.getMonth()) + 1).padStart(2, '0');
    var yyyy = nextMonth.getFullYear();
    return (yyyy + "-" + mm);
}

export function decreaseOneMonthYYYY_MM(date) {
    var decreaseMonth = new Date(date)
    decreaseMonth.setMonth(decreaseMonth.getMonth() + 1)
    var mm = String((decreaseMonth.getMonth()) - 1).padStart(2, '0');
    var yyyy = decreaseMonth.getFullYear();
    return (yyyy + "-" + mm);
}

export function startDayNextOneMonthYYYY_MM_01(date) {
    var nextMonth = new Date(date)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    var mm = String((nextMonth.getMonth()) + 1).padStart(2, '0');
    var yyyy = nextMonth.getFullYear();
    return (yyyy + "-" + mm + "-01");
}

export function startDayThisMonthYYYY_MM_01(date) {
    var nextMonth = new Date(date)
    var mm = String((nextMonth.getMonth()) + 1).padStart(2, '0');
    var yyyy = nextMonth.getFullYear();
    return (yyyy + "-" + mm + "-01");
}

export function increaseTodayWithNumber(value, type, number) {
    var dd;
    var mm;
    var yyyy;
    const dateChange = new Date(value);
    // eslint-disable-next-line default-case
    switch (type) {
        case "day": {
            dateChange.setDate(dateChange.getDate() + Number(number));
            dd = dateChange.getDate();
            mm = dateChange.getMonth() + 1
            yyyy = dateChange.getFullYear();
            break;
        }
        case "month": {
            dateChange.setMonth(dateChange.getMonth() + number);
            dd = dateChange.getDate();
            mm = dateChange.getMonth() + 1
            yyyy = dateChange.getFullYear();
            break;
        }
        case "end_month": {
            dateChange.setMonth(dateChange.getMonth() + number);
            mm = dateChange.getMonth() + 1
            yyyy = dateChange.getFullYear();
            const lastDayOfTheMonth = new Date(yyyy, mm, 0).getDate();
            dd = lastDayOfTheMonth;
            break;
        }
    }
    return (yyyy + '-' + String(mm).padStart(2, '0') + '-' + String(dd).padStart(2, '0'));
}

export function coverMonthToString(value) {
    switch (value) {
        case 1: return "Jan";
        case 2: return "Feb";
        case 3: return "Mar";
        case 4: return "Apr";
        case 5: return "May";
        case 6: return "Jun";
        case 7: return "Jul";
        case 8: return "Aug";
        case 9: return "Sep";
        case 10: return "Oct";
        case 11: return "Nov";
        case 12: return "Dec";
        default: return "";
    }
}

export function getNights(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);

    startDate.setHours(12, 0, 0);
    endDate.setHours(12, 0, 0);

    // calculate the difference in milliseconds between the two dates
    const diffMs = endDate.getTime() - startDate.getTime();
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffDays = Math.round(diffMs / msPerDay);
    return diffDays;
}

export function switchDayToText(day) {
    // eslint-disable-next-line default-case
    switch (day) {
        case 0: return "Sun";
        case 1: return "Mon";
        case 2: return "Tue";
        case 3: return "Wed";
        case 4: return "Thr";
        case 5: return "Fri";
        case 6: return "Sat";
        default: return "";
    }
}

export function thisDayIntoMonth(day, month) {
    var dateCheck = new Date(day);
    var monthCheck = new Date(month);
    return monthCheck > dateCheck
}

export function checkMonthWithOther2Day(day1, day2) {
    if (!day1) return 1;
    if (!day2) return 2;
    const month1 = new Date(day1.slice(0, 7));
    const month2 = new Date(day2.slice(0, 7));
    if (month1 > month2) return 1;
    else if (month1 < month2) return 2;
    else return 0
}

export function checkDayWithOther2Day(day1, day2) {
    const dayCheck1 = new Date(day1);
    const dayCheck2 = new Date(day2);
    if (dayCheck1 > dayCheck2) return 1;
    else if (dayCheck1 < dayCheck2) return 2;
    else return 0
}

export function coverNumberToString(value) {
    return String(value).padStart(2, '0')
}

export function renderMonthList() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var result = null;

    result = months.map((month, index) => {
        let month_number = (index + 1);
        let month1 = (month_number <= 9) ? '0' + month_number : month_number;
        return (<option value={month1} > {month} </option>)
    })
    return result;
}

export function renderYearCurrentAndOld() {
    let year_satart = 2020;
    let year_end = (new Date()).getFullYear(); // current year
    // let year_selected = 2021;
    var year_list = []
    var result = null;

    // make year -> list
    for (let i = year_end; i >= year_satart; i--) {
        year_list.push(i)
    }

    result = year_list.map((year, index) => {
        return (<option value={year} > {year} </option>)
    })
    return result;
}

function parseDate(input) {
    if (input === "") return 0;
    else {
        var parts = input.match(/(\d+)/g);
        // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
        return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
    }
}

export function calculateNightsAccSum(checkin, checkout, sum_credit) {
    const checkDayInWithOut = checkDayWithOther2Day(checkin, checkout)
    const inWithSum = checkMonthWithOther2Day(checkin, sum_credit);
    const outWithSum = checkMonthWithOther2Day(checkout, sum_credit);

    // case 1: check in > check out =>    // const inWithOut = checkMonthWithOther2Day(checkin, checkout); nights=""
    if (checkDayInWithOut === 1) {
        return "";
    } else {
        if (inWithSum === 1) {
            return 0;
        } else if (inWithSum === 0) {
            if (outWithSum === 0) return (parseDate(checkout).getTime() - parseDate(checkin).getTime()) / (1000 * 3600 * 24);
            else if (outWithSum === 1) {
                const startDayOnNextMonth = startDayNextOneMonthYYYY_MM_01(checkin);
                return (parseDate(startDayOnNextMonth).getTime() - parseDate(checkin).getTime()) / (1000 * 3600 * 24);
            }
        } else {
            if (outWithSum === 2) {
                return 0;
            }
            else if (outWithSum === 0) {
                const startDayThisMonth = startDayThisMonthYYYY_MM_01(checkout);
                return (parseDate(checkout).getTime() - parseDate(startDayThisMonth).getTime()) / (1000 * 3600 * 24);
            }
            else {

                const startDayThisMonth = startDayThisMonthYYYY_MM_01(sum_credit);
                const startDayOnNextMonth = startDayNextOneMonthYYYY_MM_01(sum_credit);
                return (parseDate(startDayOnNextMonth).getTime() - parseDate(startDayThisMonth).getTime()) / (1000 * 3600 * 24);
            }
        }
    }
}