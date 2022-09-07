export interface ILoginUserResponse{
    
        userExists: boolean,
        userID: number,
        accessToken: string,
        errorMessage: string
    
}