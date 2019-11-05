export default function getCharacter(url) {
  return fetch(`https://last-airbender-api.herokuapp.com${url}`)
    .then(res => {
      return res.json();
    });
}

