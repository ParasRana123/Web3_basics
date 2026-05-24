// Basic code to hash an input string using sha256 hash algo

import crypto from "crypto"
const input = "paras";
const hash = crypto.createHash("sha256").update(input).digest("hex");
console.log("The hash is: " , hash);