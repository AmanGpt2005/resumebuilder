// Add new experience field
function addExperience() {
    const experienceSection = document.getElementById("experience");
    const newExp = document.createElement("div");
    newExp.classList.add("exp-item");
    newExp.innerHTML = `
        <input type="text" placeholder="Company Name" class="exp-company">
        <input type="text" placeholder="Job Title" class="exp-title">
        <textarea placeholder="Job Description" class="exp-desc"></textarea>
    `;
    experienceSection.appendChild(newExp);
}

// Update Resume Preview
document.getElementById("resume-form").addEventListener("input", function () {
    document.getElementById("preview-name").innerText = document.getElementById("name").value || "Your Name";
    document.getElementById("preview-title").innerText = document.getElementById("title").value || "Professional Title";
    document.getElementById("preview-summary").innerText = document.getElementById("summary").value || "Your professional summary goes here...";

    const expList = document.getElementById("preview-exp-list");
    expList.innerHTML = "";
    const expItems = document.querySelectorAll(".exp-item");
    expItems.forEach(item => {
        const company = item.querySelector(".exp-company").value;
        const title = item.querySelector(".exp-title").value;
        const desc = item.querySelector(".exp-desc").value;
        if (company || title || desc) {
            expList.innerHTML += `<li><strong>${company} - ${title}</strong><br>${desc}</li>`;
        }
    });
});

// Prevent form submission
document.getElementById("resume-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Resume Updated! You can now print or save it.");
});
