import Speaker_card from "./speaker_card";

const speakers = [
    {
        "profile_img": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "name": "Saurabh",
        "designation": "CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "date": "12 Jan",
        "time": "10:00 AM",
        "session_link": "https://www.youtube.com"
    },
    {
        "profile_img": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "name": "Saurabh",
        "designation": "CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "profile_img": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "name": "Saurabh",
        "designation": "CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "profile_img": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "name": "Saurabh",
        "designation": "CEO",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]

export default function Speaker() {
    return (

        <section className="ml-16 p-3 sm:ml-16 sm:p-0 md:ml-36">
            <div className="bg-brochgreen text-white py-8">
                <h1 className="mx-6 mt-1 font-pixe text-center text-white text-5xl md:text-6xl sm:text-center sm:mx-0">
                    Speakers
                </h1>

                <div className="w-full bg-brochgreen">
                    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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