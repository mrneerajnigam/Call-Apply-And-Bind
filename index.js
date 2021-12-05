var cal = {
    'sum':function (){
       let add = this.num1 + this.num2;
       console.log(add);
    },
    'mul':function(){
        let pro = this.num1 * this.num2;
        console.log(pro); 
    },
    'diff':function(){
        let sub = this.num1 - this.num2;
        console.log(sub);
    },
    'div':function(){
        let divide = this.num1 / this.num2;
        console.log(divide);
    }

}
let fn = function(a,b){

   console.log(a*b);
}
let obj ={
    'num1':20,
    'num2':5,
};
let obj2 ={
    'num1':12,
    'num2':6,
};
var obj3={
    'num1':15,
    'num2':5,
};
//call function
cal.sum.call(obj);
cal.diff.call(obj);
cal.mul.call(obj);
cal.div.call(obj);
// apply function
cal.sum.apply(obj2);
cal.diff.apply(obj2);
cal.mul.apply(obj2);
cal.div.apply(obj2);
//Bind function
let new_fn = cal.div.bind(obj3);
new_fn();
// for passing parameter in bind function
let new_par = fn.bind()
new_par(10,5)