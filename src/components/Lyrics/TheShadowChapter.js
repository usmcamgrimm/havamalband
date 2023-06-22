import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card'

export default function TheShadowChapter() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey)
  
    return (
      <button
        type="button"
        style={{
          backgroundColor: '#070707',
          border: 'none',
          fontFamily: 'Norse',
          color: '#66add9',
          fontSize: '2rem',
          fontWeight: 'bold'
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    )
  }
  return (
    <Accordion>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="0">The NOrth Awakens</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="1">Fenris</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="2">Nidhoggr</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="3">Kraken</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="4">Empire of the Ashen Sun</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="5">Nornir&apos;s Call</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="5">Jormungandr</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="5">Hel</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="5">The Curse of Grendel</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >

          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}