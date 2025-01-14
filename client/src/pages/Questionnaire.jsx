import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Questionnaire = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const questions = [
    { id: 1, question: "What is your name?" },
    { id: 2, question: "What is your email?" },
    { id: 3, question: "What are you looking for?" },
  ];

  //   const nextStep = () => {
  //     if (step < questions.length - 1) {
  //       setStep((prev) => prev + 1);
  //     } else {
  //       setSubmitted(true);
  //     }
  //   };
  //   const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const nextStep = () => {
    if (!answers[step] || answers[step].trim() === "") {
      setError("This field is required.");
      return;
    }
    setError(""); // Clear error if validation passes
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setSubmitted(true); // Mark form as submitted
    }
  };

  const prevStep = () => {
    setError(""); // Clear error on moving back
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleInputChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[step] = e.target.value;
    setAnswers(updatedAnswers);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {submitted ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-bold mb-4">Thank you for submitting!</h2>
          <ul className="text-left space-y-2">
            {questions.map((q, index) => (
              <li key={q.id} className="text-gray-800">
                <strong>{q.question}:</strong> {answers[index] || "No answer"}
              </li>
            ))}
          </ul>
        </motion.div>
      ) : (
        <div className="w-full h-[20rem]  max-w-3xl py-12 px-6 flex items-center bg-white shadow-lg rounded-lg relative">
          {questions.map((q, index) =>
            step === index ? (
              <motion.div
                key={q.id}
                className="absolute w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AnimatePresence mode="wait">
                  <div className="w-11/12 flex flex-col gap-6 ">
                    <h2 className="text-3xl font-semibold text-gray-800">
                      {q.question}
                    </h2>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md focus:outline-none shadow-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Your answer..."
                      value={answers[step] || ""}
                      onChange={handleInputChange}
                      required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex justify-between">
                      {step > 0 && (
                        <button
                          className="px-12 py-2 bg-gray-300 text-lg text-Regular text-gray-800 rounded-md hover:bg-gray-400"
                          onClick={prevStep}
                        >
                          Back
                        </button>
                      )}
                      <button
                        className="px-12 py-2 bg-blue-500 text-lg text-Regular text-white rounded-md hover:bg-blue-600"
                        onClick={nextStep}
                      >
                        {step === questions.length - 1 ? "Submit" : "Next"}
                      </button>
                    </div>
                  </div>
                </AnimatePresence>
              </motion.div>
            ) : null
          )}
        </div>
      )}
      {/* //submitted one is closed here */}
    </div>
  );
};

export default Questionnaire;

// return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <AnimatePresence mode="wait">
//         <div className="w-3/6 h-72  p-6 flex justify-center items-center shadow-lg rounded-lg relative">
//           {questions.map((q, index) =>
//             step === index ? (
//               <motion.div
//                 key={q.id}
//                 className="absolute w-max"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//               >
//                 <div className="flex flex-col  w-full gap-6 ">
//                   <h2 className="text-3xl font-semibold text-gray-800">
//                     {q.question}
//                   </h2>
//                   <input
//                     type="text"
//                     className="w-[45rem] p-3 border rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
//                     placeholder="Your answer..."
//                   />
//                   <div className="flex justify-between">
//                     {step > 0 && (
//                       <button
//                         className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
//                         onClick={prevStep}
//                       >
//                         Back
//                       </button>
//                     )}
//                     <button
//                       className="px-8 py-3 bg-teal-700 text-Medium  text-lg text-white rounded-md hover:bg-blue-600"
//                       onClick={nextStep}
//                     >
//                       {step === questions.length - 1 ? "Submit" : "Next"}
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ) : null
//           )}
//         </div>
//       </AnimatePresence>
//     </div>
//   );
