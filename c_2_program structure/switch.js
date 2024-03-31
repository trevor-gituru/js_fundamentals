//Used instead of a chain of if/else statements.
//Case is used to indicate a value to match followed by block
//Default used to indicate what to do when no other value is found
//Unless break is used the programm will continue executing throughout
//the other cases once a matching case found
//let answer = prompt("What is the weather like?");

switch ("sunny") {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    case "gloomy":
        console.log("Sleep.");
        break;
    default:
        console.log("Unknown weather type!");
    break;
}
