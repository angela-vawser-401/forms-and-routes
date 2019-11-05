export function getCharacter(url) {
  return fetch(`https://last-airbender-api.herokuapp.com${url}`)
    .then(res => {
      return res.json();
    });
}

export function getSearchedCharacters(search, page = 1) {
  if(search === '') {
    return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
      .then(res => res.json());
  }
  else return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${search}`)
    .then(res => res.json());
}


