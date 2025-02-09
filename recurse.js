function reverseString(text){
    if(text === ""){
        return ""
    } else{
       return reverseString(text.substr(1), console.log(`${text}: ${text.length}`)) + text[0]
    }
}

console.log(reverseString(""))

/*
reverseString("code"),  text = "code"

   return  reverseString("ode") + "c", text = "ode"
     return   reverseString("de") + "o", text = "de"
      return     reverseString("e") + "d", text = "de"
        return      reverseString("") + "e", text = "e"

                reverseString(""), returns ""

reverseString("") + "e" = "e"
reverseString("e") + "d" = "e" + "d" return "ed"
reverseString("de") + "o" = "ed" + "o" return "edo"
reverseString("ode") + "c" = "edo" + "c" return "edoc"
*/