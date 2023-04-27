import Image from "next/image";
import styles from "../styles/index.module.css";
import Link from "next/link";
import carouselPic1 from "../public/images/gallery/sweet-sting-sisterhood.jpg";
import carouselPic2 from "../public/images/gallery/silly-sydney.jpg";
import carouselPic3 from "../public/images/gallery/big-joe-hammer.jpg";

const Index = () => {
  return (
    <div id={styles.page}>
      
      <div id={styles.landingArea}>
        <div id={styles.titleArea}>
          <h1 id={styles.title}>cute & quirky comics</h1>
          <h2 id={styles.subtitle}>for friends, family, coworkers, and so on.</h2>
        </div>
        <Link className={styles.landingAreaLink} href={"/gallery"}>Gallery</Link>
        <Image id={styles.activeCarouselImg} className={styles.landingAreaCarouselImg} src={carouselPic1} alt="comic about the challenges of sisterhood" />
        <Image className={styles.landingAreaCarouselImg} src={carouselPic2} alt="magazine illustration about koalas in World War 2" />
        <Image className={styles.landingAreaCarouselImg} src={carouselPic3} alt="comic about a guy being mocked in a carnival game" />
        
      </div>
      
      <div id={styles.marketingTilesContainer}>
        <div className={styles.marketingTile}>
          <h2>donation-based</h2>
          <p>I don't charge flat fees or hourly rates for my work. I just like using art to bring smiles.</p>
          <Link href={"/pricing"}>How it works</Link>
        </div>
        
        {/* <div className={styles.marketingTile}>
          <h2>professional quality</h2>
          <p>Okay, I haven't been to art school or anything like that. And people seem to like what I make for them anyway.</p>
          <Link href={"/gallery"}>View gallery</Link>
        </div> */}
        <div className={styles.marketingTile}>
          {/* <h2>want something else?</h2>
          <p>If you don't have one of those "creative" friends handy and want help with a project then let's talk.</p>
          <Link href={"/contact"}>Contact me</Link> */}
        </div>
      </div>
      <div id={styles.marketingTilesContainer}>
        <div className={styles.marketingTile}>
          <h2>simple &amp; easy</h2>
          <p>Just give me a vague idea and I'll run with it. Or provide specific details if you prefer.</p>
          <Link href={"/request"}>Get started</Link>
        </div>
      </div>
      <div className={styles.footer}>
        <Link className={styles.footerLink} href={"/contact"}>Contact</Link>
        <Link className={styles.footerLink} href={"/about"}>About</Link>
      </div>
    </div>
  );
};
export default Index;