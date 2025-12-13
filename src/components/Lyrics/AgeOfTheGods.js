import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card'

export default function AgeOfTheGods() {
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
            <CustomToggle eventKey="1">The Pagan Path</CustomToggle>
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
            All warriors, come to me<br/>
            Fulfill your warlord&apos;s vision<br/>
            Let&apos;s set the god&apos;s hate free<br/>
            It will guide your grim decision<br/>
            And as the sun shall die<br/>
            In sanguine tattered light<br/>
            The Valkyries will fly<br/>
            Souls claimed in vicious fight<br/>
            <br/>
            Proclaim that death is near<br/>
            Raise chants and sharpen steel<br/>
            Our pagan force they fear<br/>
            Their final strike We&apos;ll deal<br/>
            Unleash us mighty Thor<br/>
            We&apos;ll be your hammer&apos;s wrath<br/>
            And as we bathe in gore<br/>
            We&apos;ll stride the pagan path<br/>
            <br/>
            When songs of war lay silent<br/>
            When enemies are clad in red, cold and dead<br/>
            They met an end so violent<br/>
            Foes abide to mortal dread<br/>
            <br/>
            Fear wrath in a warrior&apos;s mind<br/>
            Bid honour to code of gods<br/>
            Flayed by a hate gone blind<br/>
            And slay for our heathen blood<br/>
            If sought, you will be found<br/>
            The ravens lead the way<br/>
            Laid deep in unsung ground<br/>
            Your life by blood decay<br/>
            <br/>
            The runes foresaw this battle<br/>
            Our heathen flames align the stars, guide our scars<br/>
            Resistance slayed like cattle<br/>
            The crimson path is ours<br/>
            Allfather Odin&apos;s calling<br/>
            His ravens soar the battlefield, never yield<br/>
            Our enemies are falling<br/>
            By swords now yield, their fate is sealed<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
            <CustomToggle eventKey="2">Wolfraiders</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}
          >
            Steadfast we work the oars<br/>
            With stoic iron will<br/>
            As we dance upon the storms<br/>
            Almighty roar<br/>
            I call<br/>
            Upon the blessing of the gods<br/>
            For riches and for fortune<br/>
            We will risk our very lives<br/>
            As the stars will show us<br/>
            To our destined shore<br/>
            Their task<br/>
            That we will defy the odds<br/>
            <br/>
            A pack of rabid wolves<br/>
            Comes snarling &apos;cross the waves<br/>
            We pray to father Odin<br/>
            For the hunt<br/>
            Now charge<br/>
            Our enemies in sight<br/>
            We hear their wretched wails<br/>
            As we commence our deadly tide<br/>
            So run and try to flee<br/>
            Do try to hide<br/>
            Their hearts<br/>
            Are filled with mortal fright<br/>
            When you see us charge the waves<br/>
            Prepare your swords and graves<br/>
            Wolf in spirit, man in shape<br/>
            These raids no one escapes<br/>
            <br/>
            Call upon your so called god<br/>
            To smite us heathens down<br/>
            As our gods will grin and<br/>
            Bring the Aesir&apos;s wrath<br/>
            Now cry<br/>
            We gift our peace through war<br/>
            The scourge that you fear is real<br/>
            Your nightmares have arrived<br/>
            So kneel and pray that we never<br/>
            Do cross path<br/>
            You&apos;ll fall<br/>
            As we now will settle the score<br/>
            When you see us charge the waves<br/>
            Prepare your swords and graves<br/>
            Wolf in spirit, man in shape<br/>
            These raids no one escapes<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
            <CustomToggle eventKey="3">The Day of Reckoning</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}
          >
            Blacksmiths leads the forge&apos;s songs, let hammers rule the night<br/>
            The moment dawn will break will be the hour of the fight<br/>
            Dawn will strike the mountain tops, the sun reflects on steel<br/>
            By dusk, my metal shimmers red, a fatal blow I&apos;ll deal<br/>
            <br/>
            Father, now the time has come to avenge your wrongful death<br/>
            As your banner witness, I&apos;ll snuff out your killer&apos;s breath<br/>
            I will eat his beating heart, I&apos;ll rip it from his chest<br/>
            A death so slow and painful, he&apos;ll scream his end&apos;s request<br/>
            <br/>
            Roar! Oath sworn death be done<br/>
            Father&apos;s blood lives on<br/>
            Vengeance through a son, so wronged<br/>
            The day of reckoning has come<br/>
            Blood spilled in the past<br/>
            Buried deep at last<br/>
            A coward&apos;s bloody fate await<br/>
            Feel my vengeful hate<br/>
            Odin<br/>
            Kynda hatr, Loki<br/>
            Gefa myrkr, Thor<br/>
            Reka daudi, Vidar<br/>
            Taka lif<br/>
            Odin<br/>
            Kynda hatr, Loki<br/>
            Gefa myrkr, Thor<br/>
            Reka daudi, Vidar<br/>
            Taka lif<br/>
            <br/>
            Staring down my enemy with hatred&apos;s burning flame<br/>
            Wrongful deeds will end today, my vengeance oath I&apos;ll claim<br/>
            Stories will be told in fear, a thousand years to come<br/>
            Of father&apos;s killers cries in pain when ripped apart by son<br/>
            <br/>
            Oath sworn death be done<br/>
            Father&apos;s blood lives on<br/>
            Vengeance through a son, so wronged<br/>
            The day of reckoning has come<br/>
            Blood spilled in the past<br/>
            Buried deep at last<br/>
            A coward&apos;s bloody fate await<br/>
            Feel my vengeful hate<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
            <CustomToggle eventKey="4">Sigurd Fafnirsbane</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}
          >
            As long as there&apos;s gold, there&apos;s fools to be seen<br/>
            The fortune seeker&apos;s fate<br/>
            The hands quickly shift as the treasure remain<br/>
            Allure of the gold made as bait<br/>
            From Andvares hand, it will slip away<br/>
            As Odin and Loki must pay<br/>
            For Reidmar has lost what was his younger blood<br/>
            As Loki turned night out of day<br/>
            Treasure or not, it would matter nought<br/>
            For Fafnir had lost his kin<br/>
            A brother&apos;s blood must be paid in full<br/>
            The gods need to pay for this sin<br/>
            A patricider, now gained his scales<br/>
            As guardian of the gold<br/>
            But vengeance brewed in a brother&apos;s heart<br/>
            He swore Fafnir wouldn&apos;t grow old<br/>
            Hear the tale<br/>
            And know his name<br/>
            Dragonbane from the curse of gold<br/>
            Garm will force it<br/>
            To ground so cold ascending<br/>
            From a dwarf below<br/>
            To a drake above<br/>
            He&apos;ll end its reign<br/>
            Our hero Sigurd Fafnirsbane<br/>
            <br/>
            Hear the tale<br/>
            And know his name<br/>
            Dragonbane from the curse of gold<br/>
            Garm will force it<br/>
            To ground so cold ascending<br/>
            From a dwarf below<br/>
            To a drake above<br/>
            He&apos;ll end its reign<br/>
            Our hero Sigurd Fafnirsbane!<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
            <CustomToggle eventKey="5">The Shaman</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
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
            <CustomToggle eventKey="6">Hymns of the Fallen</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}
          >
            Gather around, let the sorrow flame rise<br/>
            Witness the gold break the dark<br/>
            Silence surrounds the cold in their eyes<br/>
            Their final journey they must embark<br/>
            Tears we shall spare for their memories strong<br/>
            They&apos;ve earned nothing but awe<br/>
            Do not despair as the night feels too long<br/>
            This is our chains, this is our law<br/>
            Let our voices guide them off this shore<br/>
            Their songs shall live proud forevermore<br/>
            <br/>
            Once they&apos;re gone in the funeral flames<br/>
            Gaze the aurora-clad sky<br/>
            They will be drawn when they call out their names<br/>
            Valkyries guide them chosen to die<br/>
            Know that our wait will finally end<br/>
            And that your last breath draws near<br/>
            Fatalist fate to Valhall ascend<br/>
            With friends in the hall have no fear<br/>
            Let our voices guide them off this shore<br/>
            Their songs shall live proud forever more<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
            <CustomToggle eventKey="7">Loki&apos;s Damnation</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}
          >
            I was once in the grace of gods<br/>
            An equal to their kin<br/>
            By my acts of rightful rage<br/>
            I was liable to sin<br/>
            The gods deserved what taunt I brought<br/>
            And the truth of Baldr&apos;s fate<br/>
            Brothers, sisters, oh, come at me<br/>
            I shall end you all with my blackened hate<br/>
            <br/>
            One by one I scorned them all<br/>
            Dark words of spite I bled<br/>
            Thor with fury in his heart<br/>
            Rose up in full and said<br/>
            You whom spit your burning words<br/>
            You&apos;ll pay my hammer&apos;s price<br/>
            A brother I have lost in shame<br/>
            Tonight an era dies<br/>
            Loki&apos;s damnation<br/>
            Caught within a cave<br/>
            Judged by those I once called friends<br/>
            I&apos;ll endure to the final day<br/>
            Fueled by my hatred<br/>
            I will rise from the depths once more<br/>
            I will lead the charge against the gods<br/>
            In the final twilight war<br/>
            <br/>
            Bound and downed on ancient stone<br/>
            In chains by blood of son<br/>
            The snake above will drip its doom<br/>
            Until all time is done<br/>
            But when I&apos;m free I swear revenge<br/>
            They&apos;ve made their enemy<br/>
            Once my family now but ash<br/>
            They will fall in my endless killing spree<br/>
            Loki&apos;s damnation<br/>
            Caught within a cave<br/>
            Judged by those I once called friends<br/>
            I&apos;ll endure to the final day<br/>
            Fueled by my hatred<br/>
            I will rise from the depths once more<br/>
            I will lead the charge against the gods<br/>
            In the final twilight war<br/>
            I curse you, Odin, I curse you, Thor<br/>
            And all that stands you by<br/>
            Witness my deserved revenge<br/>
            The Aesir reign will die!<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
            <CustomToggle eventKey="8">Ashwalker</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="8">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}
          >
            Between the realm of living<br/>
            And the abyss of death<br/>
            My shadow walks alone<br/>
            A sigh, an empty breath<br/>
            Now as I came to nothing<br/>
            By purpose doomed as strife<br/>
            A noble lie revealed<br/>
            I&apos;ve cursed my afterlife<br/>
            <br/>
            In memory, I was noble<br/>
            By birthright, I would judge<br/>
            But I was harshly wronged<br/>
            I suffer for their grudge<br/>
            A gold-stained bloodied crown<br/>
            A mimic sign of might<br/>
            Removed when I was stricken<br/>
            My wrongs became their right<br/>
            A whispered pain<br/>
            In hollowed wind<br/>
            That tells me how I sinned<br/>
            By my flaws<br/>
            In ash reborn<br/>
            I walk in aching scorn<br/>
            <br/>
            What once was blind for me<br/>
            Became my only truth<br/>
            My soul was rotted out<br/>
            Predestined waste of youth<br/>
            Now when you hear my tale<br/>
            Beware your steps as well<br/>
            &apos;Cause if you judge by ash<br/>
            You&apos;ll join me in this Hel<br/>
            A whispered pain<br/>
            In hollowed wind<br/>
            That tells me how I sinned<br/>
            By my flaws<br/>
            In ash reborn<br/>
            I walk in aching scorn<br/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}