var bands = require("./bands.js");

// console.log(bands)

if(!process.argv[2]){
    for (const key in bands) {
        console.log(key + ": " + bands[key])
    }
}else{
    console.log(process.argv[2] + ": " + bands[process.argv[2]])
}


