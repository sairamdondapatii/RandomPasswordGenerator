let passwordbox=document.getElementById('password');
const length=8;
const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const specialchar='@#$%^&*()_'
const allchrs=uppercase+lowercase+numbers+specialchar;

function createpassword(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=specialchar[Math.floor(Math.random()*specialchar.length)];

    while(length>password.length){
        password+=allchrs[Math.floor(Math.random()*allchrs.length)];
    }

    passwordbox.value=password;
}


function copypassword(){
    passwordbox.select()
    navigator.clipboard.writeText(passwordbox.value);
}