import React from "react";
import ReviewCard from "../components/ReviewCard";

const reviews = [
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
    name: "Aurora Verdejo",
    image:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer2.png", // Replace with actual profile image URL
    rating: 5,
  },
  {
    title:
      "Review of Triumph Adventure Experience Spain – Triumph Scrambler 400 Rental",
    content: `
	  <p>Review of Triumph Adventure Experience Spain – Triumph Scrambler 400 Rental</p>
    <br />
    <p>I recently rented a Triumph Scrambler 400 from Triumph Adventure Experience Spain, and it was the perfect choice for exploring Spain’s stunning roads! The entire rental process was straightforward and efficient. The team was welcoming and made sure I was set up with everything I needed, including a well-maintained bike and all the necessary gear.</p>
    <br />
    <p>The Scrambler 400 was an absolute pleasure to ride. Its lightweight build and agile handling made it ideal for navigating the winding mountain roads and scenic coastal routes. The bike’s performance was impressive, offering smooth acceleration and a comfortable riding position for longer journeys. I felt confident and connected to the road throughout the ride, and it handled curves and straights with ease.</p>
    <br />
    <p>The staff at Triumph Adventure Experience Spain went above and beyond, sharing valuable tips on local routes and must-see spots. Their passion for motorcycling was evident, and it enhanced my overall experience. Renting the Scrambler 400 allowed me to see Spain in a unique way, with the added thrill of riding a beautifully crafted Triumph bike.</p>
    <br />
    For anyone looking to explore Spain on two wheels, I highly recommend the Scrambler 400 from Triumph Adventure Experience Spain. It’s a fantastic choice for road-focused adventures, backed by a friendly and knowledgeable team dedicated to delivering an unforgettable experience.</p>
	`,
    name: "Martine Campens",
    image:
      "https://raw.githubusercontent.com/uddeshyasonkar/taesfunnelassets/refs/heads/main/images/reviewer3.png", // Replace with actual profile image URL
    rating: 5,
  },
];

const LongReviews = () => {
  return (
    <div className="max-w-[5/6] mx-auto p-12 lg:p-6 flex gap-8 lg:gap-10 flex-col lg:flex-row">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default LongReviews;
