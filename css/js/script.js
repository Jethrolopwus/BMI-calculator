const button = document.querySelector("#button");

const output = document.querySelector("#result");

button.addEventListener("click", (event) => {
    event.preventDefault()
    const modalShow = document.querySelector("#modal");
    modalShow.style.display = "flex"
    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", () => {
        const dismiss = document.querySelector("#modal");
        dismiss.style.display = "none"
    });


    const h = document.querySelector("#h").value;
    const w = document.querySelector("#w").value;
    const result = Math.ceil(w / (h / 100 * h / 100));
    output.textContent = result;
});