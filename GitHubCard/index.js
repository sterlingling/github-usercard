import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = ['jdxcode', 'mattxwang', 'xiaohuoni'];

followersArray.forEach((item) => {
  getCard(item);
})

function getCard(username) {
  axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      document.querySelector('.cards').appendChild(gitComp(res.data));
    })
    .catch(err => {
      console.log(err);
    });
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitComp(obj) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const heading = document.createElement('h3');
  const userP = document.createElement('p');
  const locateP = document.createElement('p');
  const profileP = document.createElement('p');
  const link = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  card.classList.add('card');
  image.src = obj.avatar_url;
  cardInfo.classList.add('card-info');
  heading.classList.add('name');
  userP.classList.add('username');
  heading.textContent = obj.name;
  userP.textContent = obj.login;
  locateP.textContent = obj.location;
  profileP.textContent = "Profile";
  link.textContent = "Link to profile";
  link.href = obj.html_url;
  followersP.textContent = `Followers: ${obj.followers}`;
  followingP.textContent = `Following: ${obj.following}`;
  bioP.textContent = obj.bio;

  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(heading);
  cardInfo.appendChild(userP);
  cardInfo.appendChild(locateP);
  cardInfo.appendChild(profileP);
  profileP.appendChild(link);
  cardInfo.appendChild(followersP);
  cardInfo.appendChild(followingP);
  cardInfo.appendChild(bioP);
  return card;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
