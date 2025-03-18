import React from "react";
import ReviewCard from "../components/ReviewCard";

const reviews = {
  en: [
    {
      title:
        "Triumph Adventure Malaga is simply THE BEST hire company that I've ever dealt with.",
      content: `
	<p>Triumph Adventute Malaga is simply THE BEST hire company that I've ever dealt with.  It's so refreshing to have a genuine hire company that wants to make sure you have the best possible experience, on first class bikes, rather than other hire companies who are looking to fleece you in some way.</p>
<br />
<p>The whole team are excellent, but a special mention must go to Marta, who is SO awesome to deal with,  and promptly answers any question you may have during the booking process or on handover. We hired Tiger 900GT Pros, which were amazing on the roads around the Sierra Nevada (and much lighter than my own BMW GSA 1250).</p> 
<br />
<p>If you're thinking of hiring a bike in southern Spain, I would 100% recommend them.  They can be trusted fully,  and are so friendly to deal with.</p>  

<p>On a previous hire with them last year one of our gang crashed and broke a collar bone,  and the only thing they were concerned about was whether he was OK - nothing else mattered apart from his welfare - the bike damage was simply dealt with by paying the 300 Euro excess of the Premium Insurance we'd taken out.</p> 
<br />
<p>Thankfully this year's trip was incident free, and fantastic fun in this amazing area.</p> 
<br />
<p>First class service from a first class team!!</p>
	  `,
      name: "Simon Rees",
      image:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer1.png", // Replace with actual profile image URL
      rating: 5,
    },
    {
      title: "Review of Triumph Adventure Experience Spain Rental Service",
      content: `
		<p>Review of Triumph Adventure Experience Spain Rental Service</p>
		<br />
		<p>I recently rented a bike from Triumph Adventure Experience Spain, and the entire experience was outstanding! From the moment I arrived, the staff made everything easy and efficient. The rental process was smooth, with clear instructions and options tailored to my riding experience and preferences. The staff were friendly and knowledgeable, answering all my questions and providing great local insights on where to ride.</p>
		<br />
		<p>The bike selection was impressive, featuring a range of well-maintained Triumph models ready for any adventure. My bike was in perfect condition, clean, and equipped with everything needed for a safe and enjoyable ride. It performed excellently on both paved roads and off-road trails, giving me a thrilling and versatile experience in Spain's stunning landscapes.</p>
		<br />
		<p>The team also went the extra mile to ensure I had the right gear and offered useful tips for the areas I planned to explore. It was clear that they take pride in their service and genuinely care about their customers having an unforgettable adventure.</p>
		<br />
		<p>I highly recommend Triumph Adventure Experience Spain’s rental service for anyone looking to explore Spain on a top-quality Triumph motorcycle. It’s a fantastic way to experience</p>
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
	  <p>Renting a motorcycle from Triumph Adventure Experience Spain was one of the highlights of my trip! The whole process was straightforward and well-organized, making it easy to get on the road without any hassle. The staff were incredibly helpful, ensuring that I had the right bike and gear for my adventure.</p>
    <br/>
<p>The selection of Triumph motorcycles was fantastic, with each bike in top-notch condition and ready for action. The one I chose handled beautifully across different terrains, whether cruising on smooth roads or tackling more rugged trails. It was clear that these bikes are maintained with great care.</p>
<br/>
<p>Beyond just renting a bike, the team provided excellent recommendations for scenic routes and must-see spots. Their local knowledge made a huge difference, helping me discover incredible places I wouldn’t have found on my own.
If you’re considering exploring Spain on two wheels, this is the place to go. Professional service, great bikes, and an experience you won’t forget!</p>
	`,
      name: "Martine Campens",
      image:
        "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer3.png", // Replace with actual profile image URL
      rating: 5,
    },
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
