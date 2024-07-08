import SectionHeader from "./SectionHeaderII";
import Styles from "./css-modules/faqs.module.css";
import Image from "next/image";
import FaqsImage from "../../public/faqs-image.jpg";

export default function Faqs() {
    const header = "How it works for our users";
    const paragraph = "FAQ AFTEE";

    const faqs = [
        {id: 1, question: "How to update your mobile number?", answer: "Utilizing AFTEE is completely free and you will not be charged any other fees", icon: ""},
        {id: 2, question: "How to update your email address?", answer: "The merchant will start requesting money from you after the goods are shipped, and the deadline is 14 days after the payment ticket is opened", icon: ""},
        {id: 3, question: "How can i stop a cheque payment?", answer: "The AFTEE system will use the information you provide to approve eachperson with a different upper limit, and the first time user can reach a maximum of 10 000", icon: ""},
        {id: 4, question: "How long will it take to update your residential address", answer: "Download the APP to become a member and you can check your quota and the amount you have used in real time", icon: ""},
        {id: 5, question: "How can i stop a cheque payment?", answer: "The AFTEE system will use the information you provide to approve eachperson with a different upper limit, and the first time user can reach a maximum of 10 000", icon: ""}
    ];

    const listFaqs = faqs.map(faq => 
        <div key={faq.id} className={Styles.card}>
            <div className={Styles.cardHeader}>
                <h6 className={Styles.cardHeading}>{faq.question}</h6>
                <i className={Styles.cardIcon}>{faq.icon}</i>
            </div>
            <p className={Styles.cardDescription}>{faq.answer}</p>
        </div>
    );
    return(
        <>
            <section className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.faqContent}>
                        <SectionHeader header={header} paragraph={paragraph}/>
                        <Image className={Styles.image} src={FaqsImage} alt="FAQs"/>
                    </div>
                    <div className={Styles.faqContent}>
                        {listFaqs}
                    </div>
                </div>
            </section>
        </>
    );
}