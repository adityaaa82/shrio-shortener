export interface authUser {
    email: string;
    password: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Success {
    success: boolean;
    message: string;
    toPass?: any;
}

export interface user {
    email: string;
    id: string;
}

export type FunctionResponse = Success;