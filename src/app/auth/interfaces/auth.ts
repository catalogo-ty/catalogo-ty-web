export interface LoginResponse {
    user:  User;
    token: string;
}

export interface User {
    name:   string;
    email:  string;
    role:   string;
    status: boolean;
    uid:    string;
}
