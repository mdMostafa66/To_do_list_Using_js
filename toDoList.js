

// ******* CREATE A TO DO LIST USING JAVASCRIPT ******

function addlist(){
    
    var input = document.getElementById('input');
    var button = document.getElementById('btn');
    var list = document.createElement('li');
    var text = document.createTextNode(input.value);
    var ol = document.getElementById('oList');
    list.appendChild(text);

    if (input.value == '') {
        alert("Please Add a Name of List ");
    } else {
        ol.appendChild(list);
    }
    input.value = "";
};

let del = document.querySelector("ol");
del.addEventListener("click", function(line){
    if (line.target.tagName === "LI") {
        line.target.classList.toggle("delete");
    }
});