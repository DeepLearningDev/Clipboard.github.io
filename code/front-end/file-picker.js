// file-loading.js
const clipboard = document.querySelector(".input-box");

// Initialize Filestack client with your API key
const apikey = 'AgdxU3Dh0QrWjSGbB3hwzz';
const client = filestack.init(apikey); 

// Configure picker options
const options = {
    "accept": [
        ".pdf",
        "image/*",
        "audio/*"
    ],
    "fromSources": [
        "local_file_system",
        "url",
        "webcam"
    ],
    "maxFiles": 1,
    "minFiles": 1,
    "maxSize": 10000000
};

// Creating a picker instance
const picker = client.picker(options);

// Function to handle files selected/uploaded by the user
function handleFiles(files) {
    console.log("Files selected/uploaded:", files);
    function handleFiles(files) {
        clipboard.innerHTML = "";
    
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let downloadLink = document.createElement("a");
            downloadLink.href = file.url; // Assuming Filestack provides the download URL directly
            downloadLink.download = file.name;
            downloadLink.innerText = "Download: " + file.name;
            clipboard.appendChild(downloadLink);
        }
    }
}

// Event listener for when files are selected/uploaded
picker.on('fileSelected', function(response) {
    handleFiles(response.filesUploaded);
});

// Function to open the picker
function openPicker() {
    picker.open();
}
