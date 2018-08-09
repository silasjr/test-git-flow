module.exports = (app) => {
    return api = {
        authentication (credentials) {
            if (isValid(credentials)) {
                console.log(credentials.username);
            }
        }
    };
}