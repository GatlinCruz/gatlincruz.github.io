function changeColor(element) {
    let a = document.getElementById(element);
    if(a.style.color == "green") {
        a.style.color = 'blue';
    }
    else {
        a.style.color = 'green';
    }
}