import React from "react";

const Reviews = () => {
  return (
    <section className="reviews bg-triumph-beige w-full h-max flex py-12 lg:py-16 lg:justify-center items-center flex-col gap-6 ">
      <div className="w-3/4 text-center">
        <h1 className="text-Heavy text-3xl lg:text-5xl leading-tight lg:leading-tight text-triumph-red">
          Stories That Inspire
        </h1>

        <div className=" flex items-center justify-center gap-2 lg:gap-6 mt-4">
          <div className="stars flex gap-1 lg:gap-2">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="./src/assets/images/web-svg-icons/star.svg"
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

      <div class="  flex flex-col items-center place-items-center  lg:items-start md:grid lg:grid lg:mt-10 parent md:gap-x-4 md:gap-y-4 gap-6 ">
        {/* Div 1 */}

        <div class="div1 grid-divs ">
          <div className="">
            <video
              controls
              width="640"
              height="360"
              controlsList="nodownload"
              poster="./src/assets/images/reviewPoster1.webp"
              className="rounded-xl w-full h-auto"
            >
              <source src="./src/assets/Videos/review_1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className=" flex flex-col gap-1 mt-4">
            <div className="stars flex gap-0">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="./src/assets/images/icons8-star-90.png"
                  alt="star"
                  className="h-4 "
                />
              ))}
            </div>
            <span className="text-Bold">Gary Taylor</span>

            <span className="block text-sm tracking-tight review">
              Triumph Adventure offers an unforgettable motorcycle adventure. I
              can't wait to go back!
            </span>
          </div>
        </div>
        {/* Div 2 */}

        <div className="div2 h-full gap-6  flex flex-col items-center justify-between">
          <div class=" grid-divs flex flex-col justify-between gap-2">
            <div className="flex">
              <div className="flex-1">
                <img
                  src="./src/assets/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex-4">
                <span className="block text-sm tracking-tight">
                  What a crew. What a place. Fantastic service, great bikes at
                  really good prices. Brilliant team, this is why motorcyclists
                  are just the best.
                </span>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex-3 flex items-center gap-2 ">
                <img
                  src="./src/assets/images/reviewer1.png"
                  alt=""
                  className="h-12"
                />

                <span className="text-Bold text-sm">Matt Greene</span>
              </div>

              <img
                src="./src/assets/images/GoogleLogo.png"
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
                  src="./src/assets/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex-4">
                <span className="block text-sm tracking-tight">
                  Perfect Service, extremely nice and helpful staff, motorcycles
                  in very good shape. Highly recommended.
                </span>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex-3 flex items-center gap-2 ">
                <img
                  src="./src/assets/images/reviewer2.png"
                  alt=""
                  className="h-12"
                />

                <span className="text-Bold text-sm">Andy Andrej</span>
              </div>

              <img
                src="./src/assets/images/GoogleLogo.png"
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
                  src="./src/assets/images/quotes.png"
                  alt=""
                  className="h-6"
                />
              </div>
              <div className="flex-4">
                <span className="block text-sm tracking-tight">
                  Excellent service from the team at Triumph Adventure
                  Experience in Malaga. We hired a GT Pro and had a fabulous 2
                  weeks exploring Andalucia. The bike hire, pickup and drop off
                  were seamless.
                </span>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="flex-3 flex items-center gap-2 ">
                <img
                  src="./src/assets/images/reviewer3.png"
                  alt=""
                  className="h-12"
                />

                <span className="text-Bold text-sm">Mark Sherwood</span>
              </div>

              <img
                src="./src/assets/images/GoogleLogo.png"
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
              poster="./src/assets/images/reviewPoster2.webp"
              className="rounded-xl w-full h-auto"
            >
              <source src="./src/assets/Videos/review_2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className=" flex flex-col gap-1 mt-4">
            <div className="stars flex gap-0">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="./src/assets/images/icons8-star-90.png"
                  alt="star"
                  className="h-4 "
                />
              ))}
            </div>
            <span className="text-Bold">Charlotte Prescott</span>

            <span className="block text-Regular text-xs review">
              Great experience, helpful staff.
            </span>
          </div>
        </div>
        {/* Div 6 */}

        <div class="div4 grid-divs-rectangle flex flex-col justify-between gap-2">
          <div className="flex">
            <div className="flex-1">
              <img
                src="./src/assets/images/quotes.png"
                alt=""
                className="h-6"
              />
            </div>
            <div className="flex-4">
              <span className="block text-sm tracking-tight">
                Excellent service from the team at Triumph Adventure Experience
                in Malaga. We hired a GT Pro and had a fabulous 2 weeks
                exploring Andalucia. The bike hire, pickup and drop off were
                seamless.
              </span>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex-3 flex items-center gap-2 ">
              <img
                src="./src/assets/images/reviewer3.png"
                alt=""
                className="h-12"
              />

              <span className="text-Bold text-sm">Mark Sherwood</span>
            </div>

            <img
              src="./src/assets/images/GoogleLogo.png"
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
              poster="./src/assets/images/reviewPoster3.webp"
              className="rounded-xl w-full h-auto"
            >
              <source src="./src/assets/Videos/review_3.mp4" type="video/mp4" />
            </video>
          </div>
          <div className=" flex flex-col gap-1 mt-4">
            <div className="stars flex gap-0">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="./src/assets/images/icons8-star-90.png"
                  alt="star"
                  className="h-4 "
                />
              ))}
            </div>
            <span className="text-Bold">Jack williams</span>
          </div>
        </div>
        {/* div 8 */}

        <div class="div6 grid-divs-rectangle flex flex-col justify-between gap-2">
          <div className="flex">
            <div className="flex-1">
              <img
                src="./src/assets/images/quotes.png"
                alt=""
                className="h-6"
              />
            </div>
            <div className="flex-4">
              <span className="block text-sm tracking-tight">
                Excellent service from the team at Triumph Adventure Experience
                in Malaga. We hired a GT Pro and had a fabulous 2 weeks
                exploring Andalucia. The bike hire, pickup and drop off were
                seamless.
              </span>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex-3 flex items-center gap-2 ">
              <img
                src="./src/assets/images/reviewer3.png"
                alt=""
                className="h-12"
              />

              <span className="text-Bold text-sm">Mark Sherwood</span>
            </div>

            <img
              src="./src/assets/images/GoogleLogo.png"
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
