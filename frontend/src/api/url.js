// login user
// POST
export const LOGIN_USER_API = `/user/login`;

// register user
// POST
export const REGISTE_USER_API = "/user";

// check is user authenticated
// need token authentication
// GET
export const IS_USER_AUTHENTICATED_API = `/user/getuser`;

// get all tasks
// need token authentication
// GET
export const GET_TASKS_API = "/tasks";

// get all tasks
// need token authentication
// GET
export const GET_ALL_SECTIONS_API = "/section/";

// create new section
//  need token authentication
//  POST
export const CREATE_NEW_SECTION = "/section/create-new";

// create new section
//  need token authentication
//  PATCH
export const UPDATE_SECTION_DATA = "/section/update";

// get all tasks from single section - id is section id
//  need token authentication
//  POST
export const GET_TASKS_FOR_SINGLE_SECTION = (id) =>
  `tasks/get-sections-tasks/${id}`;

// create new task in paritcular section using section id
// need token authentication
//  POST
export const CREAT_NEW_TASK = "section/task/create-task";

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
