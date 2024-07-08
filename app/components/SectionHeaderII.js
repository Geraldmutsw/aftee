import Styles from "./css-modules/sectionHeaderII.module.css";

export default function SectionHeader({header, paragraph}) {
    return(
        <>
            <div className={Styles.headingContent}>
                <p className={Styles.headingParagraph}>{paragraph}</p>
                <h1 className={Styles.headingHeader}>{header}</h1>
            </div>
        </>
    );
}