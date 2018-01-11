function log(v) { return console.log(v) }

var children = document.querySelector(".contenu").children

var nodesNb = children.length

for (var i = 0; i < nodesNb; i++) {
	log(children[i])
}

log(document.body)