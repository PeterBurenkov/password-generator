const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const password1El = document.getElementById("password1-el")
const password2El = document.getElementById("password2-el")
const generateEl = document.getElementById("generate-el")

function getRandomPassword(){
    const lenght = 15
    let password = ''
    for (let i=0; i<lenght; i++){
        const randomN = Math.floor(Math.random()*characters.length)
        password += characters[randomN]
    }
    return password
}

function copyToClipboad(element) {
    navigator.clipboard
      .writeText(element.innerText)
      .then(() => {
        console.log("successfully copied");
      })
      .catch(() => {
        console.log("something went wrong");
      });
}

generateEl.addEventListener('click', function(){
    password1El.textContent = getRandomPassword()
    password2El.textContent = getRandomPassword()
    
})

password1El.addEventListener('click', function(){
    copyToClipboad(password1El)
})

password2El.addEventListener('click', function(){
    copyToClipboad(password2El)
})


