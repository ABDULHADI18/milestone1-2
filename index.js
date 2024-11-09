function toggleSkillsSection() {
  const skillsSection = document.getElementById("skills");
  if (skillsSection.style.display === "block") {
    skillsSection.style.display = "none";
  } else {
    skillsSection.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-skills-button");
  toggleButton.addEventListener("click", toggleSkillsSection);
});
