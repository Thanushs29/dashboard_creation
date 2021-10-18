
//dashboard.html

let sidebar = document.querySelector(".sidebar");
         let sidebarBtn = document.querySelector(".sidebarBtn");
         sidebarBtn.onclick = function() {
           sidebar.classList.toggle("active");
           if(sidebar.classList.contains("active")){
           sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
         }else
           sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
         }
//calculator & dail-in
         function dis(val)
         {
             document.getElementById("result").value+=val
         }
         function solve()
         {
             let x = document.getElementById("result").value
             let y = eval(x)
             document.getElementById("result").value = y
         }
         
         function jstest()
         {
             alert("Just for fun..");
         }

         function clr()
            {
                document.getElementById("result").value = ""
            }
//date & time
//var dt = new Date();
//document.getElementById('date-time').innerHTML=dt;

var today = new Date();  
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate());  
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  
var dateTime = "Date is - "+date+" ; "+"Time is -"+time;

document.getElementById('date-time').innerHTML=dateTime;

//login name
/*
var name1 =document.getElementById("name").value;
document.write(document.getElementById("name2").value);
if(!name1){
    window.location("dashboard_login1.html");
}
else{
    window.location("dashboard.html");
}
document.getElementById('name1').innerHTML=name ;
console.log(name);



function test(){
    var x= document.getElementById("name").value
    document.getElementById("here").innerHTML=x;
    alert(x);
}*/


window.onload = function () {
    var url = decodeURIComponent(document.location.href),
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    document.getElementById('here').innerHTML = data.name;
    document.getElementById('here1').innerHTML= data.name;
    }