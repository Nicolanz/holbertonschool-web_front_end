
var start = performance.now()
function countPrimeNumbers(){
    for (let i = 2; i <= 100; i++) {
        if (i == 2){
            console.log(i);
        }
        for (let n = 2; n < i; n++) {
            if (i % n == 0){
                break
            }
            else if(n + 1 < i){}
            else {
                console.log(i);
            }
        }
    }
}
countPrimeNumbers();
var end = performance.now()
console.log("Execution time of printing countPrimeNumbers was "+ (end - start) + " milliseconds.");
