/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.
The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).
Do not display information that is redundant or that can be inferred by the user:
if the date range ends in less than a year from when it begins, do not display the ending year.
Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.
If the range ends in the same month that it begins, do not display the ending year or month.
Examples:
makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]
makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
*/

function makeFriendlyDates(arr){
    var formatMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var start = arr[0].split("-"),
        end = arr[1].split("-");
    var startYear = start[0],
        startMonth = parseInt(start[1], 10) - 1,
        startDay = parseInt(start[2], 10);
    var endYear = end[0],
        endMonth = parseInt(end[1], 10) - 1,
        endDay = parseInt(end[2], 10);
    var monthDiff = (endYear * 12 + endMonth) - (startYear * 12 + startMonth),
        dayDiff = startDay - endDay;
    function formatDay(day){
        switch(day){
            case 1:
            case 21:
            case 31:
                return day + "st";
            case 2:
            case 22:
                return day + "nd";
            case 3:
            case 23:
                return day + "rd";
            default:
                return day + "th";
        }
    }
    if(start.toString() === end.toString()){
        return [formatMonth[startMonth] + " " + formatDay(startDay) + ", " + startYear];
    }else if(startYear === endYear && startMonth === endMonth){
        return [formatMonth[startMonth] + " " + formatDay(startDay), formatDay(endDay)];
    }else if(startYear !== endYear && monthDiff < 12){
        return [formatMonth[startMonth] + " " + formatDay(startDay), formatMonth[endMonth] + " " + formatDay(endDay)];
    }else if(startYear !== endYear && monthDiff <= 12 && dayDiff > 0){
        return [formatMonth[startMonth] + " " + formatDay(startDay) + ", " + startYear, formatMonth[endMonth] + " " + formatDay(endDay)];
    }else if(monthDiff < 12){
        return [formatMonth[startMonth] + " " + formatDay(startDay) + ", " + startYear, formatMonth[endMonth] + " " + formatDay(endDay)];
    }else{
        return [formatMonth[startMonth] + " " + formatDay(startDay) + ", " + startYear, formatMonth[endMonth] + " " + formatDay(endDay) + ", " + endYear];
    }
}

makeFriendlyDates(["2016-07-01", "2016-07-04"]);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);
