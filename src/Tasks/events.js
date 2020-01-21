/* this class for handel events */


export default class editorEvent {
    /* event for bold*/
    bold() {
        editorWorkstation.editorOption({feature: "bold", editable: "main"});
    }

    /* func for italic */
    italic() {
        editorWorkstation.editorOption({feature: "italic", editable: "main"});
    }

    /* function create for external link */
    createLink() {
        let value = prompt("Enter link");
        // let value = userInput({"title": "لطفا لینک مورد نظر را وارد کنید"});
        document.execCommand("createLink", null, value);
    }

    /* function strike */
    strikeThrough() {
        editorWorkstation.editorOption({feature: "strike", editable: "main"});
    }

    /* function for justifies */
    justifyRight() {
        document.execCommand("justifyRight");
    }

    justifyLeft() {
        document.execCommand("justifyLeft");
    }

    justifyCenter() {
        editorWorkstation.editorOption({feature:"justify-center",editable:"main"});
    }

    /* font family */
    fontFamily() {

    }

    /* function underline */
    underline() {
        editorWorkstation.editorOption({feature: "underline", editable: "main"})
    }

    /* function unlink */
    unlink() {
        document.execCommand("unlink");
    }

    /* func background color */
    backgroundColor(value) {
        document.execCommand("backColor", null, value);
    }

    /* function content color */
    color(value) {
        document.execCommand("foreColor", null, value);
    }

    /* function for heading */
    heading() {
        let value = prompt("please write your heading");
        editorWorkstation.editorOption({feature: value, editable: "main"});
    }

    addImage() {
        let value;
    }

}