const config = {
    accept: [], // default empty array - all files
    maxFiles: 1, 
    failOverMaxFiles: true, 
};

// Initialize Filestack DnD
const apiKey = process.env.API_KEY;
const filestackDnD = new filestackDnD(apiKey, document.querySelector('.drop-area'), config);
const clipboard = document.querySelector(".input-box");

// Function to handle dropped files
function handleDrop(event) {
    event.preventDefault();
    let files = event.dataTransfer.files;
    handleFiles(files);
}
  
// Function to handle selected files
function handleFiles(files) {
    clipboard.innerHTML = ""; // Clear previous download links
  
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(file);
        downloadLink.download = file.name;
        downloadLink.innerText = file.name;
        clipboard.appendChild(downloadLink);
    }
}
  
// Event listeners for drag-and-drop functionality
dropArea.addEventListener("dragenter", function(event) {
    event.preventDefault();
    dropArea.classList.add("highlight");
});
  
dropArea.addEventListener("dragover", function(event) {
    event.preventDefault();
});
  
dropArea.addEventListener("dragleave", function(event) {
    event.preventDefault();
    dropArea.classList.remove("highlight");
});
  
dropArea.addEventListener("drop", handleDrop);
