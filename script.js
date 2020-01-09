
function addPlayers() {
  let playerName = prompt("Players Name?")
  var ul = document.getElementById("numOfPlayers");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(playerName));
  li.setAttribute("id", "Players");
  ul.appendChild(li);

}
