var isHappy = function(n) {
    let res = n;
    let seen = new Set();
    while(res !== 1){
        // Convert integer to string and split to get integer
        res = res.toString().split("").reduce( (total, curr) => {
            console.log(`Total: ${total}; Current: ${curr}`);
            return total + curr * curr;
        }, 0)
        console.log(`Res: ${res}`);
        if(seen.has(res)) return false;
        seen.add(res);
    }
    return true;
};



function digiRoot(num){
    let digits = [];
    while(num > 0){
        digits.push(num % 10);
        num = parseInt(num / 10);
    }
    return digits;
}