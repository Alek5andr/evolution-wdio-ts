class ErrorThrower {
    throwIllegalArgumentException(argument: string): Error {
        throw new Error('No such argument is implemented: ' + argument);
    }
}

export default new ErrorThrower();