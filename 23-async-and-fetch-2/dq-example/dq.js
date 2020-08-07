/*
Check out the JSON you get from making a GET request to this url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/dq.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.

√1. add a click listener to the button
2. on click, do a GET request to that URL above
3. use the data returned by the server to populate the DOM


*/

document.addEventListener("DOMContentLoaded", e => {
  const button = document.querySelector("button")

  const clickHandler = () => {
    button.addEventListener("click", e => {
      fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        const user = data.results[0]
        renderUser(user)
      })
    })
  }

  const renderUser = user => {
    console.log(user)

    const picture = user.picture.large
    document.querySelector('#profile_picture').src = picture
    
    const first = user.name.first
    const last = user.name.last
    const title = user.name.title
    document.querySelector('#fullname').textContent = `${title} ${first} ${last}`
    
    const email = user.email
    document.querySelector('#email').textContent = email
  }

  clickHandler()
})

