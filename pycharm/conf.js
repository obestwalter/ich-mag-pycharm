function r(f){/loaded|complete/.test(document.readyState)?f():setTimeout("r("+f+")",9);}
function go() {
    var body = document.getElementsByTagName('body')[0];
    var e = document.createElement('p');
    e.setAttribute('class', 'cop');
    e.innerHTML =
    '<strong>100% Powerpoint free</strong>   |   '
    + 'generated with <a href="https://github.com/n1k0/landslide">Landslide</a>';
    body.appendChild(e);
}
r(go);
