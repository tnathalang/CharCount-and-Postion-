function countLetters(str) {
  var jointstr = str.toLowerCase().split(" ").join("").split("");
    var alphabets = {} 
    for ( letter of jointstr ) {
        if (alphabets[letter]){
           alphabets[letter] += 1  
           //current letter exists in the alphabet object
        }
        else{
            alphabets[letter] = 1
            //current letter doesnt exist in the alphabet object
        }

    }

return alphabets

}


console.log(countLetters("whatever string i want"))

console.log(countLetters("Wiggle wagon worstechire"))

