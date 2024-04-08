//part one recursive function
// const incrementAndCall = (counter) => {
//   const nextStep = (counter) => {
//     counter++;
//     console.log('Counter:', counter);
//     return () => nextStep(counter);
//   };

//   return nextStep(counter);
// };

// const trampoline = (f) => {
//   let result = f();
//   while (typeof result === "function") {
//     result = result();
//   }
//   return result;
// };

// trampoline(() => incrementAndCall(0));

// try {
//   incrementAndCall();
// } catch (error) {
//   console.error('Error:', error);
//   console.log('Counter value at the time of error:', counter);
// }


// part two the factorial function
// function factorialOfNumbers(num){
//   if( num === 0){
//     return 1;
//   }
//     else if (num > 0){
//        let facto = num * factorialOfNumbers(num-1);
//        return facto;
//     }
// }


// console.log(factorialOfNumbers(100));


// const facto = (n, a = 1) => {
//   if (n === 0) return a;
//   return () => facto(n - 1, n * a);
// }
// console.log( facto(5));
// const trampoline = (f, ...args) => {
//   let result = f(...args);
//   while (typeof result === "function") {
//     result = result();
//   }
//   return result;
// }
// console.log(trampoline)



// part one recursive function
const incrementAndCall = (counter) => {
  const nextStep = (counter) => {
    counter++;
    console.log('Counter:', counter);
    return () => nextStep(counter);
  };

  return nextStep(counter);
};
//try catch part one
try {
  incrementAndCall();
} catch (error) {
  console.error('Error:', error);
  console.log('Counter value at the time of error:', counter);
}
// // part two  trampolin
const trampoline = (f) => {
  let result = f();
  while (typeof result === "function") {
    result = result();
  }
  return result;
};

trampoline(() => incrementAndCall(0));

// part 3 create simple html text
document.addEventListener("DOMContentLoaded", function() {
  const primeListElement = document.getElementById("primeList");

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  function addPrimeNumbers(n) {
    function addNextPrime(i) {
      if (i <= n) {
        if (isPrime(i)) {
          primeListElement.innerHTML += `<p>${i}</p>`;
        }
        setTimeout(() => addNextPrime(i + 1), 0); 
      } else {
        alert("Calculation finished.");
      }
    }
    addNextPrime(2);
  }

  addPrimeNumbers(10000); 
});

