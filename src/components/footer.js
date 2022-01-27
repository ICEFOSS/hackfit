import { Linkedin_svg, Twitter_svg } from "./speaker_card"
export default function Footer() {
    return (
        <div className=" bg-gray-800">
            <footer className="text-center ml-0 md:ml-36 mt-36">
                <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl font-semibold leading-9 tracking-tight text-brochwhite sm:text-4xl sm:leading-10">Contact</h2>

                        <div className="mt-8 flex flex-col md:flex-row flex-grow flex-wrap sm:gap-x-8 justify-evenly">
                            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                                <div className="Venue m-2">
                                    <h3 className="text-brochwhite text-lg font-semibold">Mobile</h3>
                                    <p className="max-w-lg mx-auto text-xs text-gray-500">
                                        Lorem ipsum dolor.
                                    </p>
                                    <p className="max-w-lg mx-auto text-xs text-gray-500">
                                        Lorem ipsum dolor.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                                <div className="Venue m-2">
                                    <h3 className="text-brochwhite text-lg font-semibold">Venue</h3>
                                    <p className="max-w-lg mx-auto text-xs text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit..
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                                <div className="Venue m-2">
                                    <h3 className="text-brochwhite text-lg font-semibold">Email</h3>
                                    <p className="max-w-lg mx-auto text-xs text-gray-500">
                                        Lorem ipsum dolor sit.
                                    </p>
                                    <p className="max-w-lg mx-auto text-xs text-gray-500">
                                        Lorem ipsum dolor sit.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="social-media">
                            <div className="flex justify-center space-x-6">
                                <a href="" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-blue-500">
                                    <Twitter_svg />
                                </a>

                                <a href="" target="_blank" rel="noreferrer" aria-label="Linkedin" className="text-gray-900">
                                    <Linkedin_svg />
                                </a>
                            </div>
                        </div>
                        <p className="text-xs text-center font-medium mx-auto">&copy; 2022 Hackfit</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}