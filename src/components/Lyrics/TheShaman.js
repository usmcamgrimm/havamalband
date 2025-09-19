import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card'

export default function TheShaman() {
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
            <CustomToggle eventKey="1">The Shaman</CustomToggle>
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
            In darkened times when Gods thirst for blood<br/>
            A ritualistic sacrifice would be born<br/>
            Through ash and smoke the whispers I serve<br/>
            I heed a cause forlorn<br/>
            My eyes are simmering with bleakened visions<br/>
            Bloodgods crave a sacrificial demand<br/>
            They will steer my grim decisions<br/>
            And my knife in hand<br/>
            <br/>
            I&apos;m their blade, their willing vessel<br/>
            Shadow servant by their command<br/>
            Spawned from the realm of evermist<br/>
            Blótdeclarer here I stand<br/>
            More than the form that meets the eye<br/>
            I am the voice where man seeks Gods<br/>
            Mind and Spirit spells perfection<br/>
            Mortal flesh is weak and flawed<br/>
            <br/>
            I conjure might beyond the mortal realm<br/>
            No sword in these worlds will be my bane<br/>
            Through maddened visions I will overwhelm<br/>
            Your mind reborn I&apos;ll drive insane<br/>
            So fear the light that shines from the pyre<br/>
            Meet the Gods through steel and fire<br/>
            Join me on the altar<br/>
            Lie down to meet your fate<br/>
            I will guide your passage through this mortal gate<br/>
            <br/>
            Clad in pagan power I rule the shadowcreed<br/>
            Runes and bones will tell me where your path will lead<br/>
            Listen when I speak for my words are made of gold<br/>
            Leave my words behind and you never will grow old<br/>
            Leading the rite that will satiate their will<br/>
            By the blade in my hand I&apos;ll offer them their kill<br/>
            Crimson they demand cause the Gods will never bleed<br/>
            As a servant in the flesh I can see their bloody need<br/>
            <br/>
            I&apos;m their blade, their willing vessel<br/>
            Shadow servant by their command<br/>
            Spawned from the realm of evermist<br/>
            Blótdeclarer here I stand<br/>
            More than the form that meets the eye<br/>
            I am the voice where man seeks Gods<br/>
            Mind and Spirit spells perfection<br/>
            Mortal flesh is weak and flawed<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}