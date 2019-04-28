#!/usr/bin/env node

// DPU-Touch.js
// (C) 2019 Philip Alexander Hassialis v 0.0.2
// distributed under GPL 3.0

let fs = require("fs");

const [, , ...args] = process.argv;

if (args.length) {
    args.forEach(element => {
        if (fs.existsSync(element)) {
            console.log("\x1b[31m%s\x1b[0m", `File ${element} exists already.`);
        } else {
            try {
                let fd = fs.createWriteStream(element);
                fd.close();
                console.log(`Created file ${element}`);
            } catch (error) {
                console.log(
                    "\x1b[31m%s\x1b[0m",
                    `Unable to create file ${element} - error: ${error}`
                );
            }
        }
    });
} else {
    console.log("DPU-Touch ver. 0.0.2 (C) 2019 Philip Alexander Hassialis");
    console.log("(distributed under GPL 3.0)");
    console.log("A minimal file creator");
    console.log("usage: touch/dpu-touch file1 file2 ... fileX ");
}
