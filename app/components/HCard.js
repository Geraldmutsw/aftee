import Styles from "./css-modules/heroCard.module.css";

export default function HeroCard() {
    const cards = [
        {id: 1, icon: "bx bx-clipboard", header: "Nothing to prepare to use AFTEE", description: "There is no need to register a member in advance, bind a bank account, and check out without taking out a credit card. the checkout process is fasterand more secure."},
        {id: 2, icon: "bx bx-check-circle", header: "Enter mobile number and complete SMS authentication", description: "Enter the phone number to receive the SMS, and the order will be completed after the verification is completed As long as you have a mobile phone number, you can use it immidiately."}
    ];

    const listCards = cards.map(card => (
        <div key={card.id} className={Styles.card}>
            <div className={Styles.cardHeader}>
                <i className={`${Styles.cardIcon} ${card.icon}`}></i>
                <h5 className={Styles.cardHeading}>{card.header}</h5>
            </div>
            <p className={Styles.cardDescription}>{card.description}</p>
        </div>
    ));

    return(
        <>
            <div className={Styles.cards}>
                {listCards}
            </div>
        </>
    );
}