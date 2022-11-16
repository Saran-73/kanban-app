// login user
// POST 
export const LOGIN_USER_API = `/user/login`

// register user
// POST 
export const REGISTE_USER_API = '/user'
 
// check is user authenticated
// need token authentication
// GET
export const IS_USER_AUTHENTICATED_API = (username) =>  `/user/${username}`

// get goals
// need token authentication
// GET
export const GET_GOALS_API = '/goals'

// create goals 
// need token authentication
// POST
export const CREATE_GOAL_API = '/goals'

// edit goal
// need token authentication
// PUT
export const UPDATE_GOAL_API =(id) => `/goals/${id}`

// delete goal
// need token authentication
// DELETE
export const DELETE_GOAL_API = (id) => `/goals/${id}`
