import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card'

export default function SongOfNine() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey)
  
    return (
      <button
        type="button"
        style={{
          backgroundColor: '#070707',
          border: 'none',
          fontFamily: 'grenze',
          color: '#66add9',
          fontSize: '2rem'
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
        <Card.Header
          style={{
            backgroundColor: '#070707',
            padding: '0',
            paddingLeft: '16px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">Song of Nine</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}
          >
            I ask upon your grave<br/>
            To speak beyond all mortal<br/>
            Your final resting place<br/>
            Will be my wisdom&apos;s portal<br/>
            I ask this boon of you<br/>
            You gave to me in life<br/>
            Death&apos;s slumber I disturb<br/>
            To find my future wife<br/>
            <br/>
            Now awake from your sleep<br/>
            Bring words from the deep<br/>
            <br/>
            And once again<br/>
            Groa will rise<br/>
            Her voice will echoe<br/>
            Through land and skies<br/>
            Now hear her wisdom<br/>
            The galdr&apos;s path<br/>
            Will guide your travels<br/>
            Through strife and wrath<br/>
            <br/>
            The nine were given word<br/>
            Her prophecy was heard<br/>
            <br/>
            The first will give you confidence<br/>
            The second is your fortitude<br/>
            The third will cross all rivers<br/>
            And the fourth will end each feud<br/>
            The fifth will break all chains that binds you<br/>
            The sixth will calm the fiercest storm<br/>
            The seventh halts all frost<br/>
            And the eight death&apos;s fair form<br/>
            <br/>
            The Ninth remains unclear<br/>
            But a shield to giants spear<br/>
            <br/>
            The first will give you confidence<br/>
            The second is your fortitude<br/>
            The third will cross all rivers<br/>
            And the fourth will end each feud<br/>
            The fifth will break all chains that binds you<br/>
            The sixth will calm the fiercest storm<br/>
            The seventh halts all frost<br/>
            And the eight death&apos;s fair form<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}