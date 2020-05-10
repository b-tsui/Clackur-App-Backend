*users
    *GET /users/:id => get a single users info (returns userName and email)
    *POST /users => create a new user (returns userId and token)
    *POST /users/token => verifies user login and returns token for the user
    *PUT /users/:id => update a users info (returns full user info)
    *DELETE /users/:id => deletes a user
*posts
    *GET /posts => gets list of all posts
    *POST /posts/upload => create a new post (also takes care of uploading image to aws)
    *PUT /posts/:id => update a post
    *PUT /posts/:id/like => adds like to a post
    *PUT /posts/:id:/dislike => adds dislike to a post
    