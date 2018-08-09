module.exports = (app) => {
    return api = {
        isValid (credentials) {
            return 1 === 1 ? true : false
        },
        authentication (credentials) {
            if (this.isValid(credentials)) {
                console.log(credentials.username);
            }
        }
    };
}
