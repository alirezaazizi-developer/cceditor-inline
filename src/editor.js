/**
 * @licence MIT
 * @author AlirezaAzizi
 **/

/* function for not exist any tag */
function tagExist(property) {

    let tag = document.getElementById(property.tagId);

    tag.childNodes.forEach(function (e) {

    });
}

/* under function get user selection and change or add tag or remove tag or style */
function inputText(options) {
    /* this variable use for */
    let classname;
    /* under switch for assignment tag name in a variable */
    switch (options.feature) {
        case "bold":
            classname = "b";
            break;
        case "italic":
            classname = "i";
            break;
        default:
            throw ("HTML tag is not defined");
    }
    /* at first step get text value in container */
    let mainContent = document.getElementById(options.editable).innerText;
    console.log(mainContent);
    /* this condition when run if dis div content editable is true */
    if (document.getElementById(options.editable).contentEditable === "true") {

        /* second step get value selection */
        let selection = document.getSelection().getRangeAt(0);
        let selectedText = selection.extractContents();
        let tag = document.createElement("span");

        /* add style */
        tag.setAttribute("style", "background:red");
        tag.setAttribute("style", "color:#ffffff");

        /* get text content of window.selected */
        let content = selectedText.textContent;

        /* work with regex to validate user selected text with content editable text */
        let regex = new RegExp(content);
        let resultValidation = regex.test(mainContent);

        /*this condition for check top tip*/
        if (resultValidation === true) {
            /* when result validation variable is true its mine user input is right change user value */
            tag.innerHTML = selectedText.textContent;
            console.log(tag);
            selection.insertNode(tag);
            if (selectedText.childNodes[1] !== undefined) {
                console.log(selectedText.childNodes[1]);
                selectedText.childNodes[1].removeChild(selectedText);
            }

        } else {
            console.log("is false");
        }
    } else {
        console.log("please change to content editable ");
    }
}

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
    let value = prompt("Enter link");
    // let value = userInput({"title": "لطفا لینک مورد نظر را وارد کنید"});
    document.execCommand("createLink", null, value);
}

/* function strike */
function strikeThrough() {
    document.execCommand("strikeThrough");
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
function heading() {
    let value = prompt("please write your tag");
    document.execCommand("heading", false, "H3");
}

function addImage() {
    let value;
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
    saveButton.setAttribute("onclick", "saveUserInput()");
    saveButton.innerText = "ذخیره";

    let cancelButton = document.createElement("button");
    cancelButton.setAttribute("type", "button");
    cancelButton.setAttribute("id", "cancel-client-value");
    cancelButton.setAttribute("onclick", "removeUserInput()");
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

function saveUserInput() {
    console.log(getElement("editor-client-input").value);
    return getElement("editor-client-input").value;
}

/* remove editor */
function removeEditorStyle() {
    let e = getElement("editor");
    e.parentNode.removeChild(e);
}

/* end events and property document */


function addProperty(property) {
    let properties = document.createElement(property.tag);
    if (property.tag === "button") {
        properties.setAttribute("onclick", property.func);
        properties.innerText = property.ico;
        let icon = document.createElement("i");
        icon.setAttribute("class", property.ico);
        properties.appendChild(icon);
    } else if (property.tag === "select") {
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
            addProperty({"tag": "button", "func": "bold()", "ico": "icon-bold"});
            break;
        case "italic":
            addProperty({"tag": "button", "func": "italic()", "ico": "icon-italic"});
            break;
        case "underline":
            addProperty({"tag": "button", "func": "underline()", "ico": "u"});
            break;
        case "link":
            addProperty({"tag": "button", "func": "createLink()", "ico": "l"});
            break;
        case "justify-right":
            addProperty({"tag": "button", "func": "justifyRight()", "ico": "R"});
            break;
        case "justify-center":
            addProperty({"tag": "button", "func": "justifyCenter()", "ico": "C"});
            break;
        case "justify-left":
            addProperty({"tag": "button", "func": "justifyLeft()", "ico": "L"});
            break;
        case "heading":
            addProperty({"tag": "button", "func": "heading()", "ico": "H"});
            break;
        case "strikeThrough":
            addProperty({"tag": "button", "func": "strikeThrough()", "ico": "s"});
            break;
        default:
            throw "invalid property";

    }
}

/* under function is main function for run editor */
function editor(attributes) {
    if (getElement("editor") == null) {


        let editor = document.createElement("div");
        editor.setAttribute("id", "editor");
        /* append child editor */
        document.body.appendChild(editor);
        /*
         *change tag content to editable mode
         * so content become editable
        */
        let content = getElement(attributes.edit.id).contentEditable = "true";
        /* continue editor tools */
        attributes.attributes.forEach(function (properties) {
            addEditorFeature(properties);
        });
    } else {
        console.log("editor exist don't try ");
    }
}


/* content export */
function exportContent() {

    return getElement()

}

function runEditor() {
    if (getElement("main").contentEditable === "true") {
        editor({
            "edit": {
                "id": "main"
            },
            "attributes": ["bold", "italic", "underline", "link", "justify-center", "justify-right", "justify-left", "heading", "strikeThrough"]
        });
    } else {
        getElement("main").contentEditable = "false";
        //removeEditorStyle();
    }


}

runEditor();
