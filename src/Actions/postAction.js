import { FETCH_POSTS, NEW_POST } from './actionTypes';

export const fetchPosts = () => dispstch => {
    console.log('action  fetching')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispstch({
            type: FETCH_POSTS,
            data: posts
        }));
}

export const newPost =  postData => dispstch => {
    console.log(postData);
    fetch('https://jsonplaceholder.typicode.com/posts',{
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(postData)
          })
        .then(res => res.json()).then(post =>dispstch({
            type: NEW_POST,
            data: post
        }));
}