// Create footer element using DOM manipulation
const footer = document.createElement('footer');
document.body.appendChild(footer);

// Get current date and year
const today = new Date();
const thisYear = today.getFullYear();

// Create copyright paragraph with proper Unicode symbol
const copyright = document.createElement('p');
// Using Unicode escape sequence for copyright symbol
copyright.innerHTML = `\u00A9 ${thisYear} Redat Davison`;
// Alternative: you can also use the symbol directly
// copyright.innerHTML = `© ${thisYear} Redat Davison`;
footer.appendChild(copyright);

// Skills array
const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Sewing",
    "Draping",
    "Pattern making",
    "Styling",
    "Fluent in Amharic"
];

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select skills section and list
    const skillsSection = document.querySelector('#Skills');
    if (skillsSection) {
        const skillsList = skillsSection.querySelector('ul');
        if (skillsList) {
            // Add skills to the list
            skills.forEach(skillText => {
                const skill = document.createElement('li');
                skill.textContent = skillText;
                skillsList.appendChild(skill);
            });
        }
    }
});
// Select message form
const messageForm = document.forms["leave_message"];

// Handle form submission
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  // Select messages section and list
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");

  // Create new message entry
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a> - 
    <span>${userMessage}</span>
  `;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button");
  
  removeButton.addEventListener("click", function () {
    newMessage.remove();
  });

  // Add remove button to message entry
  newMessage.appendChild(removeButton);

  // Append message to list
  messageList.appendChild(newMessage);

  // Reset form
  messageForm.reset();
});
