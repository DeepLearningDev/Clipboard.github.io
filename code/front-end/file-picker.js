// JavaScript code for Filestack uploading file and link generation

// Initializing Filestack client with API key
const apikey = 'AgdxU3Dh0QrWjSGbB3hwzz';
const client = filestack.init(apikey); 

// Configure picker options
const options = {
    "accept": [
        ".pdf",
        "image/*",
        "audio/*",
        ".zip"
    ],
    "fromSources": [
        "local_file_system",
        "url",
        "webcam"
    ],
    "maxFiles": 1,
    "minFiles": 1,
    "maxSize": 10000000,
    // Add callback to handle file upload finished event
    onFileUploadFinished: function(fileData) {
        const handle = fileData.handle;
        // Generating download link using the handle
        const downloadLink = `https://cdn.filestackcontent.com/${handle}`;
        // Creating link element and add to clipboard
        const linkElement = document.createElement("a");
        linkElement.href = downloadLink;
        linkElement.innerHTML = "Download File";
        linkElement.setAttribute("target", "_blank"); // To open link in a new tab
        clipboard.innerHTML = ""; // Clear previous content
        clipboard.appendChild(linkElement);
        clipboard.setAttribute("contenteditable", false);
    }
};

// Creating a picker instance
const picker = client.picker(options);

// Function to open the picker
function openPicker() {
    picker.open();
}
