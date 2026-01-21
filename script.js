// Get form elements
const themeSelector = document.getElementById('theme-selector');
const profilePicInput = document.getElementById('profile-pic');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const educationInput = document.getElementById('education');
const experienceInput = document.getElementById('experience');
const skillsInput = document.getElementById('skills');

// Get preview elements
const previewPic = document.getElementById('preview-pic');
const previewName = document.getElementById('preview-name');
const previewContact = document.getElementById('preview-contact');
const previewEducation = document.getElementById('preview-education');
const previewExperience = document.getElementById('preview-experience');
const previewSkills = document.getElementById('preview-skills');

// Function to update preview
function updatePreview() {
    previewName.textContent = nameInput.value || 'Your Name';

    const contactInfo = [];
    if (emailInput.value) contactInfo.push(`Email: ${emailInput.value}`);
    if (phoneInput.value) contactInfo.push(`Phone: ${phoneInput.value}`);
    if (addressInput.value) contactInfo.push(`Address: ${addressInput.value}`);
    previewContact.textContent = contactInfo.join(' | ');

    previewEducation.innerHTML = educationInput.value ? `Education:<br>${educationInput.value.replace(/\n/g, '<br>')}` : 'Education:';
    previewExperience.innerHTML = experienceInput.value ? `Work Experience:<br>${experienceInput.value.replace(/\n/g, '<br>')}` : 'Work Experience:';
    previewSkills.textContent = skillsInput.value ? `Skills: ${skillsInput.value}` : 'Skills:';
}

// Function to handle profile picture change
profilePicInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewPic.src = e.target.result;
            previewPic.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        previewPic.src = '';
        previewPic.style.display = 'none';
    }
});

// Add event listeners to all inputs
[nameInput, emailInput, phoneInput, addressInput, educationInput, experienceInput, skillsInput].forEach(input => {
    input.addEventListener('input', updatePreview);
});

// Print functionality
document.getElementById('print-btn').addEventListener('click', () => {
    window.print();
});

// Theme selector functionality
themeSelector.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    const resumePreview = document.getElementById('resume-preview');
    resumePreview.className = `theme-${selectedTheme}`;
});

// Initial preview update
updatePreview();
