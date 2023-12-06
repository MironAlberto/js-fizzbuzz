const numberContainer = document.querySelector(".number-container");

for (let i = 1; i <= 100; i++){

    const newElement = document.createElement("div");
    
    let numeriFinoACento = i;

    if ((i % 3 == 0) && (i % 5 == 0)){
        numeriFinoACento = "FizzBuzz";
        newElement.classList.add("fizzbuzz-container");

        console.log("numeriFinoACento", numeriFinoACento, typeof numeriFinoACento);
    }

    else if (i % 3 == 0){
        numeriFinoACento = "Fizz";
        newElement.classList.add("fizz-container");
    }

    else if (i % 5 == 0){
        numeriFinoACento = "Buzz";
        newElement.classList.add("buzz-container");
    }

    numberContainer.append(newElement);
    
    newElement.innerHTML = numeriFinoACento;
}





