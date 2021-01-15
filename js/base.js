let currentAddress = window.location.href;
console.log(currentAddress);

let currentURL = new URL(window.location.href);

console.log(currentURL);

console.log(currentURL.search);

var searchParams = new URLSearchParams(currentURL.search);

let username = searchParams.get("username");
console.log(username);

document.getElementById("formName").innerHTML = "Logged in as: " + username;