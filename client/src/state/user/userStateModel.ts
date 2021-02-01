import { IUser } from "../../models/userModel";

export type UserState = {
    user?: IUser;
    loading: boolean;
    error?: string;
};

export type UserRegisterState = {
    userInfo?: IUser;
    loading: boolean;
    error?: string;
};

export type UserDetailsState = {
    userDetails?: IUser;
    loading: boolean;
    error?: string;
};

export type UserAction = {
    type: string;
    user?: IUser;
    error?: string;
};

export type UserRegisterAction = {
    type: string;
    userInfo?: IUser;
    error?: string;
};

export type UserDetailsAction = {
    type: string;
    userDetails?: IUser;
    error?: string;
};

export type UserDispatchType = (args: UserAction) => UserAction;

export type UserRegisterDispatchType = (args: UserRegisterAction) => UserRegisterAction;

export type UserDetailsDispatchType = (args: UserDetailsAction) => UserDetailsAction;
