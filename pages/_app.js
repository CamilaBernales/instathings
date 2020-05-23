import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase';

const MyApp = props => {

const {Component, pagePros} = props
    return(
                <FirebaseContext.Provider
                    value={{
                        firebase
                    }}
                    >
                    <Component {...pagePros} />
                </FirebaseContext.Provider>
    )
}

export default MyApp