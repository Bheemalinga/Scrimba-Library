let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3points(){
    myPoints += 3;
}

function remove1point(){
    myPoints -= 1;
}

for(let i =1; i<=3; i++)
add3points()

for(let i=1; i<=2; i++)
remove1point()


// Call the functions to that the line below logs out 10
console.log(myPoints)
