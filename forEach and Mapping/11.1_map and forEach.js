let movies = [
    { id: 1, name: 'The Shawshank Redemption' },
    { id: 2, name: 'The Godfather' },
    { id: 3, name: 'The Dark Knight' },
    { id: 4, name: 'Pulp Fiction' },
    { id: 5, name: 'Schindler\'s List' },
    { id: 6, name: 'Forrest Gump' },
    { id: 7, name: 'The Matrix' },
    { id: 8, name: 'Inception' },
  ];

  const newReleases = [
    {
      id: 70111470,
      title: 'Die Hard',
      boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: 'Bad Boys',
      boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: 'The Chamber',
      boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: 'Fracture',
      boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
      uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];

  const array1=[];
  newReleases.forEach((movie)=>{
    array1.push({id:movie.id,name:movie.title});
  })
  const array2=newReleases.map((movie)=>{
    return {id:movie.id,name:movie.title};
  })

  console.log(newReleases);
  //console.log(array1);
  console.log(array2);

  