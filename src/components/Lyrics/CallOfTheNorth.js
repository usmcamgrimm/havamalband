import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card'

export default function CallOfTheNorth() {
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
            paddingLeft: '16px'
          }}
        >
          <CustomToggle eventKey="0">Havamal</CustomToggle>
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
            Träd ej över din tröskel in,<br />
            förrän du spejat och spanat.<br />
            Ty ovisst är att ej vet, var ovänner sitta. <br /> 
            Fä dör, fränder dör, själv dör du likaledes.  <br />
            Men ett vet jag som aldrig dör,  <br />
            dom över död man.
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
            paddingLeft: '16px'
          }}
        >
          <CustomToggle eventKey="1">Dread Age</CustomToggle>
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
            The skies slowly turns to red, as prophecies fortold.<br />
            A darkness sweeps towards the worlds demise.<br />
            Challenging life itself these lands will gravely bleed,<br />
            from wounds and scars an endless night will rise.<br />
            Now, stand proud, and fend off the creatures, that hides in the shade.<br />
            Now fight, or die, a proud fate awaits once you enter the glade<br /> 
            <br />
            With frozen looks defiled by time, and silence in their minds,<br />
            The army of the fallen rise anew.<br />
            Summoned from the darkened depths with death as force of mind<br /> 
            Both froststains and firelinks are spewn!<br />
            The ritual, is done, eternal night start, to take its own shape<br /> 
            All hope, is gone, resist your own fate!<br />
            <br />
            A new age begins, the soil starts to burn.<br />
            The frost fires sweeps through our sins.<br /> 
            The ashes of time will scattered from light,<br />
            the dread age of man is nigh.<br />
            Our memories, whispered from a world, turning blind.<br /> 
            <br />
            Lost inside a vortex, of never-ending pain.<br />
            The age of man shall end, tonight.<br />
            <br />
            Now, stand proud, the dead army marches, and we will hold fast or,<br />
            Fall, if we die, Valhalla will greet us to battle once more!<br /> 
            <br />
            The new age begins, the soil starts to burn.<br />
            The frost fires sweeps through our mind.<br />
            The ashes of time now scatters from light, the dread age of man is nigh,<br />
            our memories whispered, from a world turning blind.<br />
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
            paddingLeft: '16px'
          }}
        >
          <CustomToggle eventKey="2">Jotun War</CustomToggle>
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
            Drenched away from sunlight&apos;s eye,<br /> 
            where shadows dance at dawn.<br /> 
            Where frozen peaks of endless pain<br />
            drowns in eternal storms.<br />
            That&apos;s where I ask, my warriors,<br />
            with battle scars from old,<br />
            To stand with me, once more arise, let<br />
            your destiny unfold!<br />
            <br />
            Rise as one, a force feared and known.<br />
            Jotunheim will now face the northern hordes.<br /> 
            <br />
            Our warriors descend on soil,<br />
            where frozen hope awaits.<br />
            The eerie sound of nothingness,<br /> 
            is hastily flung away.<br />
            Brace yourselves, my warriors,<br /> 
            and raise your battle cries!<br />
            The giants will draw back in force<br /> 
            Once we teach them how, to die!<br />
            <br />
            The ground starts to tremble, the skies becomes black.<br />
            With hate and despair the giants attack.<br />
            <br />
            Fight till death is what we want,<br />
            our freedom we will claim.<br />
            My soul is linked through forge and flame,<br />
            to face whatever pain.<br />
            <br />
            Blood to bone!<br />
            Forever gone.<br />
            An eagles flight.<br />
            Forever stained!<br />
            <br />
            A close-call victory was won that frost-stained day.<br />  
            The giants were driven back in vengeance bloody name.<br /> 
            <br />
            Stand proud, my Einherjars,<br />  
            we&apos;ve won this dreaded day,<br /> 
            the giants forces in the north,<br /> 
            will soon be swept away.<br />
            Now clean your wounds and swipe your blades,<br />
            more thresholds lies ahead.<br />
            And I won&apos;t stop my darkened path<br /> 
            until they all are dead!<br />
            <br />
            The rimsurturs will pay this day, eternal night will fall.<br /> 
            The war of Aesirs&apos;s claims our souls, and victory&apos;s our call!<br />
            Bretheren will fall to them, but we will persevere.<br /> 
            They will drown in their own blood, <br />
            And our names they learn to fear!<br />
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
            paddingLeft: '16px'
          }}
        >
          <CustomToggle eventKey="3">Ragnarok</CustomToggle>
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
            The twilight of the Aesir faith is nigh,<br />  
            the Fimbulwinter&apos;s cold, strikes hard!<br />
            For three long years, an ever-frost will reign.<br /> 
            The sun is dead and the world is drenched in pain,<br /> 
            chaos time, awake!<br />
            <br />
            When brother turns on brother,<br />
            when Heimdall sounds his horn,<br /> 
            then Yggdrasil will bleed,<br /> 
            when the Vigrid plains becomes a battlefield.<br /> 
            <br />
            The charred-red and Fjalar unleash the darkened, hordes,<br />  
            while Gullinkambe cals on Aesirs, for war!<br />
            The hordes of Hel and Muspelheim arrives,<br />  
            while aesirs ride from Asgaards mighty halls,<br /> 
            all sworn to die!<br />
            <br />
            The Fenris wolf will swallow the sun,<br />
            while Hatr devours the moon.<br />
            Jormundr will wash ashore and drench the the world in doom.<br />  
            Loki pierce his former friends with words of rage and hate,<br />  
            Surt engulfes the entire world, in a final, fiery fate.<br />  
            <br />
            Mjolnir crushes the giant snake of dread,<br /> 
            but his poisoned blood will snare Thor, to the dead!<br />  
            Odin falls as Fenris devours him whole,<br />
            but Vidar avenge his king with the dreadwolfs soul!<br /> 
            The world is lost!<br />
            <br />
            Tyr will slay the fearsome Garm,<br /> 
            from the belly, of the beast.<br /> 
            Loki and Heimdall is locked in fight and neither will see the feast.<br /> 
            Darkened forces faces the gods in a final, bloody fight.<br />
            The world will burn from Ragnarök, the end time strikes tonight!<br />
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
            paddingLeft: '16px'
          }}
        >
          <CustomToggle eventKey="4">Call For Revenge</CustomToggle>
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
            Our story will lead to a gloom-filled descent,<br />
            a path stained with madness and pain.<br /> 
            Trust with your instincts, don&apos;t look with your eyes,<br /> 
            or find your own soul lost in vain.<br />
            The sharp edge of hate glows within my own mind,<br />  
            when the froststorms are leaving their mark.<br />  
            With a vengeance denied and a hate growing blind,<br /> 
            a blood-curse is born from the dark!<br />
            <br />
            The walls starts to crumble inside my mind cell,<br /> 
            my sanity is finally erased.<br />
            From the ashes of hope, a mad god arise,<br />  
            blood-drunk, all twisted and crazed!<br />
            My etheral precense is stopped by no walls,<br />  
            no mortal shall deny my call!<br />
            With a vengeance denied and a growing downfall,<br /> 
            a blood-curse is born from the dark!<br />
            <br />
            Cold winds are roaring, all through the night,<br />  
            My presence shakes the Earth!<br />
            Guardians of time and death, feel my broken trust!<br />
            when I find my former fiends I&apos;ll turn them into dust!<br /> 
            <br />
            Scream out in fear of the pain that will come,<br />  
            your knowledge is fuel for my hate.<br /> 
            So come all, come out, wherever you hide,<br /> 
            and face your own grim-cloaked fate!!<br />
            I am awakened to undo my death,<br />  
            from your own fate you cannot flee.<br />  
            My judge from beyond shall enslave your whole lives,<br /> 
            your souls will set me free.<br />
            <br />
            Revenge upon you, freedom denied.<br />  
            Death will makes your call!<br /> 
            Fight your own sadness, loose all your hope.<br />  
            I will awaken judgement call!<br />
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
            paddingLeft: '16px'
          }}
        >
          <CustomToggle eventKey="5">Force of Judgement</CustomToggle>
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
            Ever since the universe was born,<br />  
            I&apos;ve observed it, from the shadows.<br /> 
            I gave it knowledge, fears and life,<br /> 
            I am alfa, I am omega.<br /> 
            <br />
            An endless darkness stands as my own home,<br /> 
            I have lived there, long past the eons.<br />  
            Bound to be the judge of every soul,<br />  
            a harsh god, an entity of justice.<br />  
            <br />
            Now, all my time, and all my life,<br />  
            has been lost, amongst the stars,<br />  
            but my mind, still recall, a time beyond words where,<br />  
            <br />
            lies, that agonize, still will haunt,<br />  
            my raging vengeance. Where all,<br />
            cries, they will drown, a thousand times,<br />  
            in the blood of their masters.<br />
            <br />
            Search your own self, judge your own glood,<br />  
            Remember your call and unleash you doom<br />
            Realease your own hate and cry for your soul,<br /> 
            the judgement day for the universe has come.<br />  
            <br />
            They will all remember my name,<br /> 
            when the nightsky descends upon them.<br />  
            Nothing in the universe is safe,<br />
            when I show my own true fiendish form.<br />  
            <br />
            So, day and night, became one,<br /> 
            when the shadows consumed them<br />
            all, and the skies, starts to bleed,<br />  
            from the almighty flames.<br />
            <br />
            Now prepare, your demise, you will quench,<br /> 
            my raging vengeance. Where all,<br />
            cries, they will drown, a thousand times,<br />  
            in the blood of their masters.<br />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}