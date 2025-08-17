var output = [];
var num = 1;
function fizzbuzz(){
    
    fizz = 3;
    buzz = 5;

    max = 100;
    
    
    
    // works lol
    
    if(num % fizz === 0 && num % buzz === 0){
        output.push("fizzbuzz");
    } else if(num % buzz === 0){
        output.push("buzz")
    }else if(num % fizz === 0){
        output.push("fizz");
    }else{
        output.push(num);
        
    }
        num++;
    
    

    console.log(output);
}


fizzbuzz();