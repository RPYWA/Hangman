let animalArray = [
    "Cat",
    "Dog",
    "Hamster",
    "Fish",
    "Rabbit",
    "Chicken",
    "Raccoon",
    "Wolf",
    "Fox",
    "Coyote",
    "Bear",
    "Black Bear",
    "Monkey",
    "Gorilla",
    "Bird",
    "Bat",
    "Snake",
    "Tiger",
    "Lion",
    "Lizard",
    "Dolphin",
    "Deer",
    "Cow",
    "Your Mother",
    "Zebra",
    "Kangaroo",
    "Ostrich",
    "Frog",
    "Emu",
    "Rhea",
    "Eagle",
    "Stick Bug",
    "Stink Bug",
    "Hippo",
    "Otter",
    "Sealion",
    "Seal",
    "Beaver",
    "Duck",
    "Prairie Dog",
    "Pig",
    "Capybara",
    "Fly",
    "Fruit Fly",
    "Mole",
    "Axolotl",
    "Moth",
    "Crab",
    "Platypus",
    "Blobfish",
    "Antelope",
    "Narwhal",
    "Armadillo",
    "Pangolin",
    "Badger",
    "Goat (Tom Brady)"
]

let link = document.querySelectorAll (".link");

let selectedLetters = [
    
]
let chosenWord;
function Animals(e){
   var buttonClick = e.target.dataset.id;
   
   if(buttonClick === "Animals"){
    let random = Math.floor(Math.random() * animalArray.length);
    chosenWord = animalArray[random];
    chosenWord = chosenWord.split(' ');
    chosenWord = chosenWord.join(' ');

    for(let i = 0; i < animalArray.length; i++){
        let word = document.createElement("input")
    }

   }
}