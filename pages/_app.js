import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min';
import '../styles/globals.css'
import Layout from "../components/layout/layout";

function MyApp({Component, pageProps}) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp
