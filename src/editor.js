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
function editorOption(options) {

    /* at first step get text value in container */
    let mainContent = document.getElementById(options.editable).innerText;
    // console.log(mainContent);
    /* this condition when run if dis div content editable is true */
    if (document.getElementById(options.editable).contentEditable === "true") {

        /* second step get value selection */
        let selection = document.getSelection().getRangeAt(0);
        let selectedText = selection.extractContents();

        /* check text selected is null*/


        /* generate tag for add style and feature */
        /* init a variable for assignment tag and tag properties and attribute */
        let tag;
        if (options.feature == "h1") {
            console.log("heading");
        } else {

            tag = document.createElement("span");
            /* add style */
            /* this switch can add style to text editor*/
            switch (options.feature) {
                /* when is bold */
                case "bold":
                    tag.style.fontWeight = "bold";
                    break;
                case "italic":
                    tag.style.fontStyle = "italic";
                    break;
                case "underline":
                    tag.style.textDecoration = "underline";
                    break;
                case "justify-center":
                    // tag.style.
                    break;
                case "strike":
                    tag.style.textDecoration = "line-through";
                    break;
                default:
                    throw ("have Error in editorOption function in classname variable");

            }

        }

        /* get text content of window.selected */
        let content = selectedText.toString();

        /* work with regex to validate user selected text with content editable text */
        let regex = new RegExp(content);
        let resultValidation = regex.test(mainContent);

        /*this condition for check top tip*/
        if (resultValidation === true) {
            /* when result validation variable is true its mine user input is right change user value */
            tag.innerHTML = selectedText.textContent;
            selection.insertNode(tag);
            console.log(selectedText.childNodes[0].wholeText);
            if (selectedText.childNodes[1] !== undefined) {
                console.log(selectedText.childNodes[1]);
                selectedText.childNodes[1].removeChild(selectedText);
            }

        } else {
            throw ("in editorOption function resultValidation variable return false please try to edit");
        }
    } else {
        throw ("please change to content editable ");
    }
}

/* event for use files */
function bold() {
    editorOption({feature: "bold", editable: "main"});
}

/* func for italic */
function italic() {
    editorOption({feature: "italic", editable: "main"});
}

/* function create for external link */
function createLink() {
    let value = prompt("Enter link");
    // let value = userInput({"title": "لطفا لینک مورد نظر را وارد کنید"});
    document.execCommand("createLink", null, value);
}

/* function strike */
function strikeThrough() {
    editorOption({feature: "strike", editable: "main"});
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
    editorOption({feature: "underline", editable: "main"})
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
    let option = document.createElement(property.tag);
    if (property.tag === "button") {
        option.setAttribute("onclick", property.func);
        let icon = document.createElement("i");
        icon.setAttribute("class", property.ico);
        option.appendChild(icon);
    } else if (property.tag === "select") {
        property.select.forEach(function (value) {
            option.innerHTML += value;
        });
    }
    /* append child */
    getElement("editor").appendChild(option);
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
            addProperty({"tag": "button", "func": "underline()", "ico": "icon-underline"});
            break;
        case "link":
            addProperty({"tag": "button", "func": "createLink()", "ico": "icon-link"});
            break;
        case "justify-right":
            addProperty({"tag": "button", "func": "justifyRight()", "ico": "icon-align-right"});
            break;
        case "justify-center":
            addProperty({"tag": "button", "func": "justifyCenter()", "ico": "icon-align-center"});
            break;
        case "justify-left":
            addProperty({"tag": "button", "func": "justifyLeft()", "ico": "icon-align-left"});
            break;
        case "heading":
            addProperty({"tag": "button", "func": "heading()", "ico": "icon-header"});
            break;
        case "strikeThrough":
            addProperty({"tag": "button", "func": "strikeThrough()", "ico": "icon-strike"});
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
