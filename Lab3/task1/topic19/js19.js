function ucFirst(stringe)
{
    return stringe[0].toLowerCase();
}

alert(ucFirst("john"));
//task2
function checkSpam(stringe)
{
    
    return (stringe.toLowerCase().includes("xxx") || stringe.toLowerCase().includes('viagra')) ? true : false;
}


checkSpam('buy ViAgRA now')
checkSpam('free xxxxx') 
checkSpam("innocent rabbit")

//task3
function truncate(str, len) {
    if (str.length <= len) {
        return str;
    }
    return str.slice(0, len - 3) + "...";
}

truncate("What I'd like to tell on this topic is:", 20)

truncate("Hi everyone!", 20)
//task4
function extractCurrencyValue(stringe)
{
    return +stringe.slice(1);
}


alert( extractCurrencyValue('$120') === 120 );