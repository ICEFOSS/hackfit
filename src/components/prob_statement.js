import React from "react";
import { stayfit_with_social_distancing, mental_health_issues, report_drug_trafficking } from './constants'
import ProbModal from "./prob_modal";

export default function ProbState() {
    return (

        <section className="ml-0 md:ml-36"
            id="Supporters">
            <div className=" mx-auto px-5 lg:px-20">
                <h1 className="mx-6 font-pixe text-center text-brochwhite text-5xl md:text-6xl sm:text-center sm:mx-0">
                    Problem Statement
                </h1>
                <div className="mt-16 justify-center text-gray-200 flex flex-wrap flex-row md:flex-row-mx-1 gap-5">

                    <Supporters_each_section
                        id='0'
                        title="mental health issues in adolescents"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere adipisci quos, sit fugiat officia autem. "
                        link="#"
                        svg={mental_health_issues}
                    />

                    <Supporters_each_section
                        id='1'
                        title="stay fit with social distancing"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere adipisci quos, sit fugiat officia autem."
                        link="#"
                        svg={stayfit_with_social_distancing}
                        top='true'
                    />
                    <Supporters_each_section
                        id='2'
                        title="report drug trafficking anonymously"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere adipisci quos, sit fugiat officia autem."
                        link="#"
                        svg={report_drug_trafficking}
                    />

                </div>
            </div>
        </section>
    );
}

function Supporters_each_section(props) {

    return (
        <>
            <div className="my-1 px-1 md:p-2 w-80 sm:w-80">
                <a className="relative block group h-[455px] active:h-h-[455px] hover:h-h-[455px] sm:h-[28rem] sm:hover:h-[28rem]">

                    <div className="relative flex items-end h-full transition-transform transform bg-black bg-opacity-10 border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2  rounded-3xl">

                        <div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">

                            {(props.top == 'true') ? (
                                <h2 className="mb-10 text-xl">
                                    {props.title}
                                </h2>
                            ) : null}
                            <div className="mb-8">
                                {props.svg}
                            </div>

                            {(props.top != 'true') ? (
                                <h2 className="mt-4 text-xl">
                                    {props.title}
                                </h2>
                            ) : null}
                        </div>

                        <div className="absolute p-8 my-auto transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
                            <h2 className="w-74 mt-4 text-2xl md:text-3xl font-medium">
                                {props.title}
                            </h2>

                            <p className="mt-4 lg:text-md">
                                {props.description}
                            </p>

                            <ProbModal id={`${props.id}`} />
                            {/* <Modal openButtonText="hi" children={undefined} /> */}
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}