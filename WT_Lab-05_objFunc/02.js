//* TASK-2
const filmm = {
  title: "Dhoom 2",
  year: "2002",
  genre: "action",
  ratings: {
    imdb: 2.4,
    rottenTomamtoes: 4.5,
    Metacritic: 9.0,
  },
  director: "huzaifa",
};
function avgRate({ ratings: { imdb, rottenTomamtoes, Metacritic } }) {
  let avg = (imdb + rottenTomamtoes + Metacritic) / 3;
  console.log(avg);
}
console.log(avgRate(filmm));