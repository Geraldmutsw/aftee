import Styles from "./css-modules/sectionHeader.module.css";

export default function SectionHeader({header, paragraph}) {
    return(
        <>
            <div className={Styles.headingContent}>
                <h1 className={Styles.headingHeader}>{header}</h1>
                <p className={Styles.headingParagraph}>{paragraph}</p>
            </div>
        </>
    );
}
