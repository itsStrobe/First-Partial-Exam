function deleteItem(){
    let commentsSection = document.getElementById("seccionComments");

    commentsSection.addEventListener('click', (event) =>{
        event.preventDefault();

        if(event.target.matches('.comment_delete')){
            console.log("Delete Comment");

            let userCommer = event.target.parentElement;

            // Self delete.
            userCommer.parentElement.removeChild(userCommer);
        }
    });
}

function addItem(){
    let itemSubmit = document.getElementById("submit");

    itemSubmit.addEventListener('click', (event) =>{
        event.preventDefault();

        let nameField = document.getElementById("userName");
        let commentField = document.getElementById("userComment");
        let commentsSection = document.getElementById("seccionComments");

        if(nameField.value == "" || nameField.value == null){
            console.log("No name provided.");
            return;
        }
        if(commentField.value == "" || commentField.value == null){
            console.log("No comment provided.");
            return;
        }

        commentsSection.innerHTML += 
        `
            <div class="commentArea">
                <h5>${nameField.value}</h5>
                <p>${commentField.value}</p>
                <button class="comment_delete">Delete</button>
            </div>

        `

        // Delete field contents for UX.
        nameField.value = "";
        commentField.value = "";
    });
}


function init(){
    deleteItem();
    addItem();
}

init();