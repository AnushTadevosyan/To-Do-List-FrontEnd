export interface ILoginUserResponse{
    
        userExists: boolean,
        userID: number,
        accessToken: string,
        errorMessage: string
    
}

export interface IRegisterUserResponse{

    firstName: string,
    middleName: string,
    lastName: string,
    dob: string,
    email: string,
    error: boolean,
    errorMessage: string,
    employeeID: number,
    password: string
}


