
let post1 = {
  id: 1,
  title:"post number 1",
  name: "david",
  email: "kkkk@kk.kk",
  content: "helo world this is post number one",
};
let post2 = {
  id: 2,
  title:"post number 2",
  name: "david",
  email: "kkkk@kk.kk",
  content: "helo world this is post number tow",
};
let post3 = {
  id: 3,
  title:"post number 3",
  name: "david",
  email: "kkkk@kk.kk",
  content: "helo world this is post number three",
};




let comment1 = {
  id: 1,
  name: "david",
  email: "kkkk@kk.kk",
  content: "this is comment about post 1",
  postID:1
};

let comment2 = {
  id: 2,
  name: "david",
  email: "kkkk@kk.kk",
  content: "this is comment about post 1",
  postID: 1,
};

let comment3 = {
  id: 3,
  name: "david",
  email: "kkkk@kk.kk",
  content: "this is comment about post 2",
  postID: 2,
};

let comment4 = {
  id: 4,
  name: "david",
  email: "kkkk@kk.kk",
  content: "this is comment about post 3",
  postID: 3,
};

let comment5 = {
  id: 5,
  name: "david",
  email: "kkkk@kk.kk",
  content: "this is comment about post 1",
  postID: 1,
};

let comment6 = {
  id: 6,
  name: "david",
  email: "kkkk@kk.kk",
  content: "this is comment about post 2",
  postID: 2,
};

let comment7 = {
  id: 7,
  name: "david",
  email: "kkkk@kk.kk",
  content: "this is comment about post 3",
  postID: 3,
};


function pushTOarray(){

}

let posts = [post1,post2,post3];
let comments = [comment1,comment2,comment3,comment4,comment5,comment6,comment7];

let promiseofposts = new Promise((resolve) => {
    resolve(posts);
});




let promiseOFcomments = new Promise((resolve) => {
    resolve(comments);
});

promiseofposts.then(arrayOFtowObject).then(printpostTOhtml);

function arrayOFtowObject(postsANDcomments){
   return postsANDcomments =[posts, comments];
};


function printpostTOhtml(postsANDcomments){
    let html = "";
 postsANDcomments[0].forEach((post) => {
  html += `<h1> ${post.title} <h1>`
  postsANDcomments[1].forEach((comment) => {
    if (comment.postID == post.id) {
      
       html += `<p> ${comment.content} <p>`;
    }
  })
  
 });
 document.body.innerHTML = html;

    
      
}


