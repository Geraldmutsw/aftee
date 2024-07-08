import Styles from "./css-modules/hero.module.css";
import HeroCard from "./HCard";


export default function Hero() {
    return(
        <>
            <div className={Styles.hero}>
                <div className={Styles.heroContent}>
                    <h1 className={Styles.heroHeading}>Check out smoothly and pay <br/> <span className={Styles.heroHeadingSpan}>without effort</span></h1>
                    <p className={Styles.heroParagraph}>
                        AFTEE is committed to taking into account safety and convenience to create the smoothest <br/>
                        shopping experience. Allows you to place an order painlessly and pay freely.
                    </p>
                </div>
                <div className={Styles.heroCards}>
                    <HeroCard/>
                </div>
            </div>
        </>
    );
}