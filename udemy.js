function beer(){
    
    let beerLeft = 99;


    while(beerLeft > 1){
        console.log(beerLeft + " bottles of beer on the wall, " + beerLeft + "bottles of beer.");
        beerLeft--;
        console.log("Take one down and pass it around, " + beerLeft + " bottles of beer on the wall.")
        
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    
}
beer();
