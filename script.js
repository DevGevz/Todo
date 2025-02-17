const Mybtn = document.getElementById("add-task");
const MyInput = document.getElementById("inputField");
const MySection = document.getElementById("main");


window.addEventListener("load", () => {
    if (localStorage.getItem("tasks")) {
        MySection.innerHTML = localStorage.getItem("tasks");
        addCheckboxEventListeners();
    }
});

// Fonction pour ajouter des événements aux cases à cocher
function addCheckboxEventListeners() {
    const checkboxes = document.querySelectorAll('.task input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                alert("Bravo vous avez fini cette tâche !");
                setTimeout(() => {
                    const task = checkbox.closest('.task');
                    task.remove();
                    localStorage.setItem("tasks", MySection.innerHTML);
                }, 1000); // Suppression après 3 secondes
            }
        });
    });
}


Mybtn.addEventListener('click', () => {
    const content = MyInput.value;
    if (content.trim() !== "") {
        const taskHTML = `
            <div class="task">
                <div class="task-content">
                    <input type="checkbox" class="tick"> 
                    <label><span>${content}</span></label>
                </div>
            </div>
        `;        
        MySection.innerHTML += taskHTML;
        localStorage.setItem("tasks", MySection.innerHTML);
        MyInput.value = "";
        addCheckboxEventListeners();
    }
});
