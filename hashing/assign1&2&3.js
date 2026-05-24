// ASSIGNMENT - 1
// Give me an input string that outputs a SHA-256 hash that starts with "00000"
import crypto from "crypto"

function findHashWithPrefix(prefix) {
    let input = 0;
    while(true) {
        let inputStr = input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if(hash.startsWith(prefix)) {
            return { input: inputStr , hash: hash };
        }
        input++;
    }
}

// const res = findHashWithPrefix("00000");
// console.log(res.input);
// console.log(res.hash);

// ASSIGNMENT - 2
// What if I ask you that the input string should start with 100xdevs ? How would the code change?

function findHashWithPrefix1(prefix) {
    let input = 0;
    while(true) {
        let inputStr = "100xdevs" + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if(hash.startsWith(prefix)) {
            return { input1: inputStr , hash: hash };
        }
        input++;
    }
}

// const res = findHashWithPrefix1("00000");
// console.log(res.input1);
// console.log(res.hash);

// ASSIGNMENT - 3
// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

function findHashWithPrefix2(prefix) {
    let input = 0;
    while(true) {
        let inputStr =`harkirat => Raman | Rs 100
        Ram => Ankit | Rs 10
        ` + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if(hash.startsWith(prefix)) {
            return { input2: inputStr , hash: hash };
        }
        input++;
    }
}

const res1 = findHashWithPrefix2("00000");
console.log(res1.input2);
console.log(res1.hash);