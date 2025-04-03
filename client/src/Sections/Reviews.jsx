import React from "react";

const translations = {
  en: {
    heading: "Stories That Inspire",
    subHeading: "Based on 342 family transformations",
    lauraMartinez:
      "Growly has changed everything. Now I parent with calm and confidence—and I see the results every day.",
    carlosRodriguez:
      "It gave me the tools I never knew I needed. My connection with my son is stronger than ever.",
    sandraNunez:
      "What a team. What a method. Clear, respectful, practical. Parenting stopped being a struggle.",
    javierMedina:
      "Growly helped us stop arguing and start parenting as a team. It brought peace to our home.",
    beatrizMendez:
      "I thought I was failing as a mom. Now I feel proud, empowered, and connected to my kids.",
    nataliaSuarez:
      "The mentors were always there, the content was clear, and the community made me feel I’m not alone.",
    alejandraCampos:
      "If you're tired of yelling and guilt, this is the place. Growly helped me raise my kids with love and limits."
  },
  es: {
    heading: "Historias que Inspiran",
    subHeading: "Basado en 342 transformaciones familiares",
    lauraMartinez:
      "Growly lo cambió todo. Ahora educo con calma y seguridad, y lo noto cada día en casa.",
    carlosRodriguez:
      "Me dio las herramientas que nunca nadie me enseñó. Hoy tengo una conexión real con mi hijo.",
    sandraNunez:
      "Qué equipo. Qué método. Claro, respetuoso y práctico. La crianza dejó de ser una lucha.",
    javierMedina:
      "Growly nos ayudó a dejar de discutir y empezar a educar como un equipo. Trajo paz a nuestro hogar.",
    beatrizMendez:
      "Sentía que estaba fallando como madre. Ahora me siento orgullosa, segura y conectada con mis hijos.",
    nataliaSuarez:
      "Los mentores siempre estuvieron ahí, el contenido fue claro, y la comunidad me hizo sentir acompañada.",
    alejandraCampos:
      "Si estás cansada de los gritos y la culpa, este es tu lugar. Growly me enseñó a educar con amor y límites."
  },
  de: {
    heading: "Geschichten, die inspirieren",
    subHeading: "Basierend auf 342 Bewertungen",
    garyTaylor:
      "Triumph Adventure bietet ein unvergessliches Motorrad-Abenteuer. Ich kann es kaum erwarten, wiederzukommen!",
    mattGreene:
      "Was für ein Team. Was für ein Ort. Fantastischer Service, tolle Motorräder zu wirklich guten Preisen. Großartiges Team, deshalb sind Motorradfahrer einfach die besten.",
    andyAndrej:
      "Perfekter Service, extrem freundliches und hilfsbereites Personal, Motorräder in sehr gutem Zustand. Sehr zu empfehlen.",
    federicoRicci:
      "Viele Dank an das gesamte Triumph-Team für den exzellenten Service und die Aufmerksamkeit, besonders an Marta und Antonio. Das Motorrad war ausgezeichnet – ich habe es wirklich genossen!",
    charlottePrescott: "Tolle Erfahrung, hilfsbereites Personal.v",
    alexZolotov:
      "Ich hatte eine wundervolle Erfahrung, ein Motorrad in diesem Geschäft zu mieten. Das Motorrad war neu und leistungsfähig. Ich hatte die Möglichkeit, viele coole Orte in Andalusien zu besuchen. Das Personal im Geschäft war nett und hilfsbereit. Vielen Dank :)",
    zdravko:
      "Exzellenter Service, Antonio war freundlich, professionell und kompetent. Das Motorrad und die Ausrüstung waren erstklassig und haben meine Erwartungen übertroffen. Ich werde das Unternehmen definitiv wieder nutzen.",
  },
};

