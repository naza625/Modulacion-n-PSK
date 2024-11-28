let amountOfBits = 1;
const select = document.getElementById('level');
const input = document.getElementById('message');
const alerta = document.getElementById("alert");
const message = document.getElementById("BinaryText");
// Configuraciones basadas en la selección
const options = {
    2: { maxlength: 8, placeholder: 'Hasta 8 caracteres' },
    4: { maxlength: 8, placeholder: 'Hasta 8 caracteres' },
    8: { maxlength: 8, placeholder: 'Hasta 8 caracteres' },
    16: { maxlength: 8, placeholder: 'Hasta 8 caracteres' }
};

const updateChars = () => {
    // Obtener la opción seleccionada
    const selectedOption = select.value;

    amountOfBits = Math.log2(parseInt(selectedOption));
    alerta.innerHTML = `→La cadena binaria se divide en conjuntos de ${amountOfBits} bits.`//alert(`La longitud de la cadena ahora no es divisible por ${amountOfBits}.`);

    // Actualizar atributos dinámicamente
    input.maxLength = options[selectedOption].maxlength;
    input.placeholder = options[selectedOption].placeholder;

    // Limpiar el valor actual si excede el nuevo límite
    if (input.value.length > input.maxLength) {
        input.value = input.value.substring(0, input.maxLength);
    }
    getInputText();
}

const numberOfParity = (value) => {
    let count = 0;
    for (let i = 0; i < value.length; i++) {
      if(value.charAt(i) === '1'){
        count++;
      }
    }
    return count%2;
}

const getInputText = () =>{
    inputText = input.value;
    document.getElementById("ASCIIText").innerHTML = '';
    message.innerHTML = '';

    document.getElementById("ASCIIText").innerHTML = ''+inputText.split('')
                                                                    .map(char => char.charCodeAt(0))
                                                                    .join(' ');
    message.innerHTML = ''+inputText.split('')
                                                                    .map(char => {
                                                                        const ascii = char.charCodeAt(0)
                                                                        return ascii.toString(2).padStart(7, '0')+numberOfParity(ascii.toString(2).padStart(7, '0'));})
                                                                    .join('');
}

function clearMod(){
    document.getElementById("moduladas").innerHTML = '';
    document.getElementById("constelacion").innerHTML = '';
    (message.getHTML() !== "") ? 0 : alert("Por favor ingrese un mensaje a modular"); 
}

updateChars();