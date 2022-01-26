import Speaker_card from "./speaker_card";

export default function Speaker() {
    return (

        <section className="ml-0 md:ml-36 mt-28">
            <div className="bg-brochgreen text-white py-8">
                <h1 className="mx-6 my-1 md:my-2 lg:my-4 font-pixe text-center text-white text-5xl md:text-6xl sm:text-center sm:mx-0">
                    Speakers
                </h1>

                <div className="w-full bg-brochgreen">
                    <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="flex flex-wrap flex-row justify-around gap-6 lg:mx-20 xl:mx-32">
                            {
                                speakers.map((speaker, ind) => (
                                    <Speaker_card
                                        key={speaker.name + ind}
                                        profile_img={speaker.profile_img}
                                        name={speaker.name}
                                        designation={speaker.designation}
                                        describe={speaker.describe}
                                        date={speaker.date}
                                        time={speaker.time}
                                        session_link={speaker.session_link}
                                    />
                                ))
                            }

                        </div>
                    </section >
                </div >

            </div>
        </section>
    );
}


const speakers = [
    {
        "profile_img": "https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "name": "Saurabh",
        "designation": "CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "date": "12 Jan",
        "time": "10:00 AM",
        "session_link": "https://www.youtube.com"
    },
    {
        "profile_img": "https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "name": "Saurabh",
        "designation": "CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "profile_img": "https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "name": "Saurabh",
        "designation": "CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "profile_img": "https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "name": "Saurabh",
        "designation": "CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]
