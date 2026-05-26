// conversion from bytes to ascii

// function bytesToAscii(bytesArray) {
//     return new TextDecoder().decode(bytesArray);
// }

// const bytes = new Uint8Array([72 , 101 , 108 , 108 , 111])   // This is "hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString)

// conversion from array to hex
// function arrayToHex(bytesArray) {
//     let hexString = "";
//     for(let i = 0 ; i < bytesArray.length ; i++) {

//  toString(16) --> converts the number to base 16
// padStart(2 , '0') --> every hex string should be 2 digits if not it adds a 0 in front

//         hexString += bytesArray[i].toString(16).padStart(2 , '0');
//     }
//     return hexString;
// }

// const bytes = new Uint8Array([72 , 101 , 108 , 108 , 111]);
// const newStr = arrayToHex(bytes);
// console.log(newStr);

// Conversion from binary to Base64
// const bytesArray = new Uint8Array([72 , 101 , 108 , 108 , 111]);
// const encoded = Buffer.from(bytesArray).toString("base64");
// console.log(encoded);

// Conversion from Binary to Base58
import bs58 from "bs58";

function convertToBase58(bytesArray) {
    return bs58.encode(bytesArray);
}

const bytesArray = new Uint8Array([72 , 101 , 108 , 108 , 111]);
const newStr = convertToBase58(bytesArray);
console.log(newStr);