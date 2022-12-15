export default class Comments {
    constructor() {
        load();
    }

    load() {
        this.commentsList = [];
        let jsonString = localStorage.getItem("commentsList");
        if(jsonString !== null) {
            this.commentsList = JSON.parse(jsonString);
        }
    }

    save() {
        let jsonString = JSON.stringify(this.commentsList);
        localStorage.setItem("commentsList", jsonString);
    }

    showCommentsList() {
        let commentsHTML = "";
        this.commentsList.forEach(comment => {
            commentsHTML += `
                             <h3>${comment.name}</h3>
                             <h4>${comment.date}</h4>
                             <p>${comment.content}</p>`;
        });
    }
}