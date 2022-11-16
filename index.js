const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", 
"7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")
function click() {
    generateRandomPassword()
    let getRandomPassword1 = generateRandomPassword()
    let getRandomPassword2 = generateRandomPassword()
    password1.textContent = getRandomPassword1
    password2.textContent = getRandomPassword2
}

document.getElementById("password-btn").onclick = () => click()

function random() {
       let randomChar = Math.floor( Math.random() * characters.length)
       return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += random()
    }
    return randomPassword
}



