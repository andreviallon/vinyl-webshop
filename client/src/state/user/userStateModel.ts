import { IUserOptions } from "@testing-library/user-event";
import { IUser } from "../../models/userModel";

export type UserState = {
    user?: IUser;
    loading: boolean;
    error?: string;
};

export type UserAction = {
    type: string;
    user?: IUser;
    error?: string;
};

export type UserDispatchType = (args: UserAction) => UserAction