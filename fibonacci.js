const readline=require("readline");
let fib = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function calcs(count,f1,f2){
    
    if(count > 1){
        let f_three = f1 + f2
        count -=1
        nana=calcs(count,f2,f_three)
        return nana;

    
    }else {
        
        return f2;



    };




};





function fibo(){
    
    fib.question("input a number for fibonacci function: ",function(numb){
        let counter=Number(numb)
        let f_one= Number(0)
        let f_two= Number(1)
        
         
        nacci =calcs(counter,f_one,f_two)
        console.log(nacci+" is the number in the "+ numb+" place in the fibonacci sucesion")
        fib.close();
        return nacci
        



    })}
vvv=fibo()