const Reviews = ({ lang }) => {
  return (
    <section className="reviews bg-triumph-beige w-full h-max flex py-12 lg:py-16 lg:justify-center items-center flex-col gap-6 ">
      <div className="w-3/4 text-center">
        <h1 className="text-Heavy text-2xl lg:text-5xl leading-tight lg:leading-tight text-triumph-red">
          {translations[lang]?.heading || translations["en"].heading}

          {/* Stories That Inspire */}
        </h1>

        <div className=" flex items-center justify-center gap-3 lg:gap-6 mt-4">
          <div className="stars flex gap-1 lg:gap-2">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/12f1d19c3c42cbfaea95ce0f0ea988b57f4b8672/images/web-svg-icons/star.svg"
                alt="star"
                className="h-4 lg:h-8"
              />
            ))}
          </div>
          <p className="text-medium text-sm lg:text-3xl">
            {translations[lang]?.subHeading || translations["en"].subHeading}
            {/* Based on 342 reviews */}
          </p>
        </div>
      </div>

      <div class="  flex flex-col items-center place-items-center  lg:items-start md:grid lg:grid lg:mt-10 parent md:gap-x-4 md:gap-y-4 gap-6 ">
        {/* Div 1 */}

        <div class="div1 grid-divs ">
          <div className="">
            <video
              controls
              width="640"
              height="360"
              controlsList="nodownload"
              loading="lazy"
              poster="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewPoster1.webp"
              className="rounded-xl w-full h-auto"
            >
              {/* <source src="./src/assets/Videos/review_1.mp4" type="video/mp4" /> */}
              <source
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/main/Videos/review_1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className=" flex flex-col gap-1 mt-4">
            <div className="stars flex gap-0">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/yellow-star.webp"
                  alt="star"
                  className="h-4 "
                />
              ))}
            </div>
            <span className="text-Bold">Laura Martinez</span>

            <span className="block text-sm tracking-tight review">
              {/* Triumph Adventure offers an unforgettable motorcycle adventure. I
              can't wait to go back! */}
              {translations[lang]?.lauraMartinez || translations["en"].lauraMartinez}
            </span>
          </div>
        </div>
        {/* Div 2 */}

        <div className="div2 h-full gap-4   flex flex-col items-center justify-between">
          <div class=" grid-divs flex flex-col justify-between gap-2">
            <div className="flex">
              <div className="flex-1">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex-4">
                <span className="block text-sm tracking-tight">
                  {/* What a crew. What a place. Fantastic service, great bikes at
                  really good prices. Brilliant team, this is why motorcyclists
                  are just the best. */}
                  {translations[lang]?.carlosRodriguez ||
                    translations["en"].carlosRodriguez}
                </span>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex-3 flex items-center gap-2 ">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer2.png"
                  alt=""
                  className="h-12"
                />

                <span className="text-Bold text-sm">Carlos Rodriguez</span>
              </div>

              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                alt=""
                className=" h-8 w-8"
              />
            </div>
          </div>
          {/* Div 3 */}

          <div class=" grid-divs flex flex-col justify-between gap-2">
            <div className="flex">
              <div className="flex-1">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex-4">
                <span className="block text-sm tracking-tight">
                  {/* Perfect Service, extremely nice and helpful staff, motorcycles
                  in very good shape. Highly recommended. */}
                  {translations[lang]?.sandraNunez ||
                    translations["en"].sandraNunez}
                </span>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex-3 flex items-center gap-2 ">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer1.png"
                  alt=""
                  className="h-12"
                />

                <span className="text-Bold text-sm">Sandra Nuñez</span>
              </div>

              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                alt=""
                className=" h-8 w-8"
              />
            </div>
          </div>
          {/* Div 4 */}

          <div class=" grid-divs flex flex-col justify-between gap-2">
            <div className="flex ">
              <div className="flex-1">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex-4">
                <span className="block text-sm tracking-tight">
                  {/* Many thanks to all the Triumph staff for the excellent service
                  and attentiveness, especially to Marta and Antonio. The bike
                  was excellent—I really enjoyed it! */}
                  {translations[lang]?.javierMedina ||
                    translations["en"].javierMedina}
                </span>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex-3 flex items-center gap-2 ">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer4.webp"
                  alt=""
                  className="h-12"
                />

                <span className="text-Bold text-sm">Javier Medina</span>
              </div>

              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                alt=""
                className=" h-8 w-8"
              />
            </div>
          </div>
        </div>
        {/* Div 5 */}

        <div class="div3 grid-divs">
          <div className="">
            <video
              controls
              width="640"
              height="360"
              controlsList="nodownload"
              poster="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewPoster2.webp"
              className="rounded-xl w-full h-auto"
            >
              <source
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/main/Videos/review_2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className=" flex flex-col gap-1 mt-4">
            <div className="stars flex gap-0">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/yellow-star.webp"
                  alt="star"
                  className="h-4 "
                />
              ))}
            </div>
            <span className="text-Bold">Beatriz Mendez</span>

            <span className="block text-Regular text-xs review">
              {/* Great experience, helpful staff. */}
              {translations[lang]?.beatrizMendez ||
                translations["en"].beatrizMendez}
            </span>
          </div>
        </div>
        {/* Div 6 */}

        <div class="div4 grid-divs-rectangle flex flex-col justify-between gap-2">
          <div className="flex">
            <div className="flex-1">
              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                alt=""
                className="h-6"
              />
            </div>
            <div className="flex-4">
              <span className="block text-sm tracking-tight">
                {/* I had a wonderful experience renting a motorcycle from this
                shop. The bike was new and capable. I had a chance to visit many
                cool places in Andalusia. The stuff in the shop was nice and
                helpful. Many thanks :) */}
                {translations[lang]?.nataliaSuarez ||
                  translations["en"].nataliaSuarez}
              </span>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex-3 flex items-center gap-2 ">
              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer5.webp"
                alt=""
                className="h-12"
              />

              <span className="text-Bold text-sm">Natalia Suarez</span>
            </div>

            <img
              src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
              alt=""
              className=" h-8 w-8"
            />
          </div>
        </div>
        {/* Div 7 */}

        <div class="div5 grid-divs-rectangle flex flex-col justify-between gap-2">
          <div className="">
            <video
              controls
              width="640"
              height="360"
              controlsList="nodownload"
              poster="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewPoster3.webp"
              className="rounded-xl w-full h-auto"
            >
              <source
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/main/Videos/review_3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className=" flex flex-col gap-1 mt-4">
            <div className="stars flex gap-0">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/icons8-star-90.png"
                  alt="star"
                  className="h-4 "
                />
              ))}
            </div>
            <span className="text-Bold">Alejandra Campos</span>
          </div>
        </div>
        {/* div 8 */}

        <div class="div6 grid-divs-rectangle flex flex-col justify-between gap-2">
          <div className="flex">
            <div className="flex-1">
              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                alt=""
                className="h-6"
              />
            </div>
            <div className="flex-4">
              <span className="block text-sm tracking-tight">
                {/* Excellent service, with Antonio being friendly, professional,
                and knowledgeable. The bike and gear were top-notch, exceeding
                my expectations. I'll definitely use the company again. */}

                {translations[lang]?.alejandraCampos || translations["en"].alejandraCampos}
              </span>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex-3 flex items-center gap-2 ">
              <img
                src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer6.webp"
                alt=""
                className="h-12"
              />

              <span className="text-Bold text-sm">Alejandra Campos</span>
            </div>

            <img
              src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
              alt=""
              className=" h-8 w-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
