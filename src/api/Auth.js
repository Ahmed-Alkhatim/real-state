

class AuthApiClass extends EventTarget {
    constructor() {
        super();
    }

    on = (event, callback) => { this.addEventListener(event, callback);}
    login = async () => {
        const { response, error, getData } = useFetcher(useGet)

        await getData('/login')

        if (response && response.status == 200) {
            this.dispatchEvent(
                new CustomEvent(
                    'loggedIn',
                    { detail: response.data }
                )
            )
        }

        else if( error && error.status == 404) {
            this.dispatchEvent(
                new CustomEvent(
                    'loginFailed',
                    { detail: response.data }
                )
            )
        }
    }
}


const AuthApi = new AuthApiClass()