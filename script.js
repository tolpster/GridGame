var twoDarray = [];
var box = document.getElementById("box");
for (var i = 0; i<3; i++) {
    twoDarray.push([]);
    box.appendChild(document.createElement('div'));
    child = box.children;
    child[i].innerHTML = ' ';
    for (var t = 0; t < 3; t++) {
        console.log(t);
        twoDarray[i].push({});
        child[i].appendChild(document.createElement('span'));
        var subChild = box.childNodes;
       console.log(subChild);
    }
}

console.log(twoDarray);