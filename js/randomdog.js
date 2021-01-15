const fetchDogUrl="https://random.dog/woof.json";

document.getElementById("dogFetcher").addEventListener("click", function() {
    console.log("click");
    
    fetch(fetchDogUrl).then(response => response.json()).then(data => useTheDogData(data));

});

function useTheDogData(data) {
    console.log(data);
    
	var imgUrl = data.url;
	console.log(imgUrl);
	
    document.getElementById("imgPlace").src = imgUrl;
}