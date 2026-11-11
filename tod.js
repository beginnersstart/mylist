let bt = document.querySelector("#addBtn");
let ul = document.querySelector("#taskList");
let ip = document.querySelector("#taskInput");
let countText = document.querySelector("#taskCount");

function updateCount() {
    let total = document.querySelectorAll("li").length;
    countText.innerText = "Total tasks: " + total;
}

bt.addEventListener("click", function () {
    if (ip.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerText = ip.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "DELETE";
    delbtn.classList.add("delete");

    li.appendChild(delbtn);
    ul.appendChild(li);

    ip.value = "";
    updateCount();
});

ip.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        bt.click();
    }
});

ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        updateCount();
    }
});

updateCount();