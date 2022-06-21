import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './form.module.css'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

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
          css={css`
            width: 100%;
          `}
        >
          <Field type="hidden" name="contactForm" />
          <Field type="hidden" name="bot-field" />
          <label htmlFor="name">
            <p className={styles.formLabel}>
              Your Name
            </p>
            <ErrorMessage name="name" css={css`color: #ce1126;`} />
          </label>
          <Field
            css={css`
              focus {
                outline: 1px solid #66add9;
              }
              border-radius: 5px;
              padding: 8px;
              margin: 8px 0 12px 0;
              width: 100%;
              font-family: grenze;
            `}
            name="name"
            type="text"
            placeholder="Name"
          />

          <label htmlFor="email">
            <p className={styles.formLabel}>
              Email Address
            </p>
            <ErrorMessage name="email" />
          </label>
          <Field
            css={css`
              focus {
                outline: 1px solid #66add9;
              }
              border-radius: 5px;
              padding: 8px;
              margin: 8px 0 12px 0;
              width: 100%;
              font-family: grenze;
            `}
            name="email"
            type="email"
            placeholder="Email address"
          />

          <label htmlFor="message">
            <p className={styles.formLabel}>
              Message
            </p>
            <ErrorMessage name="message" />
          </label>
          <Field
            css={css`
              width: 100%;
              height: 6rem;
              margin-top: 8px;
              padding: 8px;
              border-radius: 5px;
              font-family: grenze;
              focus {
                outline: 1px solid #66add9;
              }
            `}
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