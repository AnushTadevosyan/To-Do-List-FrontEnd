export class RegisterUserDTO {
    constructor(
        public firstName: string, 
        public middleName: string,
        public lastName: string,
        public dob: string,
        public email: string,
        public password: string
        ) {}
  }


 