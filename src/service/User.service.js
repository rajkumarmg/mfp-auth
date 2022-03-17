import {Http} from "../Http";
export const login = async (data) => {
    return Http.post("/users/login", data);
};
export const getAllUsers = () => {
    return Http.get("/user");
};
