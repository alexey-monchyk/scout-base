const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 9.2,
    scoutbase_rating: 8.9
  },
  {
    title: 'The Godfather',
    year: 1972,
    rating: 9.1,
    scoutbase_rating: 8.8
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    rating: 9,
    scoutbase_rating: 8.7
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    rating: 9,
    scoutbase_rating: 8.7
  },
  {
    title: '12 Angry Men',
    year: 1957,
    rating: 8.9,
    scoutbase_rating: 8.6
  },
  {
    title: 'Schindler\'s List',
    year: 1993,
    rating: 8.9,
    scoutbase_rating: 8.6
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    rating: 8.9,
    scoutbase_rating: 8.6
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    rating: 8.9,
    scoutbase_rating: 8.6
  },
  {
    title: 'The Good, the Bad and the Ugly',
    year: 1966,
    rating: 8.8,
    scoutbase_rating: 8.5
  },
  {
    title: 'Fight Club',
    year: 1999,
    rating: 8.8,
    scoutbase_rating: 8.5
  }
];

const actors = [
  {
    name: 'Tim Robbins',
    birthday: '1958-10-16',
    country: 'USA',
    movies: ['The Shawshank Redemption']
  },
  {
    name: 'Morgan Freeman',
    birthday: '1958-10-16',
    country: 'USA',
    movies: ['The Shawshank Redemption']
  },
  {
    name: 'Bob Gunton',
    birthday: '1958-10-16',
    country: 'USA',
    movies: ['The Shawshank Redemption']
  },
  {
    name: 'Marlon Brando',
    birthday: '1958-10-16',
    country: 'USA',
    movies: ['The Godfather']
  },
  {
    name: 'Al Pacino',
    birthday: '1958-10-16',
    country: 'USA',
    movies: ['The Godfather', 'The Godfather: Part II']
  },
  {
    name: 'Robert De Niro',
    birthday: '1943-10-16',
    country: 'USA',
    movies: ['The Godfather: Part II']
  },
  {
    name: 'Christian Bale',
    birthday: '1974-10-16',
    country: 'UK',
    movies: ['The Dark Knight']
  },
  {
    name: 'Heath Ledger',
    birthday: '1979-10-16',
    country: 'USA',
    movies: ['The Dark Knight']
  },
  {
    name: 'Henry Fonda',
    birthday: '1905-10-16',
    country: 'USA',
    movies: ['12 Angry Men']
  },
  {
    name: 'Lee J. Cobb',
    birthday: '1911-10-16',
    country: 'USA',
    movies: ['12 Angry Men']
  },
  {
    name: 'Liam Neeson',
    birthday: '1952-10-16',
    country: 'UK',
    movies: ['Schindler\'s List']
  },
  {
    name: 'Ralph Fiennes',
    birthday: '1962-10-16',
    country: 'UK',
    movies: ['Schindler\'s List']
  },
  {
    name: 'Elijah Wood',
    birthday: '1981-10-16',
    country: 'USA',
    movies: ['The Lord of the Rings: The Return of the King']
  },
  {
    name: 'Viggo Mortensen',
    birthday: '1958-10-16',
    country: 'USA',
    movies: ['The Lord of the Rings: The Return of the King']
  },
  {
    name: 'John Travolta',
    birthday: '1954-10-16',
    country: 'USA',
    movies: ['Pulp Fiction']
  },
  {
    name: 'Samuel L. Jackson',
    birthday: '1948-10-16',
    country: 'USA',
    movies: ['Pulp Fiction']
  },
  {
    name: 'Clint Eastwood',
    birthday: '1930-10-16',
    country: 'USA',
    movies: ['The Good, the Bad and the Ugly']
  },
  {
    name: 'Eli Wallach',
    birthday: '1915-10-16',
    country: 'USA',
    movies: ['The Good, the Bad and the Ugly']
  },
  {
    name: 'Brad Pitt',
    birthday: '1963-10-16',
    country: 'USA',
    movies: ['Fight Club']
  },
  {
    name: 'Edward Norton',
    birthday: '1969-10-16',
    country: 'USA',
    movies: ['Fight Club']
  },
];

const directors = [
  {
    name: 'Frank Darabont',
    birthday: '1959-10-28',
    country: 'France',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  },
  {
    name: 'Francis Ford Coppola',
    birthday: '1939-10-28',
    country: 'USA',
    actors: ['Marlon Brando', 'Al Pacino', 'Robert De Niro'],
  },
  {
    name: 'Christopher Nolan',
    birthday: '1970-10-30',
    country: 'UK',
    actors: ['Christian Bale', 'Heath Ledger'],
  },
  {
    name: 'Sidney Lumet',
    birthday: '1924-10-25',
    country: 'USA',
    actors: ['Henry Fonda', 'Lee J. Cobb'],
  },
  {
    name: 'Steven Spielberg',
    birthday: '1946-10-18',
    country: 'USA',
    actors: ['Liam Neeson', 'Ralph Fiennes'],
  },
  {
    name: 'Peter Jackson',
    birthday: '1961-10-31',
    country: 'New Zealand',
    actors: ['Elijah Wood', 'Viggo Mortensen'],
  },
  {
    name: 'Quentin Tarantino',
    birthday: '1963-10-27',
    country: 'USA',
    actors: ['John Travolta', 'Samuel L. Jackson'],
  },
  {
    name: 'Sergio Leone',
    birthday: '1989-10-30',
    country: 'Italy',
    actors: ['Clint Eastwood', 'Eli Wallach'],
  },
  {
    name: 'David Fincher',
    birthday: '1962-10-28',
    country: 'USA',
    actors: ['Brad Pitt', 'Edward Norton'],
  },
];

const seedUser = {
  name: 'seed',
  username: 'seed',
  password: 'seed',
  birthday: '1990-10-03',
};

export default {
  movies,
  actors,
  directors,
  seedUser,
};
