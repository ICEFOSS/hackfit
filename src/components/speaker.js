import Speaker_card from "./speaker_card";

export default function Speaker() {
    return (

        <>
            <div className=" text-white py-8">
                <h1 className="mx-6 my-1 md:my-2 lg:my-4 font-pixe text-center text-white text-5xl md:text-6xl sm:mx-0">
                    Speakers
                </h1>

                <div className="w-full ">
                    <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-4 py-12">
                        <div className="flex flex-wrap flex-row justify-evenly gap-6 lg:mx-20 xl:mx-32">
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
        </>
    );
}


const speakers = [
    {
        "profile_img": "https://th.bing.com/th/id/OIP.9KLizG3BPrxus1rmPG9jcAHaG1?w=236&h=218&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "name": "",
        "designation": "Coming Soon",
        "describe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "linkedin": "https://www.linkedin.com/in/",
        "github": "https://www.github.com/",
        "twitter": "https://www.twitter.com/"
    }
]
