import { Linkedin_svg, Twitter_svg, Instagram_svg, Facebook_svg } from "./speaker_card"
export default function Footer() {
    return (
        <div className=" bg-gray-800">
            <footer className="text-center ml-0 md:ml-36">
                <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {/* <h2 className="text-3xl font-semibold leading-9 tracking-tight text-brochwhite sm:text-4xl sm:leading-10">Contact</h2> */}

                        <div className="mt-8 flex flex-col md:flex-row flex-grow flex-wrap sm:gap-x-8 justify-evenly">
                            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                                <div className="Venue m-2">
                                    <h3 className="text-brochwhite text-lg font-semibold">Mobile</h3>
                                    <p className="max-w-xs mx-auto text-md text-gray-200">
                                        +91 97453 44089
                                    </p>
                                    <p className="max-w-xs mx-auto text-md text-gray-200">
                                        +91 82818 95254
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                                <div className="Venue m-2">
                                    <h3 className="text-brochwhite text-lg font-semibold">Venue</h3>
                                    <p className="max-w-xs mx-auto text-md text-gray-200">
                                        Federal Institute of Science And Technology - Hormis Nagar, Mookkannoor, Angamaly, Kerala 683577
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                                <div className="Venue m-2">
                                    <h3 className="text-brochwhite text-lg font-semibold">Email</h3>
                                    <p className="max-w-lg mx-auto text-md text-gray-200">
                                        icefoss<span className=" font-serif">@</span>fisat.ac.in
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="social-media">
                            <div className="flex justify-center space-x-6">
                                <a href="" target="blank" rel="noreferrer" aria-label="Twitter" className="text-blue-500">
                                    <Twitter_svg />
                                </a>

                                <a href="" target="blank" rel="noreferrer" aria-label="Linkedin" className="text-gray-900">
                                    <Linkedin_svg />
                                </a>
                                <a href="https://www.instagram.com/icefossfisat/" target="blank" rel="noreferrer" aria-label="Instagram" className="text-pink-500 md:mt-0 mt-2">
                                    <Instagram_svg />
                                </a>
                                <a href="https://www.facebook.com/icefossfisat/" target="blank" rel="noreferrer" aria-label="Facebook" className="text-blue-500 sm:mt-0 mt-2">
                                    <Facebook_svg />
                                </a>
                            </div>
                        </div>
                        <p className="text-xs text-center font-medium mx-auto"><span className=" font-serif">&copy;</span> 2022 Hackfit</p>
                        <div className="text-xs text-center font-medium mx-auto w-full font-mono"> Created & designed by <a href="https://www.linkedin.com/in/amarjith-raj-b2822a196">  Amarjith Raj</a>, <a href="https://www.linkedin.com/in/amankshihab/"> Aman K Shihab</a>,
                            <a href="https://www.linkedin.com/in/joel-nickson-0a27721a5/"> Joel Nickson</a>,
                            <a href="https://www.linkedin.com/in/naveen-b-jacob-229a81182/"> Naveen B Jacob </a> and
                            <a href="https://www.linkedin.com/in/paul-elias-sojan/"> Paul Elias Sojan</a> </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}