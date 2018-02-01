var doc = document;
var body = document.body;

function byId(id) {
  return document.getElementById(id);
}

function byClass(className){
  return document.getElementsByClassName(className);
}

function newEl(t) {
  return document.createElement(t);
}

function log(v) {
  console.log(v);
}

function map_(f, list) {
  for (var i = 0; i < list.length; i++) {
    f(list[i]);
  }
}

function copyList(list){
  var out = [];
  for (var i = 0; i < list.length; i++) {
    out.push(list[i]);
  }
  return out;
}

function mapObj_(f, o){
  for (var k in o) {
    if (o.hasOwnProperty(k)) {
      f(k, o[k]);
    }
  }
}

function repeatAction(howManyTimes, f){
  for (var i = 0; i < howManyTimes; i++){
    f(i);
  }
}

function min(a, b){
  return (a < b) ? a : b;
}

function max(a, b){
  return (a > b) ? a : b;
}


// --------- aleatoire:
function randN(max) { // rand integer in [0,max[
  return Math.floor(Math.random()*max)
}