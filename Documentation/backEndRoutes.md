*users
    *GET /users/:id => get a single users info (returns userName and email)
    *POST /users => create a new user (returns userId and token)
    *POST /users/token => verifies user login and returns token for the user
    *PUT /users/:id => update a users info (returns full user info)
    *DELETE /users/:id => deletes a user