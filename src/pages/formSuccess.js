import Head from 'next/head'
import styled from '@emotion/styled'

const SuccessContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`;

const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormSent = styled.p`
  display: flex;
  font-family: grenze;
  color: #66add9;
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  text-align: center;
`;

export default function FormSuccess() {
  return (
    <>
      <Head>
        <title>
          HAVAMAL | Success
        </title>
      </Head>

      <SuccessContainer>
        <SuccessBox>
          <FormSent>
            Your message has been sent.
          </FormSent>

          <FormSent>
            Thank you for contacting Havamal!
          </FormSent>
        </SuccessBox>
      </SuccessContainer>
    </>
  )
}
