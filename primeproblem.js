let num = 17;
let count=0;

for(i=1;i<=num;i++){

    if(num%i==0){
        count++;
    }
}
if(count==1){
console.log("prime number");
}
else{
    console.log("Not a prime number")

}