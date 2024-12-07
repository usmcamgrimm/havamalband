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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">The North Awakens</CustomToggle>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal'
            }}
          >
            Förd av skugga, blek och grå<br />
            En vilja därav bunden<br />
            I vinterskenets dystra dis<br />
            Ett livsdis släcks till grunden<br />
            <br />
            Hatad, tärd, bränd och dömd<br />
            Han står vid dödens rand<br />
            Vidrig kraft inom får liv<br />
            Och ler med blodad tand<br />
            <br />
            Strid om man och best i själ<br />
            Där hoppet ses försvunnen<br />
            Mörkret växer vida kring<br />
            Förlusten är nu vunnen<br />
            <br />
            Träd uti din nya svid<br />
            Och svep ditt forna jag<br />
            Monstret ekar i ditt bröst<br />
            När människan är svag
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">Fenris</CustomToggle>
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
            Far from the god&apos;s light<br />
            Trapped down in shame<br />
            A freezing howling<br />
            Will spell my name<br />
            <br />
            A sin unraveled<br />
            A bloody trail<br />
            An act of vengeance<br />
            Will be my tale<br />
            <br />
            From Angrboda&apos;s<br />
            And Loki&apos;s sin<br />
            I came to Asgaard<br />
            First of my kin<br />
            <br />
            They raised a servant<br />
            Their friend in mind<br />
            But time would show them<br />
            A darker kind<br />
            <br />
            I bring night to where the sun will be<br />
            I bring storms to those that do defy me<br />
            I bring fangs to man when I strike and<br />
            I bring death to friend and foe alike<br />
            <br />
            I curse your name<br />
            Entwined in chains<br />
            And I&apos;ll be the one<br />
            That brings flames<br />

            Twice chains were lost<br />
            Gleipnir&apos;s my cost<br />
            Tyr&apos;s wrath is mine<br />
            For all of time<br />
            Bound down in shame<br />
            I curse your name<br />
            Odin, face your crime<br />

            Hate and blood of foe, that is my call<br />
            Grow my strength and fury once and for all<br />
            When I break free from dwarven steel<br />
            I will end the world&apos;s eternal wheel<br />
            <br />
            Sing my forlorn song across the battlefield<br />
            Now know my name, I&apos;ll be the Aesir&apos;s bane<br />
            <br />
            Fenrirs will rise, although bound thrice<br />
            And I shall bring god&apos;s demise<br />
            Odin will fall, once and for all<br />
            And Vidar will end my final fall<br />
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">Nidhoggr</CustomToggle>
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
            Deep below through a sea of mist<br />
            In the realm where dead man dwell<br />
            Lies a monster, a dragonlord<br />
            Next to the Hvergelmer well<br />
            <br />
            Chaos-tainted, a spawn of the dark<br />
            Creator of foul-ridden deed<br />
            Gnawing on roots that uphold the Tree<br />
            Our world will wither and bleed<br />
            <br />
            In the land of the ice and the cold<br />
            He feasts upon the dead<br />
            Rips the flesh and drinks the blood<br />
            He chains our fear like lead<br />
            <br />
            Bringer of our destruction<br />
            His shadow forever grows<br />
            Ender of our bright bold age<br />
            Our time he overthrows<br />
            <br />
            Enemy of Hräsvelg<br />
            On top of Yggdrasil<br />
            Caught by hate and madness<br />
            Through times eternal and forboding seal<br />
            <br />
            His primordial decree<br />
            Proclaims that he will be<br />
            Ruler of all evil<br />
            And bane of our World-tree<br />
            <br />
            Nidhöggr, world-eater, scourge of the tree<br />
            The night before the dawn<br />
            Long will he live after Ragnarök<br />
            The beast from worlds all evil once did spawn<br />
            <br />
            Through flames of war we&apos;ll see<br />
            The fall of Yggdrasil<br />
            For which he patiently<br />
            Will gnaw eternity<br />
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">Kraken</CustomToggle>
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
            All alone in the darkest of night<br />
            On a frozen, blackened sea<br />
            There a ship drifts alone<br />
            Where gods won&apos;t hear their plea<br />
            <br />
            From the bow comes a hopeful shout<br />
            &quot;My captain, I see land&quot;<br />
            We turn our heads to realize<br />
            That something&apos;s not as planned<br />
            <br />
            Fear the unknown of this realm<br />
            The dead will tell ye all of its tales<br />
            Oh underneath the waves<br />
            An ancient monster awaits<br />
            <br />
            From the depths a vicious roar<br />
            Caused all of our courage to seep<br />
            Tentacles of unknown height<br />
            Begins to slither down from the deep<br />
            <br />
            &quot;Draw your axes, draw your swords<br />
            And pray to Odin our lord!&quot;<br />
            The crew will fight against all odds<br />
            Or it will drag us overboard<br />
            <br />
            Fear the unknown of this realm<br />
            The dead will tell ye all of its tales<br />
            Underneath the waves<br />
            An ancient monster awakes<br />
            <br />
            From a time that even the Aesirs fear<br />
            Deep below where Hel is near<br />
            A watery death awaits whomever comes there<br />
            Kraken dreaded by mortal mind<br />
            King of squids your ship will find<br />
            And drag you down into its domain<br />
            <br />
            Screams now dies out one by one<br />
            As the monster chooses its prey<br />
            The crew diminishes rapidly<br />
            Escape looks rather grey<br />
            <br />
            Suddenly the sea grows calm<br />
            And the ship is lost to sight<br />
            We are doomed down the abyss<br />
            Brought down by Kraken&apos;s might<br />
            <br />
            Fear the unknown of this realm<br />
            Now we dead will tell ye its tales<br />
            Underneath the waves<br />
            The drowned lost crews awaits<br />
            <br />
            From a time that even the Aesirs fear<br />
            Deep below where Hel is near<br />
            A watery death awaits whomever comes there<br />
            Kraken dreaded by mortal mind<br />
            King of squids your ship will find<br />
            And drag you down into its domain<br />
            <br />
            When the seas are finally calm and still<br />
            When you&apos;ve sealed your fate against your will<br />
            Remember our eternal sleep<br />
            Heed my warning, heed my call<br />
            The king of squids will spell your fall<br />
            So turn back or join us in the deep<br />
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">Empire of the Ashen Sun</CustomToggle>
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
            Stormclouds gathers from the North<br />
            To shroud our Eastern land<br />
            Where the sun will never set<br />
            Across the burning sand<br />
            <br />
            Spawned from evil deeds long ago<br />
            From birth our brands are drawn<br />
            Scorched by flaws from elder gods<br />
            Now fear the rise of dawn<br />
            Hear the sound of coming war<br />
            An endless anguished flood<br />
            A pantheon from forlorn worlds<br />
            Will cloud our skies with blood<br />
            <br />
            Hear the sound of a thousand feet<br />
            And chants of unknown tongue<br />
            Our mighty walls will breach and fall<br />
            Our culture dies too young<br />
            Feel the wrath of mother North<br />
            Now dread this pagan horde<br />
            All light will fade as death approach<br />
            His call won&apos;t be ignored<br />
            <br />
            Hear our cries<br />
            Gods of old awaken<br />
            Rise up, defend our mythos life<br />
            The north has arrived<br />
            Our worlds order will tremble<br />
            Save us from the flames of morbid strife<br />
            Or empires will burn<br />
            <br />
            Death of Tiamat<br />
            Her heritage arrives<br />
            By our bloody sins<br />
            Marduk&apos;s curse through norsemen thrives<br />
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">Nornir&apos;s Call</CustomToggle>
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
            In the depths of Yggdrasil<br />
            Near the roots there lies a well<br />
            Do fear the rite<br />
            On this ancient site<br />
            Where death itself will dwell<br />
            <br />
            Hear the whispers in the wind<br />
            Their beckoning, their call<br />
            When your life will end<br />
            For your soul they&apos;ll send<br />
            To the underworld you&apos;ll fall<br />
            <br />
            The weavers of your fate<br />
            Both future and your past<br />
            The rulers of all prophecies<br />
            They deem which breath is last<br />
            <br />
            So no matter what you do<br />
            To evade their mortal rule<br />
            You will jump their ledge<br />
            By a scissor&apos;s edge<br />
            They will play you like a mindless fool<br />
            <br />
            The first of three is Urd<br />
            The eldest of her kind<br />
            She will spin your thread<br />
            And you&apos;ll know you&apos;re dead<br />
            By her cut your doom is signed<br />
            <br />
            Verdandi rules the now<br />
            The presence is her task<br />
            She will judge by sight<br />
            Every wrong or right<br />
            <br />
            And Skuld the future holds<br />
            When she calls you will descend<br />
            She will weave your fate<br />
            Your destiny create<br />
            The seer of all things&apos; end<br />
            <br />
            The Nornir rules us all<br />
            Both man and god will kneel<br />
            Their wen of life becomes our strife<br />
            And our final voyage they will deal<br />
            <br />
            The stories we will face<br />
            And when we end our days<br />
            They weave your rise to fall<br />
            Hear Nornir&apos;s call<br />
            <br />
            We all are born to die<br />
            By Nornirs when and why<br />
            Towards the unknown tide<br />
            We&apos;ll walk with pride<br />
            <br />
            The masters of your soul<br />
            Our journey they make whole<br />
            They will undo us all<br />
            When they do call<br />
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">Jormungandr</CustomToggle>
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
            In the world of old<br />
            There&apos;s a legend told<br />
            Ancient terror awakened<br />
            Seven times entwined<br />
            Fiend of all mankind<br />
            By the gods forsaken<br />
            <br />
            Jaws with teeth of dread<br />
            Eyes of burning red<br />
            Spawn of Loki&apos;s temptation<br />
            From the black abyss<br />
            Hear the serpent&apos;s hiss<br />
            Jormungandr&apos;s damnation<br />
            <br />
            Dragon of the sea<br />
            Damned eternally<br />
            Scorned by Odin&apos;s fear<br />
            When my endless hateful might was clear<br />
            <br />
            God of Thunder&apos;s bane<br />
            Thor will curse my name<br />
            Ragnarök is mine<br />
            I will drown the wretched ending time<br />
            <br />
            Dwelling down beneath<br />
            Summoned from the deep<br />
            By my one true enemy<br />
            One to stand and fight<br />
            Wielding equal might<br />
            He who dares to oppose me<br />
            <br />
            Odin&apos;s firstborn son<br />
            Wanted me undone<br />
            Mjölner trembling with power<br />
            Eitr guide his fate<br />
            Death through rightful hate<br />
            Thor I will devour<br />
            <br />
            Lord of every sea<br />
            Doom of Midgard&apos;s tree<br />
            Yggdrasil will drown<br />
            By my wrath I&apos;ll bring the Aesirs down<br />
            <br />
            Thor and I will fight<br />
            In the twilight plight<br />
            Thunder meets the waves<br />
            Our clash will lead to our graves<br />
            <br />
            Remember my call<br />
            Through Hymer&apos;s tale we forged our fall<br />
            Torn and bound by hate<br />
            To seal our final fate<br />
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">Hel</CustomToggle>
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
            Judgement comes for all of us<br />
            Frozen chains from dark beyond<br />
            Pathways that we choose in life<br />
            Will forge our chains and bond<br />
            <br />
            Every soul is weighed by death<br />
            And destiny&apos;s cruel game<br />
            Either you will bask in blood<br />
            Or sleep in endless shame<br />
            <br />
            Some of us will die in fight<br />
            When Valkyries give call<br />
            These Einherjars, blessed by war<br />
            Will stand in Odin&apos;s hall<br />
            <br />
            Some of us will die in vain<br />
            By age or by disease<br />
            Outcasts from the glorious dead<br />
            Shunned by god&apos;s displease<br />
            <br />
            Those that die without a fight<br />
            Will walk on frozen plains<br />
            Where endless hunger, frost-rid cries<br />
            And grim-clad sorrow reigns<br />
            <br />
            You will board the Naglfar<br />
            A ship from dead men&apos;s nails<br />
            All you souls, abandon hope<br />
            To Nifelheim we sail<br />
            <br />
            In this land of death and cold<br />
            Hel do rule supreme<br />
            Last of trickster Loki&apos;s blood<br />
            Now a darkened queen<br />
            <br />
            One side pale and beautystruck<br />
            That&apos;s only matched by Frey<br />
            Other half is maggot-filled<br />
            Dead and ashen grey<br />
            <br />
            Banished by gods<br />
            Betrayed by their highborn lord<br />
            Ensnared in her hate<br />
            Declared deaths own shadow ward<br />
            <br />
            Cast away from Aesir&apos;s halls<br />
            Broken, tattered, scorned by dread<br />
            Vengeance cured in twilight times<br />
            When she commands the vengeful dead<br />
            <br />
            Helheim grants a cold embrace<br />
            If your demise lacked battle cry<br />
            Kneel before your one true god<br />
            And pledge allegiance when you die<br />
            <br />
            The goddess of spite<br />
            End times will grant her right<br />
            To claim stolen life<br />
            Through Hel gods will know demise<br />
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
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span
            style={{
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              transformOrigin: 'center center',
            }}
          >
            <CustomToggle eventKey="1">The Curse of Grendel</CustomToggle>
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
            Our story dwells in pagan times<br />
            When darkness ruled in Denmark 500 AD<br />
            Hrothgar mighty king of Danes<br />
            Sat on his throne, proclaiming loud and joyously<br />
            &quot;Warriors, enjoy your mead in this great hall<br />
            This Heorot, I&apos;ve built for you&quot;<br />
            The walls were shaking from the songs of drunken tales<br />
            A grand feast our Hrothgar threw<br />
            <br />
            Suddenly all lights went out and silence rose<br />
            As the warriors drew their swords<br />
            Through the gates I smashed my way into their hall<br />
            For death and hate I roared<br />
            Crushing bones and drinking blood of fallen foes<br />
            Thirsty souls were lost in pain<br />
            The morning after Hrothgar said<br />
            &quot;Now seal this hall, no joy will echo again&quot;<br />
            <br />
            The curse of Grendel&apos;s fate<br />
            A path of vengeful hate<br />
            In blood and hope they&apos;ll pay<br />
            For casting me astray<br />
            <br />
            Finally I met my match in geaten hands<br />
            When Beowulf and I did meet<br />
            Iron gripped, two equal beasts, in mortal dance<br />
            For victory we did compete<br />
            Beowulf then topple me and snatched my arm<br />
            I ran, defeat was mine<br />
            Ultimately loss of blood demanded my rest this one final time<br />
            <br />
            A legend has been born<br />
            From where my life was torn<br />
            But know this from my tale<br />
            The one true monster did prevail<br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}