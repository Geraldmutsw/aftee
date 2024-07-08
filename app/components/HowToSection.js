import SectionHeader from "./SectionHeader";
import Styles from "./css-modules/howToSection.module.css";

export default function HowTo() {
    const header = "How to use AFTEE to checkout";
    const paragraph = "Save troublesome registration and download procedures, complete the checkout in three ";

    const cards = [
        {id: 1, step: "Step 1", heading: "Checkout and choose AFTEE as payment method"},
        {id: 2, step: "Step 2", heading: "Enter your mobile phone number to receive One Time Pin"},
        {id: 3, step: "Step 3", heading: "Enter OTP sent via SMS for authorisation"}
    ];

    const listCards = cards.map(card => 
        <div key={card.id} className={Styles.card}>
            <div className={Styles.cardImage}></div>
            <span className={Styles.cardStep}>{card.step}</span>
            <h5 className={Styles.cardHeading}>{card.heading}</h5>
        </div>
    );

    return(
        <>
            <section className={Styles.container}>
                <SectionHeader header={header} paragraph={<span>{paragraph} <br/> simple steps, buy first and enjoy first</span>}/>
                <div className={Styles.content}>
                    {listCards}
                </div>
            </section>
        </>
    );
}