import getUser from "./get-user";
import getUsers from "./get-users";
import createUser from "./create-user";
import updateUser from "./update-user";
import deleteUser from "./delete-user";
import login from "./login";

export default {
    paths: {
        '/api/users': {
            ...getUsers,
            ...createUser
        },
        '/api/users/{id}': {
            ...getUser,
            ...updateUser,
            ...deleteUser
        },
        '/api/login': {
            ...login
        }
    }
}
