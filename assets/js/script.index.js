function savePost(){
    const title = document.getElementById("").value;
    const resume = document.getElementById("").value;
    const publisher = document.getElementById("").value;
    const date  = document.getElementById("").value;

    if(title && resume && publisher && date){
storePost(title, resume , publisher, date);
    }
}



function storePost(title, resume, publisher, date) {
    const post = {

        title,
        resume,
        publisher,
        date
    };


    posts.push(post);
    
}