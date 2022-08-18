import { useForm, ValidationError } from '@formspree/react';
import styles from './form.module.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdobqzkz");
  if (state.succeeded) {
      return (
        <p className={styles.sentMessage}>
          Thanks for contacting Havamal!
        </p>
      )
  }
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          <p className={styles.formLabel}>
            First & Last Name
          </p>
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          className={styles.formField}
          placeholder="Name"
        />
        <ValidationError 
          prefix="ENameail" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="email" className={styles.label}>
          <p className={styles.formLabel}>
            Email Address
          </p>
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className={styles.formField}
          placeholder="Email Address"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message" className={styles.label}>
          <p className={styles.formLabel}>
            Message
          </p>
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.formTextField}
          placeholder="Type your message to havamal..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button 
          type="submit"
          disabled={state.submitting}
          className={styles.submitBtn}  
        >
          Submit
        </button>
      </form>
    </div>
  );
}