
import { useEffect } from "react";
import '@/styles/assets/css/bootstrap.min.css'
import '@/styles/assets/css/bootstrap-extended.css'
import '@/styles/assets/css/style.css'
// import '@/styles/assets/css/header-colors.css'
// import '@/styles/assets/css/pace.min.css'
// import '@/styles/assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css'
// import '@/styles/assets/plugins/metismenu/css/metisMenu.min.css'
import { useRouter } from 'next/router'
import Layout from './components/layout'

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    var aScript = document.createElement('script');
     aScript.type = 'text/javascript';
    //  aScript.src = "";
    require('@/styles/assets/js/bootstrap.bundle.min.js')
     document.head.appendChild(aScript);
     aScript.onload = () => {
     };
  }, [])
    const router = useRouter()
  if((router.pathname === '/login') || (router.pathname === '/registrasi')){
    return <Component {...pageProps} />
  }else{
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
