import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card'

export default function TalesFromYggdrasil() {
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
          <CustomToggle eventKey="0">Harken The Shadows</CustomToggle>
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
          <CustomToggle eventKey="1">Draugers March</CustomToggle>
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
          <CustomToggle eventKey="2">Berserker</CustomToggle>
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
          <CustomToggle eventKey="3">Dawn of the Frost Giants</CustomToggle>
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
          <CustomToggle eventKey="4">Blood Oath</CustomToggle>
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
          <CustomToggle eventKey="5">Net of Ran</CustomToggle>
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
          <CustomToggle eventKey="5">Death of Balder</CustomToggle>
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
          <CustomToggle eventKey="5">Hail Havamal</CustomToggle>
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
          <CustomToggle eventKey="5">Ginnungagap</CustomToggle>
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