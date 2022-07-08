const string = 'arroz';
console.log(string,'\n');
    
    
const transformStringArray = string.split(''); // o .split('') SEPARA Todas as Letras da String e transforma em Array !
console.log(transformStringArray);
console.log(typeof(transformStringArray), '\n');
    
    const reverseStringArray = transformStringArray.reverse(); // REVERTE esse ARRAY de String
console.log(reverseStringArray, '\n');
    
const joinStringArray = reverseStringArray.join(''); // Transforma o ARRAY de String em Apenas STRING !!!
console.log(joinStringArray);
console.log(typeof(joinStringArray));