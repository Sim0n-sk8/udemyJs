function isLeap(year) {
    
/**************Don't change the code above****************/    
    
   //if divide by 4 === true then yes
    if( year % 4 === 0 && year % 100 !== 0 && year % 400 === 0){
        alert(`${year} is a leap year`);
    }else{
        alert(`${year} is not a leap year`);
    }
   //if divide by 4 === true and divide by 100 === true then no
   //if divide by 4 === true and divide by 100 === true and divide by 400 === true then yes


    

/**************Don't change the code below****************/    

}