const clipContainer = document.querySelector(".clipboard-container");
const copyBtn = document.querySelector(".copy");
const pasteBtn = document.querySelector(".paste");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");
const clipboard = document.querySelector(".input-box");

function storeData() {
    localStorage.setItem("clipboard", clipboard.innerHTML);
}

function loadData() {
    const storedData = localStorage.getItem("clipboard");
    if (storedData) {
        clipboard.innerHTML = storedData;
    }
}

copyBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(clipboard.innerHTML);
        console.log("Text copied");
        clipboard.innerHTML = "";
        storeData();
    } catch (err) {
        console.error("Error copying text", err);
    }
});

saveBtn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(clipboard.innerHTML);
        console.log("Text saved");
        storeData();
    } catch (err) {
        console.error("Error saving text", err);
    }
});

pasteBtn.addEventListener("click", async () => {
    try {
        const cliptext = await navigator.clipboard.readText();
        clipboard.innerHTML = "";
        clipboard.innerText = cliptext;
        storeData();
    } catch (err) {
        console.error(err);
    }
});

clearBtn.addEventListener("click", (e) =>{
    if(clipboard.innerHTML != ""){
        clipboard.innerHTML = "";
        storeData();
    }
})

loadData();