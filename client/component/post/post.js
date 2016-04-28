/**
 * Created by jack on 16-4-27.
 */

import posts from '../../app/posts';

export default class PostService {
	constructor() {

	}

	static queryPost(postName) {
		// tail call optimisation
		return new Promise((resolve, reject) => {
			let post;
			// using setTimeout to simulate call back end function
			setTimeout(() => {
				post = posts.filter(item => {
					return item.name === postName;
				});
				post.length ? resolve({post: post[0]}) : reject('Post not found.');
			}, 50);
		});
	}
}
