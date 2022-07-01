function checkIfArePalindrome(string){
    if(typeof(string) !== 'string') return 'string incorreta.'

    let palindromeString = string.split('').reverse().join('');  // Separa a String em Array, Inverte e, por fim, Junta !!
    
    if(palindromeString === string){ // Também Podia fazer com Operador Ternário !
        return `${string} é palindroma !`;
    }
    else{
        return `${string} não é palindroma!`;
    }
}

console.log(checkIfArePalindrome('ana'));