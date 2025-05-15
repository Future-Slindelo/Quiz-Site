const places = [
    {
      image: images/Paris.jpeg",
      country: "Paris",
      name: "Paris",
      info: "The Eiffel Tower is a famous landmark in Paris, France."
    },
    
    {
      image: images/Dubai.jpeg",
      country: "Dubai",
      name: "Dubai",
      info: "The Burj Khalifa, the tallest building in the world located in Dubai."
    },

    {
      image: images/New York.jpeg",
      country: "USA",
      name: "New York City",
      info: "The Times Square,an iconic area in manhattan known for it's billboards & non-stop entertainment."
    },

    {
      image: images/Durban.jpeg",
      country: "South Africa",
      name: "Durban",
      info: "uShaka Marine World theme park in Durban, South Africa. It's a popular tourist attraction featuring an aquarium, water park, and other entertainment options."
    },
    
    {
      image: images/London.jpeg",
      country: "United Kingdom",
      name: "London",
      info: "Big Ben, located in London, is one of the most iconic landmarks,known for its distinctive clock tower."
    },

    {
      image: images/Cape town.jpeg",
      country: "South Africa",
      name: "Cape Town",
      info: "A Stunning Coastal City of Cape town known for it's Table Mountain,Cape of Good Hope & Stadium."
    },
];

document.getElementById("submitButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    const feedback = document.getElementById("feedback");
    const placeInfo = document.getElementById("placeInfo");
    const placeImage = document.getElementById("placeImage");

    const place = places.find(p => p.name.toLowerCase() === userInput || p.country.toLowerCase() === userInput);

    if (place) {
        feedback.textContent = "Correct!";
        placeInfo.innerHTML = `<strong>${place.name}, ${place.country}</strong><br>${place.info}`;
        placeImage.src = place.image;
        placeImage.style.display = "block";
    } else {
        feedback.textContent = "Incorrect! Try again.";
        placeInfo.innerHTML = "";
        placeImage.style.display = "none";
       
      }
  });