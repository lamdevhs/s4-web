function log(v) {
  console.log(v);
}

function map_(f, list) {
  for (var i = 0; i < list.length; i = i+1) {
    f(list[i]);
  }
}

function mapObj_(f, o){
  for (var k in o) {
    if (o.hasOwnProperty(k)) {
      f(o[k]);
    }
  }
}

function byId(id) {
  return document.getElementById(id);
}
function byTag(tag) {
  return document.getElementsByTagName(tag);
}

function qSel(sel){
  return document.querySelector(sel);
}

doc = document;

var noeudsElements = qSel(".contenu").children;
map_(log, noeudsElements);
log(document.body);

var h1 = byTag("h1")[0];
log(h1.innerHTML);

var c1 = byId("c1");
log(c1); log(c1.style);

mapObj_(log, c1);
  // ^ n'a rien imprimé, apparemment
  // c1 n'a aucune propriété propre

for (var k in c1) {
  //log(c1[k]);
  // ^ ça en imprime un paquet,
  //   je ne suis pas sur que c'est ce qu'il
  //   fallait faire?
}

var title = byTag("title")[0];
title.innerHTML = "TP2: manipulation du DOM";

var today = qSel(".today");
today.innerHTML = "Le 18 Janvier 2018";

c1.style.backgroundColor = "red";

var c2 = byId("c2");
c2.style.backgroundColor = "green";

c1.childNodes[0].style.color = "red";
c2.childNodes[0].style.color = "green";

function newEl(t) {
  return document.createElement(t);
}

var c3 = newEl("p");
c3.id = "c3";
c3.className = "carte";
c3.style.color = "blue";
c3.style.backgroundColor = "blue";

var p2 = byId("p2");
p2.appendChild(c3);

var c3Link = newEl("a");
c3Link.href = "#";
c3Link.innerHTML = "3";
c3.appendChild(c3Link);
c3Link.style.color = "blue";

function addCard(num) {
  var card = c3.cloneNode(true);
  card.id = "c" + num;
  card.childNodes[0].innerHTML = num;
  p2.appendChild(card);
  return card;
}

function colorizeCard(card, color) {
  card.style.backgroundColor = color;
  card.childNodes[0].style.color = color;
}

var colors = "red,blue,green,yellow,purple".split(",");

function randN(max) { // rand integer in [0,max[
  return Math.floor(Math.random()*max)
}

function randFrom(list){
  return list[randN(list.length)];
}

for (var i = 4; i <= 10; i++) {
  var c = addCard(i);
  var color = randFrom(colors);
  colorizeCard(c, color);
}

function card(num){
  return byId("c" + num);
}

function delCard(num){
  var c = card(num);
  // or: p2.children[num - 1]
  p2.removeChild(card);
}

function headLast(){
  var c = p2.children[0];
  p2.removeChild(c);
  p2.appendChild(c);
}

function flipCard(num){
  var c = card(num);
  c.style.backgroundColor = "white";
}

flipCard(1);

function zoomCard(num){
  var c = card(num);
  c.style.width = "160px";
  c.style.height = "160px";
}

zoomCard(1);

setInterval(headLast, 2000);

