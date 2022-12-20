// login user
// POST 
export const LOGIN_USER_API = `/user/login`

// register user
// POST 
export const REGISTE_USER_API = '/user'
 
// check is user authenticated
// need token authentication
// GET
export const IS_USER_AUTHENTICATED_API = `/user/getuser`

// get tasks
// need token authentication
// GET
export const GET_TASKS_API =(id) => `/tasks/${id}`;

// // edit tasks
// // need token authentication
// // PUT
export const MAKE_UPDATE_TASKS_API = (taskId)=> `/tasks/${taskId}`

// // create tasks 
// // need token authentication
// // POST
// export const CREATE_GOAL_API = '/tasks'

// // edit task
// // need token authentication
// // PUT
// export const UPDATE_GOAL_API =(id) => `/tasks/${id}`

// // delete task
// // need token authentication
// // DELETE
// export const DELETE_GOAL_API = (id) => `/tasks/${id}`
