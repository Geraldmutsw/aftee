import SectionHeader from "./SectionHeader";
import Styles from "./css-modules/howToPaySection.module.css";
export default function HowToPay(){
    const header = "How to pay";
    const paragraph = "Whether you prefer online bank transfers, or you are used to paying at supermarkets, AFTEE can satisfy you.";

    const cardFirst = {
        icon: "",
        step: "Step 1",
        heading: "Recieve e-bill from SMS after purchase",
        description: "Confirm the payment content through the link in the AFTEE payment SMS. If you are an AFTEE member, complete the payment operation in the AFTEE APP."
    }

    const cardSecond = {
        icon: "",
        step: "Step 2",
        heading: "Pay in the way you prefer in 14 days",
        checked: [
            {id: 1, icon: "", option: "Convinience store"},
            {id: 2, icon: "", option: "ATM/Online money transfer"},
            {id: 3, icon: "", option: "E-wallet"}
        ],
        description: "Download AFTEE App so you can pay in max 45 days  and use the installment service.",
        link: {
            linkAdress: "/",
            buttonContent: "More details"
        }
    }

    const checkedList = cardSecond.checked.map(check => 
        <div key={check.id} className={Styles.checkedItem}>
            <i className={Styles.checkedItemIcon}>{check.icon}</i>
            <p className={Styles.checkedItemDescription}>{check.option}</p>
        </div>
    );

    return(
        <>
            <section className={Styles.container}>
                <SectionHeader header={header} paragraph={paragraph}/>
                <div className={Styles.content}>
                    <div className={Styles.card}>
                        <i className={Styles.cardIcon}>{cardFirst.icon}</i>
                        <p className={Styles.cardStepParent}><span className={Styles.cardStep}>{cardFirst.step}</span></p>
                        <h5 className={Styles.cardHeading}>{cardFirst.heading}</h5>
                        <p className={Styles.cardDescription}>{cardFirst.description}</p>
                    </div>
                    
                    <div className={Styles.card}>
                        <i className={Styles.cardIcon}>{cardSecond.icon}</i>
                        <p className={Styles.cardStepParent}><span className={Styles.cardStep}>{cardSecond.step}</span></p>
                        <h5 className={Styles.cardHeading}>{cardSecond.heading}</h5>
                        <div className={Styles.cardCheckedList}>
                            {checkedList}
                        </div>
                        <p className={Styles.cardDescription}>{cardSecond.description}</p>
                        <button className={Styles.cardButton}>{cardSecond.link.buttonContent}</button>
                    </div>
                </div>
            </section>
        </>
    )
}