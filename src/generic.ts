function getData(value: any) {
    return value;
}

console.log(getData("Nusendra").length);
console.log(getData(123).length);

// Generic 
function myData<T>(value: T) {
    return value;
}

console.log(getData("Nusendra").length);
console.log(getData(123).length);

const arrowFunc = <T,>(value: T) => {

}
