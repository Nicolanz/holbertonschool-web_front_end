
function changeMode(size, weight, transform, background, color){
    // adding styles
    var element = document.getElementsByTagName("body")[0];
    element.style.fontSize = size + "px";
    element.style.fontWeight = weight;
    element.style.textTransform = transform;
    element.style.background = background;
    element.style.color = color;
}

function main(){

    // setting variables
    const spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = () => changeMode(12, "normal", "lowercase", "white", "black");

    // defining body object
    var element = document.getElementsByTagName("body")[0];

    // defining p object
    var p = document.createElement("p");
    var text = document.createTextNode("Welcome Holberton!"); 
    p.appendChild(text);
    
    // defining buttons
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn3 = document.createElement("button");
    btn1.innerHTML = "Spooky";
    btn2.innerHTML = "Dark mode";
    btn3.innerHTML = "Scream mode";
    
    // appending objects
    element.appendChild(p);
    element.appendChild(btn1);
    element.appendChild(btn2);
    element.appendChild(btn3);

    // adding onclick listeners 
    btn1.onclick = spooky;
    btn2.onclick = darkMode;
    btn3.onclick = screamMode;
}
main();
