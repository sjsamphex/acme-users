//this is client side code editing the index.html

const faker = require('faker');

const userArray = new Array(50)
  .fill(' ')
  .map((user) => faker.internet.userName());

const userList = document.querySelector('#user-list'); //hijack the front end web page

let curr = parseInt(window.location.hash.slice(1)); //slashing off the # and then converting into an integer
// console.log(curr);

const render = () => {
  const htmlscript = `${userArray
    .map(
      (user, idx) =>
        `<li> <a href= '#${idx}'>${user}</a>
        ${
          curr === idx
            ? `
          <ul>
            <li>${faker.helpers.userCard().email}</li>
            <li>${faker.helpers.userCard().website}</li>
          </ul>
        `
            : ''
        }

    </li>`
    )
    .join('')}`;

  userList.innerHTML = htmlscript; //edit the front end web page
};

render();

window.addEventListener('hashchange', () => {
  curr = parseInt(window.location.hash.slice(1));
  // console.log(curr);
  render();
});
