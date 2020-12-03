const URL = 'https://jsonplaceholder.typicode.com/comments?postId=1';
const button = document.querySelector('button');
/* Get Data From the Server */

// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data.map((user) => user.name)));

// async function getData() {
//   try {
//     const response = await fetch(URL);
//     if (response.ok) {
//       const user = await response.json();
//       console.log(user);
//     } else {
//       console.log('failure');
//     }
//   } catch (e) {
//     console.error(e);
//   }
// }

// button.addEventListener('click', getData);

// async function postData() {
//   const response = await fetch(URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       title: 'new post',
//     }),
//   });
//   const post = await response.json();
//   console.log(post);
// }

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function getComments() {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}

getComments();
