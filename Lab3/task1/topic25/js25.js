//task1
let date1 = new Date(2012, 1, 20, 3, 12); // months are 0-based
alert(date1);


//task2
function getWeekDay(date) {
    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

let date2 = new Date(2012, 0, 3);
alert(getWeekDay(date2)); // "TU"

//task3
function getLocalDay(date) {
    let day = date.getDay();
    return day === 0 ? 7 : day; // Sunday=7
}

let date3 = new Date(2012, 0, 3);
alert(getLocalDay(date3)); // 2


//task4
function getDateAgo(date, days) {
    let d = new Date(date);
    d.setDate(d.getDate() - days);
    return d.getDate();
}

let date4 = new Date(2015, 0, 2);
alert(getDateAgo(date4, 1));   // 1
alert(getDateAgo(date4, 2));   // 31
alert(getDateAgo(date4, 365)); // 2


//task5
 function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
alert(getLastDayOfMonth(2012, 1)); // 29

//task6
function getSecondsToday() {
    let now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

alert(getSecondsToday());

//task7
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow - now) / 1000);
}
alert(getSecondsToTomorrow());


//task8
function formatDate(date) {
    let diff = new Date() - date; 

    if (diff < 1000) {
        return "right now";
    } else if (diff < 60 * 1000) {
        return Math.floor(diff / 1000) + " sec. ago";
    } else if (diff < 60 * 60 * 1000) {
        return Math.floor(diff / (60 * 1000)) + " min. ago";
    } else {
        let d = date.getDate().toString().padStart(2, '0');
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let y = date.getFullYear().toString().slice(-2);
        let h = date.getHours().toString().padStart(2, '0');
        let min = date.getMinutes().toString().padStart(2, '0');
        return `${d}.${m}.${y} ${h}:${min}`;
    }
}

alert(formatDate(new Date(new Date() - 1)));               // "right now"
alert(formatDate(new Date(new Date() - 30 * 1000)));      // "30 sec. ago"
alert(formatDate(new Date(new Date() - 5 * 60 * 1000)));  // "5 min. ago"
alert(formatDate(new Date(new Date() - 86400 * 1000)));   // "DD.MM.YY HH:mm" for yesterday
