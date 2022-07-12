class MyDatabaseError extends Error{ // Extende de Error

    constructor(
        public message: string,
        public error: any
    ){
        super(message)
    }
}

export default MyDatabaseError;