import { posts } from "./data.js"

let body = document.getElementById("main")

renderPosts()

function renderPosts() {
    let html =""
    let likedIconClass = ""
    
    for (let item of posts) {
        
        item.isLiked ? likedIconClass = "liked" : likedIconClass = ""
 
        html += `
  
                <div class="details-box">
                    <img class="profile-img" src="${item.avatar}">
                    <div class="info">
                        <p><b>${item.name}</b></p>
                        <p>${item.location}</p>
                    </div>
                </div>
                <img data-dlike=${item.username} class="main-img" src="${item.post}">
                <div class="footer">
                    <div class="footer-container">
                        <img data-slike=${item.username} class="profile-img ${likedIconClass}" src="images/icon-heart.png">
                        <img class="profile-img" src="images/icon-comment.png">
                        <img class="profile-img" src="images/icon-dm.png">
                    </div>
                    <p class="bold" id="${item.username}">${item.likes} likes</p>
                    <p><b>${item.username}</b> ${item.comment}</p>
                </div>
        `
    }
    
    body.innerHTML = html
}



body.addEventListener("click", (e)=> {
    if (e.target.dataset.slike) {
        increaseLikes(e.target.dataset.slike)
    }
})


body.addEventListener("dblclick", (e)=> {
        if (e.target.dataset.dlike) {
        increaseLikes(e.target.dataset.dlike)
    }
})


function increaseLikes(id) {
    const targetPost = posts.filter(post => {
        return post.username === id
    })[0]
    
    targetPost.isLiked = !targetPost.isLiked
    
    if (targetPost.isLiked) {
        targetPost.likes++
    } else {
        targetPost.likes--
    }
    
    renderPosts()
}


