import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card'

export default function TheSTormKing() {
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
            <CustomToggle eventKey="1">The Storm King</CustomToggle>
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
            Enemies of Asgard&apos;s might<br/>
            Beware the blackened sky<br/>
            When thunder growls its mighty hymn<br/>
            Your time has come to die<br/>
            <br/>
            Every challenger I will defeat<br/>
            I will crush what&apos;s in my path<br/>
            Doom descends in lightning strike<br/>
            You will face my hammer&apos;s wrath<br/>
            <br/>
            I&apos;m the storm you feel<br/>
            I&apos;m strength, I&apos;m steel<br/>
            By my will you will kneel<br/>
            Heaven&apos;s fire I command<br/>
            With my hammer in hand<br/>
            You will fall where you stand<br/>
            <br/>
            Across the heavens I ride<br/>
            Clad in battle pride<br/>
            And with Mjölnir by my side<br/>
            I am the gods&apos; frontier<br/>
            King of storms is here<br/>
            I&apos;m Thor, my name you&apos;ll fear<br/>
            <br/>
            Enemies of Asgaard<br/>
            As my name is Thor<br/>
            Know that I will hunt you<br/>
            Find you<br/>
            And beat you to a bloody pulp<br/>
            <br/>
            Every foe will meet their end<br/>
            By my hammer they will fall<br/>
            Turn to ash or beg defeat<br/>
            I am ready for a brawl<br/>
            <br/>
            So when the thunder&apos;s heard above<br/>
            You&apos;ll know my battle roar<br/>
            I am the weapon of the gods<br/>
            Chosen champion, I am war<br/>
            <br/>
            I&apos;m the storm you feel<br/>
            I&apos;m strength, I&apos;m steel<br/>
            By my will you will kneel<br/>
            Heavens fire I command<br/>
            With my hammer in hand<br/>
            You will fall where you stand<br/>
            <br/>
            Across the heavens I ride<br/>
            Clad in battle pride<br/>
            And with Mjölnir by my side<br/>
            I am the gods&apos; frontier<br/>
            King of storms is here<br/>
            I&apos;m Thor, my name you&apos;ll fear<br/>
            <br/>
            Asathor will domineer<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}