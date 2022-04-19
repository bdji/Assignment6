function reverseString(str){
    //turn the str into an array by using the split method
    let splitString = str.split("");
    //reverse the array using the reverse method
    let reverseArray = splitString.reverse();
    //use the join method to join all the element
    let joinArray = reverseArray.join("");

    return joinArray;
}
reverseString("Welcome to this Javascript");