import { FiMail, FiMapPin, FiCalendar } from "react-icons/fi";
import styles from "../../assets/styles/components/Contact.module.css"

    const Contact = () => {
      return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>CONTACT FORM</h1>
            <div className={styles.contactContent}>
                <div className={styles.contactLeft}>
                    <h1>Have any <span>questions</span> or just want to <span>talk</span>? Let's chat</h1>
                    <div className={styles.horizontalCard}>
                        <FiMail size={22} className={styles.horIcon}/>
                        <p>mbulan.dev@gmail.com</p>
                    </div>
                    <div className={styles.horizontalCard}>
                        <FiMapPin size={22} className={styles.horIcon}/>
                        <p>Minglanilla Cebu, Philippines</p>
                    </div>
                    <div className={styles.horizontalCard}>
                        <FiCalendar size={22} className={styles.horIcon}/>
                        <p>UTC+08 — Philippine Standard Time</p>
                    </div>
                </div>
                <div className={styles.contactRight}>
                    <h1>Send me a message</h1>
                    <form className={styles.form} autoComplete="on">
                    <div className={styles.inputGroup}>
                        <input 
                            type="text" 
                            id="name" 
                            name="user_name" 
                            placeholder="NAME"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input 
                            type="email" 
                            id="email" 
                            name="user_email" 
                            placeholder="EMAIL"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <textarea 
                            id="message" 
                            name="message"
                            rows="6"
                            placeholder="MESSAGE"
                            required
                        />
                    </div>
                    <input type="submit" value="send"/>
                    </form>
                </div>
            </div>
        </div>
      )
    }
    
    export default Contact