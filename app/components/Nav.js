import Link from "next/link";
import Styles from "./css-modules/nav.module.css";
// NAVIGATION DATA
const navData = {
    logo: "AFTEE"
}
// NAVIGATION FUNCTION
export default function Nav() {
    // ARRAY OF LINK OBJECTS
    const navlinks = [
        {id: 1, title: "Home", link: "/"},
        {id: 2, title: "How to Use AFTEE & Pay", link: "/"},
        {id: 3, title: "Where to use AFTEE", link: "/"},
        {id: 4, title: "Machants", link: "/"},
        {id: 5, title: "About Us", link: "/"},
        {id: 6, title: "FAQs", link: "/"},
        {id: 7, title: "Get Started", link: "/"}
    ];
    // MAPPING LINKS
    const listLinks = navlinks.map((link, index) =>
        <li key={link.id}>
            <Link className={`${Styles.link} ${index === navlinks.length - 1 ? Styles.getStarted : "" }`} href={link.link}>{link.title}</Link>
        </li>
    );

    return(
        <nav className={Styles.nav}>
            <span>
                <Link className={Styles.logo} href="/">{navData.logo}</Link>
            </span>
            <ul className={Styles.links}>
                {listLinks}
            </ul>
        </nav>
    );
}