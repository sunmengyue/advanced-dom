// function test() {
//   console.log(1);
//   console.log(2);
//   setTimeout(() => {
//     console.log(4);
//   }, 0);

//   //The promise runs immediately when the funcion it inside completes
//   new Promise((resolve, reject) => {
//     resolve('hi promise');
//   }).then((message) => console.log(message));

//   setTimeout(() => {
//     console.log(3);
//   }, 2500);

//   console.log(5);
// }

// test();

// const buttons = document.querySelectorAll('button');

// document.addEventListener('click', (e) => {
//   if (e.target.matches('button')) {
//     console.log('button clicked');
//   }
// });

// document.body.addEventListener('click', () => {
//   console.log('Click body');
// });

// buttons.forEach((button) =>
//   button.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('click buttons');
//   }),
// );

// const newButton = document.createElement('button');
// document.body.append(newButton);
// newButton.innerText = 5;
localStorage.setItem('name', 'Simon');
sessionStorage.setItem('Age', 25);
sessionStorage.removeItem('Age');

const date = new Date(9999, 0, 1).toUTCString();
const pastDate = new Date(1999, 0, 1).toUTCString();

document.cookie = `name=simon; expires=${date}`;
document.cookie = `age=25; expires=${date}`;
document.cookie = `name=; expires=${pastDate}`;
document.cookie = `age=; expires=${pastDate}`;
console.log(document.cookie);
