import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

const Layout = ({ children, ...pageProps }) => {
  const router = useRouter();
  const isHome = router.pathname === "/" || router.pathname === router.basePath;

  return (
    <div>
      {!isHome && <div className={styles.header}>
        This is {isHome.toString()} and {pageProps.pageName}
      </div>}
      <main>{children}</main>
    </div>
  );
};
export default Layout;