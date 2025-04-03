import React from "react";
import ReviewCard from "../components/ReviewCard";

const reviews = {
  en: [
    {
      title: "Growly helped me become the parent I always wanted to be.",
      content: `
        <p>Before Growly, parenting felt like survival mode. I was reacting all the time and constantly doubting myself.</p>
        <br />
        <p>With Growly, everything changed. I learned how to stay calm, connect with my child, and guide with clarity and love.</p>
        <br />
        <p>The tools are practical, the mentoring is amazing, and the change is real. I would 100% recommend it to any parent who feels lost or overwhelmed.</p>
        <br />
        <p>Now I enjoy parenting again—and so does my child.</p>
      `,
      name: "Laura Martinez",
      image: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer1.png",
      rating: 5
    },
    {
      title: "From frustration to connection. This method works.",
      content: `
        <p>I used to raise my voice constantly. I didn’t want to, but I felt helpless.</p>
        <br />
        <p>Growly showed me there’s another way. A way to educate without yelling or punishment. It gave me tools I could apply right away—and they actually work.</p>
        <br />
        <p>Now, our home feels more peaceful. We argue less, we laugh more, and I feel more confident as a father.</p>
      `,
      name: "Carlos Rodríguez",
      image: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer2.png",
      rating: 5
    },
    {
      title: "Growly gave me the confidence and calm I never had.",
      content: `
        <p>As a single mother, I often felt alone, exhausted, and unsure. Growly changed that.</p>
        <br/>
        <p>The sessions were clear, emotional, and full of practical wisdom. I learned how to set limits with love, how to listen, and how to lead with empathy.</p>
        <br/>
        <p>Now, I feel strong, supported, and most importantly—connected with my daughter.</p>
      `,
      name: "Beatriz Méndez",
      image: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer3.png",
      rating: 5
    }
  ],
  es: [
    {
      title: "Growly me ayudó a ser la madre que siempre quise ser.",
      content: `
        <p>Antes de Growly, la crianza era una lucha diaria. Estaba en modo supervivencia, todo el tiempo reaccionando, llena de dudas.</p>
        <br />
        <p>Con Growly aprendí a mantener la calma, conectar con mi hija y educar desde el amor y la firmeza.</p>
        <br />
        <p>Las herramientas son claras, los acompañamientos son increíbles y el cambio es profundo. Lo recomendaría al 100% a cualquier madre o padre que se sienta perdido.</p>
        <br />
        <p>Ahora disfruto la crianza de nuevo—y mi hija también.</p>
      `,
      name: "Laura Martínez",
      image: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer1.png",
      rating: 5
    },
    {
      title: "Pasé de la frustración a la conexión. Este método funciona.",
      content: `
        <p>Solía gritar mucho. No quería hacerlo, pero me sentía impotente.</p>
        <br />
        <p>Growly me mostró que hay otra manera. Una forma de educar sin castigos ni gritos. Me dio herramientas prácticas que pude aplicar desde el primer día.</p>
        <br />
        <p>Hoy en casa hay más paz, menos conflictos, y más confianza en mí como padre.</p>
      `,
      name: "Carlos Rodríguez",
      image: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer2.png",
      rating: 5
    },
    {
      title: "Growly me dio la calma y seguridad que nunca tuve.",
      content: `
        <p>Como madre soltera, me sentía sola, agotada y perdida. Growly me dio un camino.</p>
        <br/>
        <p>Las sesiones son claras, emocionales y muy prácticas. Aprendí a poner límites con respeto, a escuchar de verdad y a liderar con empatía.</p>
        <br/>
        <p>Ahora me siento fuerte, acompañada y, sobre todo, conectada con mi hija.</p>
      `,
      name: "Beatriz Méndez",
      image: "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer3.png",
      rating: 5
    }
  ],
  de: [
    {
      title:
        "Triumph Adventure Malaga is simply THE BEST hire company that I've ever dealt with.",
      content: `
	<p>Triumph Adventure Málaga ist einfach DIE BESTE Mietfirma, mit der ich je zu tun hatte. Es ist so erfrischend, eine echte Mietfirma zu haben, die sicherstellen möchte, dass du die bestmögliche Erfahrung machst, mit erstklassigen Motorrädern, im Gegensatz zu anderen Mietfirmen, die nur darauf aus sind, dich irgendwie abzuzocken.</p>
<br />
<p>Das gesamte Team ist hervorragend, aber ein besonderes Lob geht an Marta, die SO großartig im Umgang ist und jede Frage, die man während des Buchungsprozesses oder bei der Übergabe hat, schnell beantwortet. Wir haben die Tiger 900GT Pros gemietet, die auf den Straßen rund um die Sierra Nevada fantastisch waren (und viel leichter als meine eigene BMW GSA 1250).</p> 
<br />
<p>Wenn du darüber nachdenkst, ein Motorrad im Süden Spaniens zu mieten, kann ich sie zu 100% empfehlen. Sie sind absolut vertrauenswürdig und unglaublich freundlich im Umgang.</p>  

<p>Bei einer früheren Mietung letztes Jahr hatte einer aus unserer Gruppe einen Unfall und brach sich das Schlüsselbein. Das einzige, was sie interessierte, war, ob er in Ordnung war – nichts anderes zählte, außer seinem Wohlbefinden – der Schaden am Motorrad wurde einfach durch die Zahlung des 300-Euro-Selbstbehalts der Premium-Versicherung, die wir abgeschlossen hatten, geregelt.</p> 
<br />
<p>Glücklicherweise war diese Reise unfallfrei und hat unglaublich viel Spaß gemacht in dieser fantastischen Region.</p> 
<br />
<p>Erstklassiger Service von einem erstklassigen Team!</p>
	  `,
      name: "Simon Rees",
      image:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer1.png", // Replace with actual profile image URL
      rating: 5,
    },
    {
      title: "Review of Triumph Adventure Experience Spain Rental Service",
      content: `
		<p>Ich habe kürzlich ein Motorrad bei Triumph Adventure Experience Spain gemietet, und die gesamte Erfahrung war hervorragend! Vom Moment meiner Ankunft an machte das Team alles einfach und effizient. Der Mietprozess verlief reibungslos, mit klaren Anweisungen und Optionen, die auf meine Fahrerfahrung und Vorlieben abgestimmt waren. Das Personal war freundlich und kompetent, beantwortete alle meine Fragen und gab mir wertvolle lokale Tipps zu den besten Strecken.</p>
		<br />
		<p>Die Auswahl an Motorrädern war beeindruckend, mit einer Vielzahl gut gewarteter Triumph-Modelle, die für jedes Abenteuer bereit waren. Mein Motorrad war in einwandfreiem Zustand, sauber und mit allem ausgestattet, was für eine sichere und angenehme Fahrt notwendig ist. Es lief ausgezeichnet sowohl auf asphaltierten Straßen als auch auf Offroad-Strecken und bot mir ein aufregendes und vielseitiges Erlebnis in den atemberaubenden Landschaften Spaniens.</p>
		<br />
		<p>Das Team ging auch einen Schritt weiter, um sicherzustellen, dass ich die richtige Ausrüstung hatte, und gab nützliche Tipps für die Gebiete, die ich erkunden wollte. Es war offensichtlich, dass sie stolz auf ihren Service sind und sich wirklich darum kümmern, dass ihre Kunden ein unvergessliches Abenteuer erleben.</p>
		<br />
		<p>Ich kann den Mietservice von Triumph Adventure Experience Spain jedem empfehlen, der Spanien auf einem Motorrad von höchster Qualität erkunden möchte. Es ist eine fantastische Möglichkeit, das Land zu erleben!</p>
	  `,
      name: "Brown Williams",
      image:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer2.png", // Replace with actual profile image URL
      rating: 5,
    },
    {
      title:
        "Review of Triumph Adventure Experience Spain – Triumph Scrambler 400 Rental",
      content: `
	  <p>Das Mieten eines Motorrads bei Triumph Adventure Experience Spain war eines der Highlights meiner Reise! Der gesamte Prozess war unkompliziert und gut organisiert, sodass ich ohne Probleme auf die Straße kam. Das Team war unglaublich hilfsbereit und stellte sicher, dass ich das richtige Motorrad und die passende Ausrüstung für mein Abenteuer hatte.</p>
    <br/>
<p>Die Auswahl an Triumph-Motorrädern war fantastisch, jedes Motorrad war in einwandfreiem Zustand und bereit für den Einsatz. Das Motorrad, das ich auswählte, fuhr sich auf verschiedenen Terrains hervorragend, egal ob auf glatten Straßen oder auf raueren Wegen. Es war offensichtlich, dass diese Motorräder mit großer Sorgfalt gewartet werden.</p>
<br/>
<p>Neben dem einfachen Mieten eines Motorrads gab das Team exzellente Empfehlungen für malerische Routen und Sehenswürdigkeiten. Ihr lokales Wissen machte einen riesigen Unterschied und half mir, unglaubliche Orte zu entdecken, die ich alleine nie gefunden hätte.</p> 
<br/>
<p>Wenn du Spanien auf zwei Rädern erkunden möchtest, ist dies der richtige Ort. Professioneller Service, tolle Motorräder und ein unvergessliches Erlebnis!</p>
	`,
      name: "Martine Campens",
      image:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer3.png", // Replace with actual profile image URL
      rating: 5,
    },
  ],
};

const LongReviews = ({ lang }) => {
  return (
    <div className="max-w-[5/6] mx-auto p-12 lg:p-6 flex gap-8 lg:gap-10 flex-col lg:flex-row">
      {reviews[lang].map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default LongReviews;
