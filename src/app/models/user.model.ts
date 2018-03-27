export class User {
    constructor(
        public name: string,
        public lastName: string,
        public email: string,
        public pass: string,
        public img?: string,
        public role?: string,
        public _id?: string,
    ) {}
}
