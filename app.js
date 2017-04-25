function DIV() {
  let el,x,y
      this.add = function(par, ell, i) {
      this.ell = document.createElement(ell)
      this.ell.setAttribute("id", i)
      this.par = document.getElementById(par)
      this.par.appendChild(this.ell)
    },
    this.talk = function() {
        alert( this.name + " say meeow!" )
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


var d = new DIV()
d.add("body", "div", "pierwszy")
d.Id("pierwszy")
d.st("black")
d.xy(200,200)

var f = new DIV()
f.add("pierwszy", "div", "drugi")
f.Id("drugi");
f.st("blue")
f.xy(100, 100)


var g = new DIV()
g.add("drugi", "div", "trzeci");
g.Id("trzeci");
g.st("green")
g.xy(50, 50)
