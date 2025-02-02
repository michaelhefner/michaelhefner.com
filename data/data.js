const data =  [
    {
        id: 'clipboard-copy',
        title: "Clipboard Copy",
        description: "Create a button that copies the text from an input field to the clipboard.",
        attributionText: "w3schools",
        attributionURL: "https://www.w3schools.com/howto/howto_js_copy_clipboard.asp",
        code: 
`function myFunction() {
    var copyText = document.getElementById("your-input-id");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}
  
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}`,
    },
    {
        id: 'get-cookie',
        title: "Get Cookie",
        description: "Function to get a cookie by name from the document.",
        attributionText: "w3schools",
        attributionURL: "https://www.w3schools.com/js/js_cookies.asp",
        code: 
`function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}`,
    },
    {
        id: 'set-cookie',
        title: "Set Cookie",
        description: "Function to set a cookie in the document using a name, value, and duration.",
        attributionText: "w3schools",
        attributionURL: "https://www.w3schools.com/js/js_cookies.asp",
        code: 
`function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}`,
    },
];

export default data;