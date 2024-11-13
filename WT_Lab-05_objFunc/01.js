//* TASK-1
const film = {
  title: "Dhoom 2",
  year: "2002",
  genre: "action",
  ratings :{
      imdb : 2.4,
      rottenTomamtoes : 4.5,
      Metacritic:9.0
    },
    director: "huzaifa"
};
let {
  title,
  genre,
  ratings: { imdb, rottenTomamtoes, Metacritic },
  year,
} = film;
console.log(title, year, genre, imdb, rottenTomamtoes, Metacritic);

