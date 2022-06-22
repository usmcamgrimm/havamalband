import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './form.module.css'

export default function ContactForm() {
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(40, 'Must be 40 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Must be a valid email address')
          .required('Required'),
        message: Yup.string()
          .required('Required'),
      })}
      onSubmit={
        (values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contactForm", ...values })
          })
          .then(() => {
            navigate("/FormSuccess")
            actions.resetForm()
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))
        }
      }
    >
      <div className={styles.formWrapper}>
        <Form
          name="contactForm"
          data-netlify={true}
          data-netlify-honeypot="bot-field"
        >
          <Field type="hidden" name="contactForm" />
          <Field type="hidden" name="bot-field" />
          <label htmlFor="name" className={styles.label}>
            <p className={styles.formLabel}>
              Your Name
            </p>
            <ErrorMessage name="name" />
          </label>
          <Field
            className={styles.formField}
            name="name"
            type="text"
            placeholder="Name"
          />

          <label htmlFor="email" className={styles.label}>
            <p className={styles.formLabel}>
              Email Address
            </p>
            <ErrorMessage name="email" />
          </label>
          <Field
            className={styles.formField}
            name="email"
            type="email"
            placeholder="Email address"
          />

          <label htmlFor="message" className={styles.label}>
            <p className={styles.formLabel}>
              Message
            </p>
            <ErrorMessage name="message" />
          </label>
          <Field
            className={styles.formTextField}
            as="text-area"
            component="textarea"
            name="message"
            placeholder="Type your message to Havamal..."
          />

          <div>
            <button className={styles.submitBtn}
              type="submit"
            >
              Submit Message
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  )
}