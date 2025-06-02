// Ensure DOM is fully loaded before modifying elements
document.addEventListener('DOMContentLoaded', function () {
  const footer = document.createElement('footer');
  document.body.appendChild(footer);

  // Get current date and year inside function
  const today = new Date();
  const thisYear = today.getFullYear();

  // Create copyright paragraph
  const copyright = document.createElement('p');
  copyright.innerHTML = `\u00A9 ${thisYear} Redat Davison`;
  footer.appendChild(copyright);

  // Skills array
  const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'SQL',
    'Sewing',
    'Draping',
    'Pattern making',
    'Styling',
    'Fluent in Amharic',
  ];

  const skillsSection = document.querySelector('#Skills');
  if (skillsSection) {
    const skillsList = skillsSection.querySelector('ul');
    if (skillsList) {
      skills.forEach((skillText) => {
        const skill = document.createElement('li');
        skill.textContent = skillText;
        skillsList.appendChild(skill);
      });
    }
  }
});

// Handle message form submission
document.addEventListener('DOMContentLoaded', function () {
  const messageForm = document.forms['leave_message'];

  messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // values inside function
    const userName = this.usersName.value;
    const userEmail = this.usersEmail.value;
    const userMessage = this.usersMessage.value;

    // Select messages section and list inside function
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    // Create new message entry
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
            <a href="mailto:${userEmail}">${userName}</a> - 
            <span>${userMessage}</span>
        `;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');

    removeButton.addEventListener('click', function () {
      this.parentNode.remove();
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    // Reset form
    this.reset();
  });
});
// Fetch GitHub repositories correctly
fetch('https://api.github.com/users/rdavison23/repos')
  .then((response) => response.json())
  .then((repositories) => {
    const projectSection = document.querySelector('#Projects');
    if (projectSection) {
      const projectList = projectSection.querySelector('ul');
      if (projectList) {
        repositories.forEach((repo) => {
          const project = document.createElement('li');
          const projectLink = document.createElement('a');

          projectLink.href = repo.html_url; // GitHub repo link
          projectLink.textContent = repo.name;
          projectLink.target = '_blank'; // Opens in a new tab

          project.appendChild(projectLink);
          projectList.appendChild(project);
        });
      } else {
        projectSection.innerHTML = '<p>No projects list found.</p>';
      }
    }
  })
  .catch((error) => {
    console.error('Error fetching repositories:', error);
    const projectSection = document.querySelector('#Projects');
    if (projectSection) {
      projectSection.innerHTML =
        '<p>Unable to load projects. Please try again later.</p>';
    }
  });
