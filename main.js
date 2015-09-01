
document.getElementById("clickme").addEventListener("click", function(e) {
  console.log("you clicked " + e.target);
  e.preventDefault();
});