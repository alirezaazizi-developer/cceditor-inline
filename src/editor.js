/* event for use files */
function bold() {
    document.execCommand("bold");
}

/* func for italic */
function italic() {
    document.execCommand("italic");
}

/* function create for external link */
function createLink() {

    let value = userInput({"title": "لطفا لینک مورد نظر را وارد کنید"});
    document.execCommand("createLink", null, value);
}

/* function strike */
function strikeThrough(data) {
    let selected = window.getSelection();
    let strike = selected.toString();
    strike = strike.strike();
    selected.toString().replace(selected, select);
}

/* function for justifies */
function justifyRight() {
    document.execCommand("justifyRight");
}

function justifyLeft() {
    document.execCommand("justifyLeft");
}

function justifyCenter() {
    document.execCommand("justifyCenter");
}

/* font family */
function fontFamily() {

}

/* function underline */
function underline() {
    document.execCommand("underline");
}

/* function unlink */
function unlink() {
    document.execCommand("unlink");
}

/* func background color */
function backgroundColor(value) {
    document.execCommand("backColor", null, value);
}

/* function content color */
function color(value) {
    document.execCommand("foreColor", null, value);
}

/* function for heading */
function heading(value) {
    document.execCommand("heading", null, value);
}

function addImage() {

}

/* function add editor */


/* add get id  */
function getElement(id) {
    return document.getElementById(id);
}

/* function http validation */

function httpValidator(input) {
    let regex = /^((http|https)+)$/;
    // when matched return true
    // else return false
}

/* function get  user input */

function userInput(values) {
    let frame = document.createElement("div");
    frame.setAttribute("id", "user-input");
    /* create title for user input */
    let title = document.createElement("div");
    title.setAttribute("id", "user-input-title");
    title.innerText = values.title;
    /* create input for users */
    let input = document.createElement("div");
    input.setAttribute("id", "main-user-input");
    /**/
    let inputTag = document.createElement("input");
    inputTag.setAttribute("id", "editor-client-input");

    /* btn for run user commands */
    let saveButton = document.createElement("button");
    saveButton.setAttribute("type", "button");
    saveButton.setAttribute("id", "save-client-value");
    saveButton.innerText = "ذخیره";

    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("id", "cancel-client-value");
    cancelButton.innerText = "خروج";

    /* append child */

    document.body.appendChild(frame);
    getElement("user-input").appendChild(title);
    getElement("user-input").appendChild(input);
    input.appendChild(inputTag);
    input.appendChild(saveButton);
    input.appendChild(cancelButton);

}


/* function remove user input this function when effected user input window opened */

function removeUserInput() {
    let targetElement = getElement("user-input");
    targetElement.parentNode.removeChild(targetElement);
}


/* end events and property document */


function addProperty(property) {
    let properties = document.createElement(property.tag);
    if (property.tag === "button") {
        properties.setAttribute("onclick", property.func);
        properties.innerText = property.ico;
    }else if(property.tag === "select" ){
        property.select.forEach(function (value) {
            properties.innerHTML += value;
        });
    }
    /* append child */
    getElement("editor").appendChild(properties);
}

/* this is a switch  */

function addEditorFeature(feature) {
    switch (feature) {
        case "bold":
            addProperty({"tag": "button", "func": "bold()", "ico": "b"});
            break;
        case "italic":
            addProperty({"tag": "button", "func": "italic()", "ico": "i"});
            break;
        case "underline":
            addProperty({"tag": "button", "func": "underline()", "ico": "u"});
            break;
        case "link":
            addProperty({"tag": "button", "function": "createLink()", "ico": "l"});
            break;
        case "justify-right":
            addProperty({"tag": "button", "function": "justifyRight()", "ico": "R"});
            break;
        case "justify-center":
            addProperty({"tag": "button", "function": "justifyCenter()", "ico": "C"});
            break;
        case "justify-left":
            addProperty({"tag": "button", "function": "justifyLeft", "ico": "L"});
            break;
        default:
            throw "invalid property";

    }
}

/* under function is main function for run editor */
function editor(attributes) {
    let editor = document.createElement("div");
    editor.setAttribute("id", "editor");
    /* append child editor */
    document.body.appendChild(editor);
    /*
     *change tag content to editable mode
     * so content become editable
    */
    let content = getElement(attributes.edit.id);
    let addAttribute = document.createAttribute("contenteditable");
    addAttribute.value = "true";
    content.setAttributeNode(addAttribute);
    /* continue editor tools */
    attributes.attributes.forEach(function (properties) {
        addEditorFeature(properties);
    });


}


/* content export */
function exporContent() {

}

editor({
    "edit": {
        "id": "main"
    },
    "attributes": ["bold", "italic", "underline", "link"]
});


