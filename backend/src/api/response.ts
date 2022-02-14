interface APIResponse<T> {
    error: boolean;
    message: string;
    data: T;
}
