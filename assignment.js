//feetToMile
function feetToMile(feet){
    if(feet<0){
        console.log("Value can't be negative");
        return;
    }
    return feet/5280;
}