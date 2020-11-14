
const Tweeter = function() {
    let _posts = [{
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c1", text: "Don't wory second poster, you'll be first one day." },
            { id: "c2", text: "Yeah, believe in yourself!" },
            { id: "c3", text: "Haha second place what a joke." }
        ]
    }]
    let postIdCounter = _posts.length
    let commentIdCounter = 1 
    
           

    const getPosts = function(){

        return _posts
    }  

    const addPost = function(text){
        let post = {
            text : text,
            id : "p" + (_posts.length +1) ,
            comments: []
        }
        _posts.push(post)
        
    }

    const removePost = function(postID) {
        for (let i = 0; i < _posts.length; i++){
            if (_posts[i].id == postID ){
               _posts.splice(i,1)
            }
        }     
            
    }

    const addComment = function (postID, comment) {
            
        for (let i = 0; i < _posts.length; i++){
            let post = _posts[i]
            if (post.id == postID ){
                const newComment = {
                    id :"c" + (post.comments.length + 1),
                    text : comment
                }

                post.comments.push(newComment)   
                
            } 
        }   
        
         commentIdCounter ++
    }

    const removeComment = function(postID , commentID){
        for (let i = 0; i < _posts.length; i++){
            if (_posts[i].id == postID ){
                for ( let n = 0; n < _posts[i].comments.length; n++){
                    
                    if (_posts[i].comments[n].id == commentID){
                        
                            _posts[i].comments.splice(n,1)
                         
                    }   
                }
            }
        }
    }

    return {
            getPosts,
            addPost ,
            removePost : removePost,
            addComment : addComment,
            removeComment : removeComment 

    }

 }    

//  const tweeter = Tweeter ()


 
// //  tweeter.addPost("text")
//  tweeter.addPost("text")
//  tweeter.addComment("p2", "hey there")
//  tweeter.addComment("p1", "hey there")
//  tweeter.removeComment("p1" , "c1")


 
//  console.log(tweeter.getPosts())


