import React from "react";
import Footer from "../Sections/Footer";
import Stars from "../components/Stars";
import ImgReview from "../components/ImgReview";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../api/FacebookPixel";

const ReviewPage = () => {
  const navigate = useNavigate();

  function navigateFn() {
    trackEvent("AdventureInAClickReview_Click", {
      labek: "Adventure in a Click!",
      page: "ReviewPage",
    });

    setTimeout(() => {
      window.scrollTo(0, 0);
      navigate("/select-package");
    }, 1000);
  }
  return (
    <div className="reviewPage  w-full min-h-screen  pt-12 lg:pt-12 ">
      <section className="reviews bg-triumph-beige w-full h-max flex py-12 lg:py-16 lg:justify-center items-center flex-col gap-6 ">
        <div className="w-3/4 text-center">
          <h1 className="text-Heavy text-2xl lg:text-5xl leading-tight lg:leading-tight text-triumph-red">
            Real people, real results
            <br /> What our riders say
          </h1>

          <div className=" flex items-center justify-center gap-2 lg:gap-6 mt-4">
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
            <p className="text-medium text-lg lg:text-3xl">
              Based on 342 reviews
            </p>
          </div>
        </div>

        <div class="lg:mt-10 h-max flex flex-col justify-center items-center reviewParent md:grid lg:grid md:items-start lg:items-start md:gap-x-4 md:gap-y-4 gap-4 md:gap-6 ">
          <div className="flex flex-col md:flex-col justify-center items-center gap-4  md:gap-4 ">
            {/* Div 1  lee S Fielding*/}

            <div class=" grid-divs ">
              <div className="">
                <video
                  controls
                  width="640"
                  height="360"
                  controlsList="nodownload"
                  loading="lazy"
                  poster="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/Videos/Lee.png"
                  className="rounded-xl w-full h-auto"
                >
                  {/* <source src="./src/assets/Videos/review_1.mp4" type="video/mp4" /> */}
                  <source
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/main/Videos/Lee.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className=" flex flex-col gap-1 mt-4">
                {/* star goes here */}
                <Stars />

                <span className="text-Bold">Lee S Fielding</span>

                <span className="block text-xs tracking-tight review">
                  Now is the time to live this adventure—riding with Triumph ADV
                  Spain is pure joy!
                </span>
              </div>
            </div>

            {/* Div 2  Alex Zolotov*/}
            <div class="grid-divs flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                    alt=""
                    className="h-6"
                  />
                </div>
                <div className="flex-4">
                  <span className="block text-xs tracking-tight">
                    I had a wonderful experience renting a motorcycle from this
                    shop. The bike was new and capable. I had a chance to visit
                    many cool places in Andalusia. The stuff in the shop was
                    nice and helpful. Many thanks :)
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="flex-3 flex items-center gap-2 ">
                  <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer5.webp"
                    alt=""
                    className="h-10 w-10"
                  />

                  <span className="text-Bold text-sm">Alex Zolotov</span>
                </div>

                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                  alt=""
                  className=" h-8 w-8"
                />
              </div>
            </div>

            {/* Div 3  MC-Jalle */}
            <div class="grid-divs flex flex-col justify-between gap-6">
              <div className="flex">
                <span className="block text-xs tracking-tight">
                  Here you are given the opportunity to develop as a driver with
                  the help of skilled instructors. <br />
                  <br />
                  Their service is top notch, and they offer new motorcycles
                  twice a year. <br />
                  <br />
                  The staff is super nice and their facility is new and fresh.{" "}
                  <br />
                  <br />I give them five stars!
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className=" flex flex-col  gap-2 ">
                  <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/avatar.png"
                    alt=""
                    className="h-10 w-10"
                  />

                  <Stars />

                  <span className="text-Bold text-sm">MC-Jalle</span>
                </div>

                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                  alt=""
                  className=" h-8 w-8"
                />
              </div>
            </div>

            {/* Div 4 */}

            <ImgReview Source="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewCards/ReviewImg_3.webp" />

            {/* Div 5 Andy Andrej */}
            <div class=" grid-divs flex flex-col justify-between gap-2">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                    alt=""
                    className="h-6"
                  />
                </div>
                <div className="flex-4">
                  <span className="block text-xs tracking-tight">
                    Perfect Service, extremely nice and helpful staff,
                    motorcycles in very good shape. Highly recommended.
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

                  <span className="text-Bold text-sm">Andy Andrej</span>
                </div>

                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                  alt=""
                  className=" h-8 w-8"
                />
              </div>
            </div>

            {/* Div 6 */}

            <ImgReview Source="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewCards/ReviewImg_1.webp" />
          </div>

          <div className="flex flex-col md:flex-col justify-center items-center gap-4  md:gap-4 ">
            {/* Div 1 Andy Williams*/}
            <div class="grid-divs flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                    alt=""
                    className="h-6"
                  />
                </div>
                <div className="flex-4 ">
                  <span className="block text-xs tracking-tight">
                    Very professional rental experience - 3 days on a 400X
                    Scrambler in the mountains around Malaga.Thoroughly
                    recommend these guys, the communication is first class with
                    very helpful and knowledgable staff.
                  </span>

                  <div className="flex items-center ">
                    <div className="flex-3 flex items-center gap-2 ">
                      <span className="text-Bold text-sm">Andy williams</span>
                    </div>

                    <img
                      src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                      alt=""
                      className=" h-8 w-8"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Div 2 */}
            <ImgReview Source="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewCards/ReviewImg_5.webp" />

            {/* Div 3  Manolo Barnés*/}
            <div class="div5 grid-divs-rectangle flex flex-col justify-between gap-2">
              <div className="">
                <video
                  controls
                  width="640"
                  height="360"
                  controlsList="nodownload"
                  poster="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/Videos/Manolo.png"
                  className="rounded-xl w-full h-auto"
                >
                  <source
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/main/Videos/ManoloBarnés.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className=" flex flex-col gap-1 mt-4">
                <Stars />
                <span className="text-Bold">Manolo Barnés</span>
              </div>
            </div>

            {/* Div 4  Michael lockey*/}

            <div class="grid-divs flex flex-col justify-between gap-4">
              <div className="flex-1">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex">
                <span className="block text-xs tracking-tight">
                  As someone new to motorcycle rentals, I wasn’t quite sure what
                  to expect, but Triumph Adventure Experience Spain made the
                  entire process seamless and enjoyable! From the start, the
                  team was incredibly professional and welcoming. They took the
                  time to understand my experience level and the type of
                  adventure I was looking for, guiding me to the perfect bike.
                  <br />
                  <br />
                  The rental options were impressive, with a wide range of
                  well-maintained Triumph models to choose from. The bike I
                  rented was in fantastic condition, and it performed
                  beautifully on both winding roads and rugged trails. I felt
                  confident and secure knowing the motorcycle had been
                  thoroughly checked and prepped for my journey.
                  <br />
                  <br />
                  What I appreciated most was the attention to detail. The team
                  provided all the necessary gear, along with practical tips on
                  riding in Spain and recommendations for scenic routes. They
                  even went over some basics of off-road riding, which was
                  incredibly helpful as I ventured into new territory.
                  <br />
                  <br />
                  Thanks to Triumph Adventure Experience Spain, I had an
                  unforgettable adventure exploring Spain’s landscapes. I’d
                  highly recommend their rental service to anyone, whether
                  you’re a seasoned rider or someone new to renting motorcycles
                  for a big adventure. Their passion for riding and commitment
                  to customer satisfaction make them a standout choice!
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className=" flex flex-col  gap-2 ">
                  {/* <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/avatar.png"
                    alt=""
                    className="h-10 w-10"
                  /> */}

                  <Stars />

                  <span className="text-Bold text-sm">Michael lockey</span>
                </div>

                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                  alt=""
                  className=" h-8 w-8"
                />
              </div>
            </div>

            {/* Div 5 */}

            <ImgReview Source="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewCards/ReviewImg_2.webp" />

            {/* Div 6 Barth Thomas */}

            <div class="grid-divs flex flex-col justify-between gap-4">
              <div className="flex-1">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex">
                <span className="block text-xs tracking-tight">
                  Excellent service, super friendly staff, and bikes in perfect
                  condition. Highly recommended!
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className=" flex flex-col  gap-2 ">
                  {/* <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/avatar.png"
                    alt=""
                    className="h-10 w-10"
                  /> */}

                  {/* <Stars /> */}

                  <span className="text-Bold text-sm">Barth Thomas</span>
                </div>

                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                  alt=""
                  className=" h-8 w-8"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-col justify-center items-center gap-4  md:gap-4  ">
            {/* Div 1 Besat Ulrich Locher */}
            <div class=" grid-divs ">
              <div className="">
                <video
                  controls
                  width="640"
                  height="360"
                  controlsList="nodownload"
                  loading="lazy"
                  poster="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/Videos/Review_Don.png"
                  className="rounded-xl w-full h-auto"
                >
                  {/* <source src="./src/assets/Videos/review_1.mp4" type="video/mp4" /> */}
                  <source
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/main/Videos/Review don limpio 7-Day.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className=" flex flex-col gap-1 mt-4">
                {/* star goes here */}
                <Stars />

                <span className="text-Bold">Besat Ulrich Locher</span>

                <span className="block text-xs tracking-tight review">
                  Thanks to the Triumph team, especially Marta and Antonio, for
                  the great service. The bike was amazing!
                </span>
              </div>
            </div>

            {/* Div 2 Zdravko Zdravko */}
            <div class="grid-divs flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                    alt=""
                    className="h-6"
                  />
                </div>
                <div className="flex-4">
                  <span className="block text-xs tracking-tight">
                    Excellent service, with Antonio being friendly,
                    professional, and knowledgeable. The bike and gear were
                    top-notch, exceeding my expectations. I'll definitely use
                    the company again.
                  </span>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="flex-3 flex items-center gap-2 ">
                  <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer6.webp"
                    alt=""
                    className="h-10 w-10"
                  />

                  <span className="text-Bold text-sm">Zdravko Zdravkov</span>
                </div>

                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                  alt=""
                  className=" h-8 w-8"
                />
              </div>
            </div>

            {/* Div 3 Martine Campens */}
            <div class="grid-divs flex flex-col justify-between gap-4">
              <div className="flex-1">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex">
                <span className="block text-xs tracking-tight">
                  Renting a motorcycle from Triumph Adventure Experience Spain
                  was one of the highlights of my trip! The whole process was
                  straightforward and well-organized, making it easy to get on
                  the road without any hassle. The staff were incredibly
                  helpful, ensuring that I had the right bike and gear for my
                  adventure.
                  <br />
                  <br />
                  The selection of Triumph motorcycles was fantastic, with each
                  bike in top-notch condition and ready for action. The one I
                  chose handled beautifully across different terrains, whether
                  cruising on smooth roads or tackling more rugged trails. It
                  was clear that these bikes are maintained with great care.
                  <br />
                  <br />
                  Beyond just renting a bike, the team provided excellent
                  recommendations for scenic routes and must-see spots. Their
                  local knowledge made a huge difference, helping me discover
                  incredible places I wouldn’t have found on my own. If you’re
                  considering exploring Spain on two wheels, this is the place
                  to go. Professional service, great bikes, and an experience
                  you won’t forget!
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className=" flex flex-col  gap-2 ">
                  {/* <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/avatar.png"
                    alt=""
                    className="h-10 w-10"
                  /> */}

                  <Stars />

                  <span className="text-Bold text-sm">Martine Campens</span>
                </div>

                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                  alt=""
                  className=" h-8 w-8"
                />
              </div>
            </div>

            {/* Div 4 */}
            <ImgReview Source="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewCards/ReviewImg_4.webp" />

            {/* Div 5 Rob Ior */}
            <div class="grid-divs flex flex-col justify-between gap-4">
              <div className="flex-1">
                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex">
                <span className="block text-xs tracking-tight">
                  I can’t thank the Triumph team enough for their incredible
                  service and attention to every detail. From start to finish,
                  everything was perfectly organized, and Marta and Antonio
                  stood out for their friendliness and professionalism. <br />
                  <br /> They made sure I had everything I needed to enjoy the
                  ride to the fullest. The bike was in pristine condition,
                  handled beautifully, and made every moment of the journey an
                  unforgettable experience. <br />
                  <br /> I would absolutely recommend Triumph ADV Spain to
                  anyone looking for an amazing adventure on two wheels!
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className=" flex flex-col  gap-2 ">
                  {/* <img
                    src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/avatar.png"
                    alt=""
                    className="h-10 w-10"
                  /> */}

                  <Stars />

                  <span className="text-Bold text-sm">Rob lor</span>
                </div>

                <img
                  src="https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/GoogleLogo.png"
                  alt=""
                  className=" h-8 w-8"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 md:gap-7 text-center  my-10 lg:my-20">
          <h2 className="text-Heavy text-2xl md:text-4xl ">
            Book your adventure today! <br /> Limited spots available.
          </h2>
          <p className="text-Medium text-base px-12 md:px-0 md:text-2xl">
            Apply to participate now and claim your Limited-Time discount!
          </p>

          <button
            className="btn w-max px-10 py-4 rounded-xl tracking-wider bg-triumph-red text-white hover:bg-triumph-red-hover hover:scale-105 text-xl text-bold transition-all ease-in-out duration-300 shadow-3xl uppercase"
            onClick={navigateFn}
          >
            Adventure in a click
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ReviewPage;
