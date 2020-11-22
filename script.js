//alert("test")
//let title = prompt("you name?", "test")
//alert(`title - ${title}`)
//let test = prompt("year old me", "14")
//if(test == 14){//
    //alert("all is ok")
//}else if(test == 15){
//    alert("15 - 1")
//}
//else {
//    alert("no!!!!")
//}
/*let js = prompt("Как называется JavaScript", "")
if(js == "ECMAScript"){
alert("TRUE")
}else if(js == "ES"){
alert("TRUE")
}
else{
alert("FALSE")
}*/

/*for(let i = 3; i > 0; i--){
    alert(i)
}*/
/*let correctPass = '123'
pass = prompt('Введите пароль','')
if(String(pass) == correctPass){
alert("all is ok!")
}else if(String(pass) != correctPass){
let i = 1

    while(i < 3){
        i++
        pass = prompt('Введите пароль','')
        if(String(pass) == correctPass){
            alert("all is ok")
            break;
        }
    }
}*/

/*let days = ['понедельник', 'вторник', 'среда', 'четыерг', 'пятница', 'суббота', 'воскресенье']
let current_day = prompt("ввелите число от 1 до 6", "")


for(let i = current_day; i <= current_day;i++){
    
    console.log(days[i-1])
}
if(true){
    test = "test"
}
console.log(test)*/

/*let a = 2 + 2
switch ( a ) {
case 3:
    alert("Маловато")
    break;
case 4:
    alert("в точку")
    break;
case 5:
    alert("многовато")
    break;
default:
    alert("нет таких значений")
    
}*/
/*const number = +prompt('Введите число от 1 до 4','')
switch(number){
    case 1:
        alert("вы ввели число 1")
        break;
    case 2:
        alert("вы ввели число 2")
        break;*/
    /*case 3:
        alert("вы ввели число 3")
        break;
    case 4:
        alert("вы ввели число 4")
        break;*/
        /*case 3:
        case 4:
            alert("3||4")
            break; 
    default:
        alert("я без понятия что случилось")
}*/








/*
function min(a, b){
return (a < b ? a : b)

}
let result = min(4,6)
alert(result)*/
/*let user = {
    name:"John",
    surname:"Smitch"
}
console.log(user)
user.name = "Pete"
console.log(user)          
delete user.name
console.log(user)*/
let button = document.getElementById("button")
button.addEventListener('click',(e)=>{
    console.log(width.value)

})