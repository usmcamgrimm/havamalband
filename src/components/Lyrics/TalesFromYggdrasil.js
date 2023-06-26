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
            Träd ej över din tröskel in,<br />
            förrän du spejat och spanat.<br />
            Ty ovisst är att ej vet, var ovänner sitta.<br />
            Fä dör, fränder dör, själv dör du likaledes.<br />
            Men ett vet jag som aldrig dör,<br />
            dom över död man.
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
            Long ago in Aesir times our heritage was strong.<br />
            Known through force and sheer, brutal will.<br />
            We fought whomever crossed our path, for Valhalla we die<br />
            And Odin smiled and praised our skill.<br />
            <br />
            On our knees we did solemnly<br />
            swear our axes and shields to our lords.<br />
            In times of need and in times of war,<br />
            we would stand with the gods facing Yggdrasil&apos;s hordes.<br />
            <br />
            And so the darkness came, the world were drenched in ice.<br />
            The Fimbulwinter&apos;s howl froze every vein.<br />
            When we heard the mighty call from Heimdall&apos;s gjallarhorn,<br />
            we turned around and fled in mortal shame.<br />
            <br />
            Broken and lost, we were cursed by our choice,<br />
            and our oath was pummeled into dust.<br />
            We knew if any Aesirs lived throughout the fight,<br />
            they would swear a great vengeance on breakers of trust.<br />
            <br />
            Fight for what you believe in,<br />
            or the dead will come for your sword.<br />
            Youre a coward, a traitor, defector,<br />
            and for this you will join the ranks<br />
            of the Drauger horde.<br />
            <br />
            After the war Baldur stood alive,<br />
            and he spoke to us through fury and through gloom<br />
            &quot;You did break your oath now your fate is sealed.<br />
            You will be the thing man fear when they flee before their doom.&quot;<br />
            <br />
            Fight for what you believe in,<br />
            or the dead will come for your sword.<br />
            You&apos;re a coward, a traitor, defector,<br />
            and for this you will join the ranks<br />
            of the Drauger horde.<br />
            <br />
            You were chosen to fight and die,<br />
            You were sworn to the Aesir&apos;s side.<br />
            You swore an oath to fight,<br />
            and yet you choose betrayal.
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
            Born for war and reaping of lives<br />
            Our warrior stands alone<br />
            Death surrounds his every step<br />
            As his fate is carved in stone<br />
            Frozen lands unveils his fate<br />
            To fight until he dies<br />
            Now son of bear with cloak of strength<br />
            Unleash your furious cry<br />
            <br />
            Blood and war forever sworn<br />
            <br />
            Known through ranks of enemies<br />
            More beast than man in mind<br />
            Hundreds have been forced to die<br />
            Their heads his axe will find<br />
            Inside lives a raging beast<br />
            An animals lust for more<br />
            The bear inside outgrows the man<br />
            And throws him into war<br />
            <br />
            For my gods I do declare<br />
            Blood through loathe will be my oath<br />
            <br />
            Berserk, murderer, servant<br />
            Of the gods<br />
            Slayer, killer, murderer<br />
            Sound the horns<br />
            Berserk, murderer, champion<br />
            Of the gods<br />
            Slayer, killer<br />
            A warrior beast demanding blood<br />
            <br />
            Forced to live a war-torn life<br />
            A bear disguised as man<br />
            His strength and hate will know no end<br />
            He&apos;s like battering ram<br />
            The the frozen north he bends his knee<br />
            His will is with the gods<br />
            With the axe in hand and a bear in mind<br />
            A berserker shows his form<br />
            <br />
            With the gods I will conquer them all<br />
            Blood and war forever sworn<br />
            <br />
            Berserk, murderer, servant<br />
            Of the norns<br />
            Slayer, killer, murderer<br />
            Sound the horns<br />
            Berserk, murderer, champion<br />
            Of the gods<br />
            Slayer, killer<br />
            A warrior beast demanding blood<br />
            <br />
            Berserk, murderer, servant<br />
            Make them fall<br />
            Slayer, killer, murderer<br />
            Call for war<br />
            Berserk, murderer, champion<br />
            Raise your swords<br />
            Slayer, killer<br />
            A warrior standing tall<br />
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
            Can you feel it in the air? The smell of death tonight.<br />
            The ice gnawing deep in our bones.<br />
            On the tundra frozen wide all hope is cast aside<br />
            and suddenly we long for our homes.<br />
            <br />
            Lost in our despair, we failed to feel the shift,<br />
            the mountains sprung open in the North.<br />
            And the soil itself did sunder<br />
            from the cold that struck us all,<br />
            and the lords of ice and frost sprung forth.<br />
            <br />
            In the piercing snow, in the midst of cold,<br />
            we can hear their frost-filled cries.<br />
            Our blood will catch the sun&apos;s first rays.<br />
            See, the dawn of the frost giants rise.<br />
            <br />
            The battle now commenced,<br />
            and the giants circled in,<br />
            their ancient hate from Ymir&apos;s death we felt.<br />
            Our steel now faced these mountains,<br />
            their cold condemned us all,<br />
            and our Norn-woven fate was dealt<br />
            <br />
            When the night is gone our feast will come,<br />
            Valhalla calls for me.<br />
            For Odin I&apos;ve died tonight,<br />
            by the frostsspawns killing spree.<br />
            <br />
            In the piercing snow, in the midst of cold<br />
            our steel will bow to ice.<br />
            Our blood will catch the sun&apos;s first rays<br />
            See, the dawn of the frost giants rise.<br />
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
            Dawn of shade awakes, a new threat arrives.<br />
            A creature hid from human eyes,<br />
            full of death and hatred.<br />
            <br />
            Vile and foul in heart, vengeance in his mind.<br />
            A monster chained from human eyes,<br />
            one of Hel created.<br />
            <br />
            Chant for your protection,<br />
            look beyond your fears.<br />
            A nightmare has escaped its realm,<br />
            to terrorize mankind.<br />
            <br />
            Many will be slaughtered,<br />
            few will tell the tale.<br />
            The Gods themselves have made it clear,<br />
            we&apos;re not allowed to fail.<br />
            <br />
            A blood-stained day arrives, our banners dance with pride<br />
            a heathen horde stands proud and still awaiting battle.<br />
            Now, close your lines, raise your arms<br />
            and prepare for slaughter.<br />
            <br />
            Suddenly the silence dies, the air grows thick of fear,<br />
            the nightmareborn emerges upon the chosen field.<br />
            The monster strikes a roar with its hatred to the skies.<br />
            The shaman priest now chant the runes,<br />
            the fearsome creature now must die.<br />
            <br />
            Born from flesh with Aesir strength,<br />
            the enemy will fall by my blade.<br />
            Man and beast must fight once more,<br />
            for our Aesir faith our foes name will fade.<br />
            <br />
            Darkness faces steel, blood-crazed hate will kneel,<br />
            the battlefield will weep with the blood of thousands.<br />
            Beast and man will stand, one will rule this land,<br />
            the fate of all of Midgaard will forge itself today.<br />
            <br />
            Born to fight, live to die,<br />
            the Aesirs gaze with pride when they die.<br />
            Man has conquered beast once more,<br />
            victorious we chant our battle cry.<br />
            <br />
            Blood.
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
            Beyond the ocean&apos;s cold mighty roars,<br />
            beneath the murky void.<br />
            In storm-ridden waters, she lies in wait,<br />
            to drag, to drown and destroy.<br />
            <br />
            Ran, scourge of seas,<br />
            one that makes you drown.<br />
            Shorten life-breath inside her net,<br />
            dragging you endlessly down.<br />
            <br />
            Once you&apos;re caught there is no escape,<br />
            the waters will soon be your grave.<br />
            Down to the depths of her halls you&apos;ll be dragged,<br />
            in death you will become her slave.<br />
            <br />
            Lured by Ran into the darkened sea.<br />
            Down to halls of drowned eternally.<br />
            <br />
            Claims your death and life beyond all time.<br />
            Ran do lure and guide your final climb.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="6">Death of Balder</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >
            This dire tale I bring to you<br />
            A story without hope<br />
            An event that sealed the Aesir reigns demise<br />
            The story I must tell to you<br />
            The tale of Balder&apos;s fate<br />
            Will echo through the memories of time<br />
            <br />
            Dreams told of death<br />
            That Hel was prepared<br />
            To accept Balder when he dies<br />
            Frigg made everything<br />
            Swear on its pride<br />
            That all sort of harm<br />
            Her son could defy<br />
            <br />
            Balder was immortal<br />
            And the gods amused themselves<br />
            By striking him so brutally and raw<br />
            But Loki had other plans<br />
            His heart was growing dark<br />
            And the end of Balder in his mind he saw<br />
            <br />
            Out of a mistletoe and arrow he did forge<br />
            And placed it in Hödrs Hand<br />
            The blinded bond of blood<br />
            The arrow did shoot<br />
            And Balder&apos;s life was banned from Aesirland<br />
            <br />
            Balder your fate is sealed<br />
            Death from a blind man&apos;s shot<br />
            The end times will bleed for you<br />
            And the world as we know it will be forgot<br />
            Einherjars fulfill your oath<br />
            The Norns holds your fate<br />
            There stand the world-tree dimmed and charred<br />
            Now fight for it, unleash Odin&apos;s hate<br />
            <br />
            Ride for seven days and night<br />
            Cry out for my son<br />
            Hel will promise redemption if your sorrow will be shown<br />
            Töck refused to bow or mourn &quot;He stays below&quot; she said<br />
            And therefore Balder once again was cursed back to the dead<br />
            <br />
            Höder must pay, Loki must pay<br />
            For their crimes against our own kind<br />
            Höder was slain by his own son in rage<br />
            While ravens they traced down the source of the sin<br />
            <br />
            Balder your fate is sealed<br />
            Death from a blind man&apos;s shot<br />
            Loki caught in a cave<br />
            His treachery would seal his fate<br />
            Cold winds chilled whispers bring<br />
            A conflict to end them all<br />
            Vengeance through Loki&apos;s deed<br />
            Will be our final fall<br />
            <br />
            Now that Balder&apos;s gone our worlds will burn<br />
            Through Ragnarök our world... must... fall Oh, oh cruel world
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="7">Hail Havamal</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >
            Warriors standing still.<br />
            Awaiting the battlefield.<br />
            Crows soon will feed.<br />
            Upon our deadly deed.<br />
            <br />
            Cold in blood, darkness floods,<br />
            as soldiers shorten their breath.<br />
            Conquer fear, Odin&apos;s near,<br />
            to hail your brutal death.<br />
            <br />
            Thunder, starts to roar.<br />
            Thor, looks for war.<br />
            Remember, when you fall,<br />
            your&apos;re welcomed to Odin&apos;s hall.<br />
            <br />
            Call all souls across our realms.<br />
            Odin&apos;s horde. Stand as one and chant the Havamal.<br />
            <br />
            Call all souls across our worlds.<br />
            Prove your worth and abide to Odin&apos;s words.<br />
            <br />
            Warriors find your fate in your fall.<br />
            Valhalla&apos;s horde. Now fight and die for the Havamal.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card
        style={{ backgroundColor: '#070707' }}
      >
        <Card.Header>
          <CustomToggle eventKey="8">Ginnungagap</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="8">
          <Card.Body
            style={{
              backgroundColor: '#070707',
              color: '#ffffff',
              fontFamily: 'grenze',
              fontSize: '1.5rem',
              fontWeight: 'normal',
            }}
          >
            Long before time of times,<br />
            before our kind stood tall.<br />
            In the midst of emptiness,<br />
            fire, ice and nothing ruled all<br />
            <br />
            Right between Nifelheims coldened grip<br />
            and the fires from Muspelheim.<br />
            Two spawned from one will unite once more<br />
            and form our realms of Nine<br />
            <br />
            Ymir now stood from the merging smoke,<br />
            and Audhumbla came alive.<br />
            They were the source, through their unity<br />
            a new world would soon arrive.<br />
            <br />
            Realms will awake.<br />
            Witness the birth of time.<br />
            Ancient orders soon to break<br />
            A new age will reach its prime.<br />
            <br />
            Call on the force of Ginnungagap.<br />
            When fire and ice will collide.<br />
            Mau and beast will be spawned from these,<br />
            their own fate they shape and decide.<br />
            <br />
            Ymir did fathered the jotun race,<br />
            and the scourge of the giants began.<br />
            Spawned from the salt that was sealed in ice,<br />
            the dawn era created man.<br />
            <br />
            Through Bures legacy, Bor and Bestla gave birth.<br />
            Through the sons of trinity,<br />
            the first of the Gods did unearth.<br />
            <br />
            See, the beginning of our Yggdrasil.<br />
            Witness the birth of time.<br />
            Frost and fire gave us what is real.<br />
            And the gods would arise to proclaim their new-born prime<br />
            <br />
            Minds of Odin, Vile and Ve,<br />
            shaped what we see as all.<br />
            Song of Bor made everything,<br />
            through the mighty Ymir&apos;s fall<br />
            <br />
            See, the beginning of our Yggdrasil.<br />
            Witness the birth of all.<br />
            Ask and Embla shaped the human wheel.<br />
            And the gods would arise to uphold our one true call.<br />
            <br />
            It was the beginning of times,<br />
            when nothing us did blind.<br />
            Neither grass nor earth, was to find.<br />
            No heavens above, just a gap that unfold,<br />
            The emptiness our world did hold.<br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}