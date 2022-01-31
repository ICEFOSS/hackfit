import React, { useState } from "react";
import Modal from "react-modal";
import "../styles/Modal.css";

Modal.setAppElement("#root");


const form_link = "https://forms.gle/YonV7YehKwU8Y3Hn9";

const headings = [
    `App for screening the possible mental health issues in adolescents`,
    `Staying Fit With Social Distancing`,
    `App to Report Drug Trafficking Anonymously`
];

const contents = [
    `Adolescence can be a risky period for mental health problems because teenagers are going through many changes and challenges in a short period. Globally, one in seven 10-19-year-olds experiences a mental disorder, accounting for 13% of the global burden of disease in this age group. Depression, anxiety, and behavioral disorders are among the leading causes of illness and disability among adolescents. Good mental health is important for healthy teenage development, strong relationships, and resilience. It can be hard to identify signs of mental health disorders during adolescence, especially as some diagnoses require individuals to be 18 years old, but early intervention can help teens learn healthier coping mechanisms.
    There are a bunch of mobile apps like..KIRAN app, available for adolescents with mental issues which has already initiated a 24*7 Mental health Rehabilitation Helpline (KIRAN) for addressing the mental health issues within the population. It is developed by the Department of Empowerment of Persons with Disabilities (DEPwD) under the Ministry of Social Justice and Empowerment, Govt. Of India because about 20% of young people up to 18 years of age have a diagnosable mental health problem in India. Other apps include calm, My3, MoodPath: Depression and Anxiety, and so on.
       Despite these apps available, the evidence base for their efficiency is unclear. It is now needed that an application be formulated to improve the accessibility of these services specially to adolescents across the country. Not only will this help in self-registration but also in providing services to clients from the comfort of their home even if they are not ready to talk about it. 
    `,
    `In the COVID -19 pandemic situation ,where all of us were forced into our homes and had to quit working out in gyms and public spaces , maintaining workout routines became difficult .And in such a situation, staying fit and eating healthy is important to build mental and physical well being.But people often tend to slack off or found it hard to keep a routine as they simply lacked motivation.Development of a platform where one can not only see his/her progress but also view his/her friends progress can build motivation and can help in staying focused.This way one can maintain a healthy lifestyle with friends while practising social distancing and also motivate others to do the same.

The application allows users to make and edit their own workout routine and based on a dataset (containing a variety of exercises) ,using which it calculates the amount of calories burnt.A diet recall is a dietary assessment tool that is completed as a structured interview during which participants are asked to recall the food and drinks they have consumed over the last 24 hours. To accomplish this, it relies on a trained interviewer to provide the correct dataset and interviewing questions to be set up in the mobile application, an accurate memory of intake, the ability to estimate portion size, and the reliability of the interviews to avoid false reports. Using a mobile application you can track the quality and quantity of food taken (with pictures). An AI-based smart food analyzer app that allows users to track their food intake and also recommends a diet chart based on their vat, pitta, and kapha constitutions.The application should enable users to consult trainers and dietitians for advice or personalized routines.To boost motivation it can also allow users to be part of a community where they can share experiences ,ask doubts and interact . The application can include gamification features that will motivate the user to follow their routines and diet charts(like badges, points, etc.).An individual can compare their total calorie intake and total calories burnt over a period of time (like a day,week or month).

The general idea  is to develop a mobile application or software where it  can perform various functions such as allowing users to set fitness goals, tracking caloric intake, gathering workout ideas,viewing one’s peers’ progress  and sharing progress on social media to facilitate healthy behavior change.The application can be used as a platform to promote healthy behavior change with personalized workouts, fitness advice and nutrition plans.
`,
    `Due to its proximity to two of the "three key production areas" for opium, India is facing the illegal drugs crisis. But cross-border trafficking explains only part of the illicit drugs trade that runs through the country. The Department of Pharmaceuticals, Ministry of Chemicals and Fertilizers, states that India is the world's largest generic drug manufacturer.However, there are reports of illegal chemical precursor trades, as well as clandestine manufacturing and storage of synthetic drugs.

Consider the possibility of a drug peddler in your neighbourhood.You see him supplying drugs to people,including kids in your locality as well as other areas. At present drug trafficking can only be reported via Narcotics squad or local police station.There is no digital means to report it.In spite of your desire to report it, you're afraid of the potential mishaps that may occur if the peddler finds out about the informant.Nonetheless, this is not a viable option since most of the public is not willing to reveal their profiles or spend time with each other.

It is proposed to develop a mobile application that would allow the public to anonymously report drug trafficking.Then, people will be able to report such cases, and the number of drug trafficking cases will eventually be reduced substantially. There is a chance that there may be many false alarms if the system is anonymous, and some of them may be intentional.Therefore by utilizing machine learning models, the solution should be able to filter out the false alarms.Ideally, users should be able to upload any relevant information about the finding and it should be feasible for them to use it across languages.
`];

export default function ProbModal(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // const [IsGoingToRegister, setIsGoingToRegister] = React.useState(false);
    // function toggleIsGoingToRegister() {
    //     if (IsGoingToRegister) {
    //         setIsGoingToRegister(false);
    //         return document.getElementById('About').scrollIntoView();
    //     }
    // }
    // function greenToggle() {
    //     setIsOpen(false);
    //     setIsGoingToRegister(true);
    // }

    return (
        <div className="App text-white mt-8">
            <button onClick={() => setIsOpen(true)}>Read more</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before"
                }}
                className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before"
                }}
                // onAfterClose={toggleIsGoingToRegister}
                closeTimeoutMS={500}
            >
                <div className="flex flex-col w-full mx-4 items-center justify-between h-full  text-white">
                    <div className="mt-4 w-full">
                        <div className="flex flex-row justify-between font-bold">
                            <span>{headings[props.id]}</span>
                            <span className="">
                                <button onClick={() => setIsOpen(false)} className="bg-red-500 border-brochblack border-2 w-4 h-4 rounded-full mb-4"></button>
                            </span>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="flex justify-center items-start h-full my-4 overflow-y-scroll">
                        {contents[props.id]}
                    </div>
                    <div className="mb-4 w-full">
                        <hr></hr>
                        <div className="flex flex-row flex-wrap justify-end">

                            <button onClick={() => setIsOpen(false)} className="border-2 w-fit bg-red-400 px-2 mt-4 border-brochblack text-brochblack font-bold rounded-sm">Close</button>
                            <a href={`${form_link}`} target="_blank">
                                <button onClick={() => setIsOpen(false)} className="border-2 ml-4 w-fit bg-green-600 border-gray-700 text-gray-700 font-bold px-2 mt-4 rounded-sm">Register  </button>
                            </a>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
}
