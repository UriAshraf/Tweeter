
const Tweeter = function() {
    let _posts = []
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
                let newComment = {
                    id :"c" + commentIdCounter ,
                    text : comment
                }

                post.comments.push(newComment)   
                
            } 
        }   
        
        commentIdCounter ++
    }

    const removeComment = function(postID , commentID) {
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
            getPosts: getPosts,
            addPost : addPost ,
            removePost : removePost,
            addComment : addComment,
            removeComment : removeComment 

    }

 }    

 const tweeter = Tweeter ()
 const tweeter2 = Tweeter ()

 
 tweeter.addPost("text")
 tweeter.addPost("text")
 tweeter.addComment("p1", "hey there")
 tweeter.addComment("p1", "hey there")
//  tweeter.removeComment("p1" , "c1")


 
 console.log(tweeter.getPosts())

 
