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
