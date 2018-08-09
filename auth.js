module.exports = (app) => {
    return api = {
        isValid (credentials) {
            return true
        },
        authentication (credentials) {
            if (this.isValid(credentials)) {
                console.log(credentials.username);
            }
        }
    };
}