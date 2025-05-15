let movies = {};

function getMovie(movie) {
    return movie.trim().toLowerCase() !== "";
}

function getMovieTitle(title) {
    return title.trim().toLowerCase() !== "";
}

function main() {
    while (true) {
        console.log("\n1. Add a Movie\n2. Rate a Movie\n3. View Average Rating\n4. Exit");
	const prompt = require('prompt-sync')();
        let choice = prompt("Enter your choice: ");

        if (isNaN(choice) || choice < 1 || choice > 4) {
            console.log("Invalid choice. Please try again.");
            continue;
        }

        choice = parseInt(choice);

        if (choice === 1) {
            while (true) {
                let movieBox = prompt("Enter the movie name: ");
                if (!getMovie(movieBox)) {
                    console.log("\nInvalid input, movie name can't be empty");
                } else if (movies[movieBox]) {
                    console.log(`\nMovie '${movieBox}' already exists. Please choose another name`);
                } else {
                    movies[movieBox] = { ratings: [] };
                    console.log(`\nMovie '${movieBox}' added!`);
                    break;
                }
            }
        } else if (choice === 2) {
            while (true) {
                let title = prompt("Enter the movie name: ");
                if (!getMovieTitle(title)) {
                    console.log("\nInvalid input, movie name can't be empty.");
                } else if (!movies[title]) {
                    console.log(`\nMovie '${title}' not found. Please enter correct movie name.\n`);
                } else {
                    let ratingInput = prompt("Enter your rating (1-5): ");
                    let rating = parseFloat(ratingInput);
                    if (isNaN(rating) || rating < 1 || rating > 5) {
                        console.log("Rating must be between 1 and 5.");
                    } else {
                        movies[title].ratings.push(rating);
                        console.log(`\nRating added for '${title}': ${rating}`);
                        break;
                    }
                }
            }
        } else if (choice === 3) {
            if (Object.keys(movies).length === 0) {
                console.log("No movies to display average ratings.");
            } else {
                for (let title in movies) {
                    if (movies[title].ratings.length > 0) {
                        let averageRating = movies[title].ratings.reduce((a, b) => a + b, 0) / movies[title].ratings.length;
                        console.log(`${title}: ${averageRating.toFixed(2)}`);
                    } else {
                        console.log(`${title}: No ratings yet`);
                    }
                }
            }
        } else if (choice === 4) {
            console.log("Exiting the application. Goodbye!");
            break;
        }
    }
}

main();
