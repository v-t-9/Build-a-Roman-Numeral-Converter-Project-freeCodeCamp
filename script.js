const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const h3Result= document.getElementById("h3-result");

const validation = () => {
    const number = document.getElementById("number");
    const num = parseInt(number.value)
    if(number.value.trim().length === 0){
        output.textContent = "Please enter a valid number";
    }
    else if(num < 1){
        output.textContent = "Please enter a number greater than or equal to 1";
    }
    else if(num >= 4000){
        output.textContent = "Please enter a number less than or equal to 3999";
    }
    else{
        romanConverter(number)
        
    }
}

const romanConverter = (number) =>{
        const sym = ["M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV","I"];
        const numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const num = parseInt(number.value);
        console.log("number input", num);
        let base = 0;
        let remainder = num;
        let quotient=0;
        let res=" ";
        let i;
        let indexBase;
        
        while (remainder>0){
            for (i in numbers){
                if (remainder >= numbers[i]){
                    base = numbers[i];
                    console.log("base", base);
                    break;
                }
            }
                quotient = Math.floor(remainder/base);
                console.log("q",quotient);
                remainder = remainder%base;
                console.log("r", remainder);
                indexBase = numbers.indexOf(base);
                console.log("indexBase",indexBase);

                for (let i=0; i<quotient;i++){
                    res += sym[indexBase];
                }
              
        }
        output.textContent = res;
        h3Result.classList.remove("hidden");
        
}


convertBtn.addEventListener("click", validation);