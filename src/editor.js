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

    let value = userInput({"title":"لطفا لینک مورد نظر را وارد کنید" ,"saveTitle": "ذخیره" , "cancelTitle": "لغو" });
    document.execCommand("createLink", null, value);
}
/* function strike */
function strikeThrough(data) {
    let selected = window.getSelection();
    let strike = selected.toString();
    strike = strike.strike();
    selected.toString().replace(selected , select);
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
    let title = document.createElement("span");
    title.setAttribute("id", "user-input-title");
    title.innerText = values.title;
    getElement("user-input").appendChild(title);
    /* create input for users */
    let input = document.createElement("span");
    input.setAttribute("id", "main-user-input");
    /**/
    let inputTag = document.createElement("input");
    inputTag.setAttribute("id", "editor-client-input");
    input.appendChild(inputTag);
    /* btn for run user commands */
    let saveButton = document.createElement("button");
    saveButton.setAttribute("type", "button");
    saveButton.setAttribute("id", "save-client-value");
    saveButton.innerText = values.saveTitle;
    input.appendChild(saveButton);
    let cancelButton = document.createElement("button");
    saveButton.setAttribute("type", "button");
    saveButton.setAttribute("id", "cancel-client-value");
    saveButton.innerText = values.cancleTitle;
    input.appendChild(saveButton);
    /* return values */

    getElement("save-client-value").addEventListener("click" , function () {
        /* return user input value */
        let value = getElement("editor-client-input").value;

        return value;

    });

    /* append child */
    getElement("user-input").appendChild(title);
    getElement("user-input").appendChild(input);
    document.body.appendChild(frame);
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
        properties.innerText = "text";
    }
    /* append child */
    getElement("editor").appendChild(properties);
}

/* this is a switch  */

function addEditorFeature(feature) {
    switch (feature) {
        case "bold":
            //addProperty({"tag": "button", "func": bold()});
            alert("added");
            break;
        case "italic":
            addProperty({"tag": "button", "func": italic()});
            break;
        case "underline":
            addProperty({"tag": "button", "func": underline()});
            break;
        case "link":
            addProperty({"tag": "button", "function": createLink()});
            break;
        case "justify-right":
            addProperty();
            break;
        case "justify-center":
            addProperty();
            break;
        case "justify-left":
            addProperty();
            break;
        default:
            throw "invalid property";

    }
}
/* under function is main function for run editor */
function editor(attributes) {
    let editor = document.createElement("span");
    editor.setAttribute("id" , "editor");
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
    editor.innerHTML = attributes.attributes.forEach(function (properties) {
        addEditorFeature(properties);
    });


}
editor({
    "edit":{
        "id":"main"
    } ,
    "attributes":["bold" , "italic"]
});