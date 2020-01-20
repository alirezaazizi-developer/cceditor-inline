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