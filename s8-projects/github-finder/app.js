const github = new Github;
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Add event listener to search input, listen for keyup and get text that user types.
searchUser.addEventListener('keyup', e => {
  userText = e.target.value;
  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show Alert
          ui.clearInput();
        } else {
          ui.showProfile(data.profile);
        }
      })
  } else {
    ui.clearInput();
  }
});