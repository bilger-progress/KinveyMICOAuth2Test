const Index = (function () {
    const Logic = {
        init() {
            const self = this;
            Kinvey.init({
                appKey: 'xxx',
                appSecret: 'xxx'
            });
            document.getElementById('Login').addEventListener('click', function () {
                self.login();
            });
            console.log('Initialized!');
        },

        login() {
            Kinvey.User.logout();
            Kinvey.User.loginWithMIC(
                'http://localhost:5000',
                undefined,
                { micId: 'xxx' }
            )
                .then(function (user) {
                    console.log(user);
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    };

    return {
        init() {
            Logic.init();
        }
    }
})();

document.addEventListener('DOMContentLoaded', function (event) {
    Index.init();
});