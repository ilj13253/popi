
import Header from '../Components/Header'
import '../pages/global.css'
export default function MyApp({Component,pageProps}){
return <> <Header/> <hr/><main><Component {...pageProps}/></main><hr/><footer>Подвал</footer></>
}
