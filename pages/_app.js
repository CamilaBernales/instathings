import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase';
import useAuth from '../hooks/useAuth';
const MyApp = props => {

const user = useAuth();
const {Component, pagePros} = props
    return(
                <FirebaseContext.Provider
                    value={{
                        firebase,
                        user
                    }}
                    >
                    <Component {...pagePros} />
                </FirebaseContext.Provider>
    )
}

export default MyApp