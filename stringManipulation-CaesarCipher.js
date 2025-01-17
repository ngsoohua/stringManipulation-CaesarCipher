const readline = require('readline'); 
const fs = require('fs'); 
const path = require('path'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askForInput = (questionText)=>{
  return new Promise((resolve)=> (rl.question(questionText, (choice)=>{
    resolve(choice);
  })));
}

const processCaesarCipher = (str, shift)=>{
  return str.split('').map((char)=>{
    if(/[a-z/A-Z]/.test(char)){
      const charCode = char.charCodeAt(0);
      const baseForCharA = (char === char.toLowerCase())? 97: 65;
      const actualShift = shift;
      return String.fromCharCode(((charCode-baseForCharA + actualShift)%26 + 26)%26 + baseForCharA);
    }
    return char;
  }).join('');
}

const main = async()=>{
  //99967  
  let str = await askForInput('Enter String ? : ');
  if(str===''){
    str = 'Caesar Cipher';
  }
  const encryptedString = processCaesarCipher(str, 2);
  console.log('Expected Solution : Ecguct Ekrjgt' );
  console.log(encryptedString );
  //Ecguct Ekrjgt

  rl.close();
}
main();
