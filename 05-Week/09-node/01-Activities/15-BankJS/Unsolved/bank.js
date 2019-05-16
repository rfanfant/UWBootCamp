var fs = require("fs");

// capture the bank action the user wants to perform
var action = process.argv[2];

if(action === 'total'){
    total()
}else if(action === 'withdraw'){
    withdraw();
}else if(action === 'deposit'){
    deposit();
}else if(action === 'lotto'){
    lotto();
}else{
    console.log("Enter a valid action");
}


function total(){
    // read from bank.txt and add up the numbers
    fs.readFile("bank.txt", "utf8", function(err, data){
        if(err){
            return console.log(err)
        }
        // console.log(data);
        var dataArr = data.split(", ");
        // console.log(dataArr);
        var sum = 0;
        for (let i = 0; i < dataArr.length; i++) {
            // add up the numbers
            sum += parseFloat(dataArr[i]);
        }
        console.log("Your total balance is " + sum.toFixed(2));

    })

}

function withdraw(){
    // capture the amount the user wants to withdraw and store it in a variable
    var amount = process.argv[3]
    // console.log(amount)

    fs.appendFile("bank.txt", ", -" + amount , function(err){
        if(err){
            return console.log(err)
        }
        console.log("You just withdrew $" + amount)
    })


}

function deposit(){
    // capture the amount the user wants to deposit and store it in a variable
    var amount = process.argv[3]
    // console.log(amount)

    fs.appendFile("bank.txt", ", " + amount , function(err){
        if(err){
            return console.log(err)
        }
        console.log("You just deposited $" + amount)
    })
}

function lotto(){
    // write to our bank.txt file and add -.25 for the cost of the lotto ticket

    fs.appendFile("bank.txt", ", -.25" , function(err){
        if(err){
            return console.log(err)
        }

        var winnerNum = Math.floor(Math.random() * 10 + 1) 

        if(winnerNum === 1){
            lottoWin();
        }else{
            console.log("Sorry, but you didn't win.")
        }
    })
}

function lottoWin(){
    fs.appendFile("bank.txt", ", 50" , function(err){
        if(err){
            return console.log(err)
        }

        console.log("You won! $50 was deposited into your bank.")

    })
}
