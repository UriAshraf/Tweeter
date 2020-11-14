const Renderer = function(){
   let renderPosts = function(posts){ //posts == _posts
       $("#posts").empty()
       for (let post of posts ){
        const  postBox = $(`<div class= "post" data-id = ${post.id}> <h2>${post.text}</h2></div>`)
        $("#posts").append(postBox)
       } 
    }
    return renderPosts   
}


