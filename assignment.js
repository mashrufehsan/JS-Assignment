//feetToMile
function feetToMile(feet){
    if(feet<0){
        console.log("Value can't be negative");
        return;
    }
    return feet/5280;
}

//woodCalculator
function woodCalculator(chair,table,bed){
    return chair + (table*3) + (bed*5);
}