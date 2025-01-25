async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const users = await response.json();

      // Clear the loading message
      dataContainer.innerHTML = '';

      // Create a <ul> element
      const userList = document.createElement('ul');

      // Loop through users and create a list item for each
      users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name; // Set the name as the text of the <li>
          userList.appendChild(listItem); // Append the <li> to the <ul>
      });

      // Append the <ul> to the data container
      dataContainer.appendChild(userList);

  } catch (error) {
      // In case of error, clear the content and display a failure message
      dataContainer.innerHTML = 'Failed to load user data.';
  }
}

// Ensure the fetchUserData function runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
