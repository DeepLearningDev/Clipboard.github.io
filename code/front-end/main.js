// JavaScript code for copy, paste, and save buttons

const clipContainer = document.querySelector(".clipboard-container");
const copyBtn = document.querySelector(".copy");
const pasteBtn = document.querySelector(".paste");
const saveBtn = document.querySelector(".save");
const clearBtn = document.querySelector(".clear");
const clipboard = document.querySelector(".input-box");

function storeData() {
    localStorage.setItem("clipboard", clipboard.innerHTML);
    clipboard.setAttribute("contenteditable", true);
}
function loadData() {
    const storedData = localStorage.getItem("clipboard");
    if (storedData) {
        clipboard.innerHTML = storedData;
    }
}


copyBtn.addEventListener("click", async () => {
    try {
        let copiedText = clipboard.innerHTML;
        const anchorTagRegex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*?>(.*?)<\/a>/gi;
        const anchorMatch = copiedText.match(anchorTagRegex);
        if (anchorMatch) {
            // If clipboard content contains an anchor tag, extract the text from inside the tag
            const anchorContent = anchorMatch.map(tag => {
                const textRegex = /<a[^>]*>(.*?)<\/a>/i;
                return tag.match(textRegex)[1];
            });
            copiedText = anchorContent.join(' ');
        }
        await navigator.clipboard.writeText(copiedText);
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