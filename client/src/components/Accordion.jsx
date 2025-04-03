import React, { useState } from "react";

const accordionData = {
  en: [
    {
      title: "Break the barriers before they grow between you and your child.",
      content: "Most professionals step in when the problems are already there. Some work with children, others with parents. Growly is different. Our method is preventive, practical, and experiential. We don’t wait for walls to rise—we teach you how to build bridges from the start. \n💡 Parenting doesn’t have to be a constant struggle. With clear, firm, and fun tools, you’ll create a strong, lasting bond with your children, preventing emotional distance from growing over the years. Growly: Your path to a healthy, balanced, and connected family. 🌱"
    },
    {
      title: "Are you aware that you lack the tools and resources to truly guide your children?",
      content: "In past generations, children learned life skills through everyday interaction and the example of extended families. But today’s reality is different. Kids have more stimuli than ever, but fewer spaces where they feel important or can meaningfully contribute. The problem is that traditional discipline methods—punishment or permissiveness—don’t work anymore. Punishment might stop behavior in the short term but doesn’t build long-term skills. Permissiveness creates insecurity and a lack of limits. \n❗ The absence of clear and effective methods forces many parents to improvise."
    },
    {
      title: "Are you parenting with the tools your child actually needs… or just improvising?",
      content: "It's normal—no one taught us how to be parents. Most of us either repeat what we lived as kids or try to do the opposite... without a clear plan. When challenges arise—tantrums, disobedience, emotional disconnection—we improvise. Parenting turns into a cycle of: \n🔄 'Not today, I’ll talk to them tomorrow.' \n🔄 'It’s just a phase.' \n🔄 'Here, take the phone so we avoid a fight.' But improvising has a cost. Today's small issues can become tomorrow’s major problems: emotional distance, power struggles, guilt, and frustration. Growly helps you parent with clarity, love, and confidence—giving your children the guidance they truly need. \n💡 If you don’t lead their education, someone else will... and you might not like the outcome."
    },
    {
      title: "What can you do with everything you learn from the Growly method?",
      content: "🌟 Apply it from day one and start building harmony and connection at home. \n👨‍👩‍👧‍👦 Strengthen the bond with your children aged 2 to 12, guiding them with love and firmness so they grow up secure, responsible, and empathetic. \n🧘‍♀️ Become a calm and respectful role model, boosting your child’s self-esteem and resilience. \n✨ Prevent conflicts and turn daily challenges into learning and growth opportunities. \n💡 Disagreements won’t disappear, but you’ll face them with clarity and empathy. With Growly, you're not just raising kids—you’re building an unbreakable relationship for life."
    }
  ],
  es: [
    {
      title: "Rompe las barreras antes de que se levanten entre tu hijo y tú.",
      content: "Muchos profesionales intervienen cuando los problemas ya están ahí. Algunos trabajan con los niños, otros con los padres. Growly es diferente. Nuestro método es preventivo, práctico y vivencial. No esperamos a que haya un muro que derribar… te enseñamos a construir puentes desde el principio. \n💡 Educar no tiene por qué ser una lucha constante. Con herramientas claras, firmes y divertidas, crearás una conexión fuerte y duradera con tus hijos, evitando que la distancia emocional crezca con los años. Growly: El camino hacia una relación de complicidad familiar, sana y equilibrada. 🌱"
    },
    {
      title: "¿Eres consciente de que no dispones de herramientas ni recursos para educar a tus hijos?",
      content: "En generaciones pasadas, los niños aprendían habilidades de vida a través de la convivencia diaria y el ejemplo de sus comunidades y familias extensas. Sin embargo, la realidad actual es muy diferente. Hoy, vivimos en un mundo donde los niños tienen más oportunidades y estímulos que nunca, pero menos espacios para sentirse importantes y contribuir de manera significativa. El problema radica en que los métodos de disciplina tradicionales – castigos o permisividad – NO funcionan con las nuevas generaciones. El castigo detiene la conducta momentáneamente, pero no construye habilidades a largo plazo. La permisividad genera inseguridad y falta de límites, dejando a los niños sin herramientas para autorregularse. \n❗ ¡¡La falta de métodos claros y efectivos empuja a muchos padres a la improvisación!!"
    },
    {
      title: "¿Estás educando a tu hijo con las herramientas que realmente necesita… o simplemente improvisas?",
      content: "Es normal. No nos han enseñado a ser padres. La mayoría de nosotros repetimos lo que vivimos de niños o intentamos hacerlo diferente, sin un plan claro. Y cuando llegan los momentos difíciles – las rabietas, la desobediencia o el distanciamiento emocional – improvisamos. La crianza se convierte en una sucesión de: \n🔄 “Hoy no tengo paciencia, mañana lo hablo con él.” \n🔄 “Ya crecerá, es solo una fase.” \n🔄 “Mejor le dejo el móvil, así no hay conflicto.” Y esa improvisación tiene un precio. Los pequeños desafíos de hoy se convierten en problemas mayores con el tiempo: Desconexión emocional. Luchas de poder constantes. Sentimiento de culpa o frustración. El problema no es que seas mal padre o madre. El problema es la falta de un método claro. Growly nace para ayudarte a educar de forma consciente y efectiva, sin dejar al azar lo que más importa: el bienestar y el desarrollo emocional de tus hijos. \n💡 Si no lideras su educación, otros lo harán por ti… y puede que no te guste el resultado."
    },
    {
      title: "¿Qué puedes hacer con todo lo que aprendas gracias al método Growly?",
      content: "🌟 Ponerlo en práctica desde el primer día y empezar a crear un ambiente de armonía y conexión en casa. \n👨‍👩‍👧‍👦 Fortalecer el vínculo con tus hijos de 2 a 12 años, guiándolos con amor y firmeza para que crezcan seguros, responsables y empáticos. 🧘‍♀️ Ayudarte a ti mismo a ser un modelo de calma y respeto, fomentando la autoestima y resiliencia de tus hijos, y creando un hogar donde todos se sienten valorados y escuchados. \n✨ Prevenir conflictos antes de que surjan y manejar con éxito los desafíos cotidianos, transformando berrinches, desobediencia o frustración en oportunidades de aprendizaje y crecimiento. \n💡 Saber que los desacuerdos o momentos difíciles no desaparecerán por completo, pero tendrás las herramientas para afrontarlos con seguridad, paciencia y empatía, fortaleciendo cada día más la relación con tus hijos. \nCon el método Growly, no solo educas… construyes una relación inquebrantable para toda la vida."
    }
  ],
  de: [
    {
      title:
        "Liefert das Abenteuer-Paket wirklich solch außergewöhnliche Ergebnisse?",
      content:
        "Ja, aber nimm nicht nur unser Wort dafür – lass unsere Fahrer selbst zu Wort kommen. Laut unserer neuesten Umfrage würden 88 % der Teilnehmer Triumph Adventure jeder anderen Motorraderfahrung, die sie ausprobiert haben, den Vorzug geben.",
    },
    {
      title:
        "Was passiert, wenn ich die Ergebnisse, die ich erwarte, nicht sehe? Bieten Sie irgendwelche Garantien an?",
      content:
        "Absolut! Wir sind so überzeugt von der Qualität unseres 7-Tages-Abenteuer-Pakets, dass jeder Fahrer durch unsere exklusive Abenteuergarantie geschützt ist. Wenn deine Erfahrung nicht deinen Erwartungen entspricht, erstatten wir dir deine Zahlung – ohne Fragen zu stellen.",
    },
    {
      title: "Was ist das Geheimnis hinter solch unglaublichen Ergebnissen?",
      content:
        "Neben einer personalisierten VIP-Erfahrung umfasst unser 7-Tages-Abenteuer-Paket einen sorgfältig zusammengestellten Reiseplan, der von Expertenguides mit über 10 Jahren Erfahrung erstellt wurde. Dieses Handbuch enthüllt die versteckten Schätze Andalusiens und sorgt dafür, dass du das Beste der Region erlebst. Genau wie der bewährte Erfolg unserer Touren sind wir zuversichtlich, dass 95 % der Fahrer unvergessliche Momente während ihrer Reise entdecken werden.",
    },
  ],
};

const Accordion = ({ lang }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData[lang].map((item, index) => (
        <div
          key={index}
          className="border-b flex flex-col gap-2 border-gray-200 transition-all duration-300"
        >
          {/* Accordion Header */}
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-triumph-bg-gray hover:bg-gray-100 focus:outline-none text-DemiBold"
            onClick={() => toggleAccordion(index)}
          >
            <span
              className={`text-sm lg:text-base  ${
                activeIndex === index ? "text-triumph-red " : "text-black "
              } `}
            >
              {item.title}
            </span>
            <svg
              className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Accordion Content */}
          <div
            className={`bg-triumph-bg-gray overflow-hidden transition-max-height duration-300 ease-in-out ${
              activeIndex === index ? "max-h-96 mb-3" : "max-h-0"
            }`}
          >
            <div className="px-6 py-4 text-gray-600 text-Regular text-sm lg:text-base whitespace-pre-line">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
