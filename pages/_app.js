import '../src/styles/globals.scss'
import {Provider} from "react-redux";
import {store} from "../src/store/store";
import {ThemeProvider} from 'next-themes'

function MyApp({Component, pageProps}) {
    return <ThemeProvider attribute="class">
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </ThemeProvider>

}

export default MyApp
