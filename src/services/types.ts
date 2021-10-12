export interface UserConfig {
    username_or_email: string;
    password: string;
}

export interface UserSessionData {
    userId: string | null;
    sessionId: string | null;
}

export interface LoginResponse {
    user_id: string;
    session_id: string;
}