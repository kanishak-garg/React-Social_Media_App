import { UPDATE_POSTS } from './actionTypes';
import { tempdata } from '../data/post';
// IF API IS WORKING
// export function fetchPosts() {
//   return (dispatch) => {
//     const url = 'http://localhost:8000/api/v2/posts/';
//     fetch(url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log('data', data);
//         dispatch(updatePosts(data.posts));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// }

// IF API NOT WORKING
export function fetchPosts() {
  return (dispatch) => {
    dispatch(updatePosts(tempdata));
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
