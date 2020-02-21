export interface IApiResponse {
    responseCode: string;
    data?: object;
    message?: string;
    error?: any;
}