// Matrix multiplication in JavaScript

let arr1=[[1,2],[3,4],[5,1]];
let arr2=[[2,1,2], [1,2,1]];
let row1=arr1.length;
let col1=arr1[0].length;
let row2=arr2.length;
let col2=arr2[0].length;
let mul;
let sum;
let result=[];
if(col1===row2){
    for(let i=0;i<row1;i++){
        result[i]=[];
        for(let j=0;j<col2;j++){
            sum=0;
            for(let k=0;k<row2;k++){
                mul=arr1[i][k]*arr2[k][j];
                sum=sum+mul;
                result[i][j]=sum;
            }
        }
    }
    for(let i=0;i<row1;i++){
        for(let j=0;j<col2;j++){
            console.log(result[i][j]);
        }
    }
}
else{
    console.log("Matrices are not compatible to do Multiplication");
}