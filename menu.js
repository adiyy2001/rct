var box_2 = document.getElementById("m_l_2");
var button_2 = document.querySelectorAll("ol>li")[1];
var expanded_2 = true;

var height = box_2.offsetHeight;
box_2.style.height = 0;

button_2.addEventListener("click", function(){
    if (expanded_2 === false) {
            document.getElementsByClassName('btn-2')[0].style.transform = 'rotate(0deg)';
            // var el = document.getElementsByClassName('menu_list_2')[0];
            // el.style.overflow = "visible";
            box_2.style.height = 0;
            expanded_2 = true;
        } else {
            box_2.style.height = height+ 50 + "px";
            expanded_2 = false;
            document.getElementsByClassName('btn-2')[0].style.transform = 'rotate(90deg)';
        }
});


function show(param_div_id) {
    document.getElementById('main_place').innerHTML = document.getElementById(param_div_id).innerHTML;
  }

var box = document.getElementsByClassName("menu_list_1")[0];
var button = document.querySelectorAll("ol>li")[0];
var expanded = true;

var height = box.offsetHeight;
box.style.height = 0;

button.addEventListener("click", function(){
        if (expanded === false) {
            document.getElementsByClassName('btn-1')[0].style.transform = 'rotate(0deg)';
            box.style.height = 0;
            expanded = true;
        } else {
            box.style.height = height+"px";
            expanded = false;
            document.getElementsByClassName('btn-1')[0].style.transform = 'rotate(90deg)';
        }
});


