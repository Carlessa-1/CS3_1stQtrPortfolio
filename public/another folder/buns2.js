process.stdin.on('data', input => {

  const NUM= Number(input.toString().trim());  
 
    if (NUM % 2 == 1) { 
            console.log("Weird")
    } 

    else if (2 <= NUM || NUM <= 5) { 
            console.log("Not Weird")
    }

    else if (6 <= NUM || NUM <= 20) { 
            console.log("Weird")
    }

    else if (NUM > 20) {
            console.log("Not Weird")
    }
  process.exit(); 

});