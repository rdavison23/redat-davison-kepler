// Create footer element using DOM manipulation
const footer = document.createElement('footer');
document.body.appendChild(footer);

// Get current date and year
const today = new Date();
const thisYear = today.getFullYear();

// Create copyright paragraph
const copyright = document.createElement('p');
copyright.innerHTML = `© ${thisYear} Redat Davison`;
footer.appendChild(copyright);

// Skills array - technical and professional skills
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

// Select skills section using DOM Selection
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

// Add skills to the list using a for loop
for (let i = 0; i < skills.length; i++) {
    // Create new list item
    const skill = document.createElement('li');
    
    // Set the inner text to current skill
    skill.innerText = skills[i];
    
    // Append to skills list
    skillsList.appendChild(skill);
}
