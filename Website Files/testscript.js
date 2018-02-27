var secret = prompt("What is the secret password?");
var guess;

while (secret !== "sesame") {
  prompt("That's not it! Try again");
}

while(secret === "sesame") {
document.write("You know the secret password. Welcome.");
}