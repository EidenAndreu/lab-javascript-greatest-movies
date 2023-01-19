// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(movie => movie.director);
    // Use the Set object to remove duplicates
    return Array.from(new Set(directors));
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0) return 0;
    const result = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    if(result.length === 0) return 0;
    return result.length;
}

console.log(howManyMovies(movies));



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0;
    const scores = moviesArray.map(movie => movie.score ? movie.score : 0);
    const sum = scores.reduce((acc, cur) => acc + cur);
    const average = sum / moviesArray.length;
    return Math.round(average * 100) / 100;
}
console.log(scoresAverage(movies));



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(movie => movie.genre.some(dGenre => dGenre === 'Drama')); 
    if (dramaMovies.length === 0) return 0;
    if (dramaMovies.length === 1) return dramaMovies[0].score;
    return parseFloat((dramaMovies.map(m => m.score).reduce((a, b) => a + b) / dramaMovies.length).toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let ordered = moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    console.log(ordered);
    return ordered;
}
console.log(orderByYear(moviesArray));



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedMovies = [...moviesArray];
    orderedMovies.sort((a,b) => a.title.localeCompare(b.title));
    let top20 = orderedMovies.slice(0,20);
    let top20Titles = top20.map(movie => movie.title);
    return top20Titles;
}
console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // Make a copy of the original array
    let moviesWithMinutes = [...moviesArray];
    // Use map() to convert the duration key of each movie object to minutes
    moviesWithMinutes = moviesWithMinutes.map(movie => {
        let duration = movie.duration;
        let totalMinutes = 0;
        if (duration.includes("h")) {
            let [hours, minutes] = duration.split("h ");
            totalMinutes += (parseInt(hours) * 60);
            if (minutes) {
                minutes = minutes.replace("min", "");
                totalMinutes += parseInt(minutes);
            }
        } else {
            duration = duration.replace("min", "");
            totalMinutes += parseInt(duration);
        }
        return {
            ...movie,
            duration: totalMinutes
        }
    });
    return moviesWithMinutes;
}
console.log(turnHoursToMinutes(movies))



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
