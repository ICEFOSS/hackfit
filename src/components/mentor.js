import React, { Component } from 'react'
import './mentor.css'
import Present from './mentors.json'
import { linkedin_svg, github_svg } from './speaker_card'

export default class Mentor extends Component {

  render() {
    return (
      <section className="ml-0 sm:ml-10">
        <div className='bg-brochgreen py-8'>
          <div className="py-4">
            {/*Acm directives contact*/}
            <h3 className="text-center text-5xl leading-normal  item-center tracking-tight mb-16 flex justify-center">
              Contact Us
            </h3>
            <div className="w-full bg-brochgreen">
              <section className="max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto px-4 py-12">
                <div className="flex flex-row flex-wrap gap-y-6 sm:gap-y-10 md:gap-y-16 justify-evenly">

                  {Present.map((item) => (
                    <Mentor_each_section item={item} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function Mentor_each_section(props) {

  return (
    <>
      <div className="ml-10 py-2 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 self-center" key={props.item.key}>
        <div
          className="px-4 mx-4 text-center justify-between h-full w-full main-test "
          style={{
            backgroundImage: `url(https://plchldr.co/i/500x250)`,
          }}
        >
          <div>
            <p className="mt-8 font-bold name">{props.item.name}</p>
            <p className="mt-2">{props.item.post}</p>
          </div>
          <div className="mb-5 font-light" >
            <div className="flex justify-center  main-test-opposite">
              <a href={props.item.linkedin} target="__blank">
                {linkedin_svg}
              </a>
              <a href={props.item.linkedin} target="__blank">
                {github_svg}
              </a>
              {/*<p className="mx-2"></p>*/}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
