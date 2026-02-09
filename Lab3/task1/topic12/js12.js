let func = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}

func("Do you agree",
    () => alert("You agreed"),
    () => alert("You haven't agreed")
);