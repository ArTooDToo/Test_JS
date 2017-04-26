
var bo = document.getElementById("body")
var a = document.createElement('div')
  a.setAttribute("id","dziaa")
  a.style.width = "200px"
  a.style.height = "200px"
  a.style.background = "black"

var b = document.createElement('div')
    b.setAttribute("id","f")
    b.style.width = "100px"
    b.style.height = "100px"
    b.style.background = "blue"

    var c = document.createElement('div')
        c.setAttribute("id","f")
        c.style.width = "100px"
        c.style.height = "100px"
        c.style.background = "green"

var tab = []
tab.push(a)
tab.push(b)
tab.push(c)
console.log(tab);
var i = 0
function typeWriter() {
  for (i;i<tab.length;i++) {
    (function(e){
      setTimeout(function() {
        bo.appendChild(tab[e])
          console.log(e);
      }, i * 1000);
    })(i)
  }
}

console.log(tab);
typeWriter()
/*
function doSetTimeout(i) {
  setTimeout(function() { alert(i); }, i* 2000);
}

for (var i = 1; i <= 2; ++i)
  doSetTimeout(i);

*/




/*function DIV() {
  let el
    this.add = function(par, ell, i) {
      this.ell = document.createElement(ell)
      this.ell.setAttribute("id", i)
      this.par = document.getElementById(par)
      this.par.appendChild(this.ell)
    },
    this.talk = function() {
        alert("działa")
    },
    this.Id = function (e) {
        this.name = e;
        el = document.getElementById(e)
        return el
    },
    this.st = function(a){
      return el.style.background = a;
    },
    this.xy = function(x,y){
        if(el.parentNode.offsetWidth>=x || el.parentNode.offsetHeight>=y){
          el.style.width = x+"px"
          el.style.height = y+"px"
          return{
            w : x,
            h : y
          }
        }else{
          alert("Obiekt nadrzędny ma za małą wysokość, bądź szerokość")
          return false;
        }
    }
}
var tab = []
var d = new DIV()
d.add("body", "div", "pierwszy")
d.Id("pierwszy")
d.st("black")
d.xy(200,200)
tab.push(d)
var f = new DIV()
f.add("pierwszy", "div", "drugi")
f.Id("drugi");
f.st("blue")
f.xy(100, 100)
tab.push(f)
var g = new DIV()
g.add("drugi", "div", "trzeci");
g.Id("trzeci");
g.st("green")
g.xy(50, 50)
tab.push(g)
console.log(tab);
*/
