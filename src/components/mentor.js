import React, { Component } from 'react'
import './mentor.css'
import Present from './mentors.json'
import { Linkedin_svg, Github_svg } from './speaker_card'

export default class Mentor extends Component {

  render() {
    return (
      <section className="ml-0 md:ml-36">
        <div className='bg-brochgreen py-8'>
          <div className="py-4">
            {/*Acm directives contact*/}
            <h3 className="text-center text-5xl leading-normal  item-center tracking-tight mb-6 flex justify-center">
              Mentors
            </h3>
            <div className="w-full bg-brochgreen">
              <section className="max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto px-4 py-6 pb-12">
                <div className="flex flex-row flex-wrap gap-y-0 justify-evenly">

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
      <div className="ml-0 py-2 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 self-center" key={props.item.key}>
        <div
          className="sm:pt-2 md:pt-0 mx-4 text-center justify-between aspect-auto main-test "
          style={{
            backgroundImage: `url(https://plchldr.co/i/500x250)`,
          }}
        >
          <div>
            <p className="mt-8 pt-1 sm:pt-6 md:pt-9 lg:pt-10 font-bold name">{props.item.name}</p>
            <p>{props.item.post}</p>
          </div>
          <div className="pt-0 md:pt-9 font-light" >
            <div className="flex justify-center main-test-opposite">
              {/* <a href={props.item.linkedin} target="__blank"> */}
              <Linkedin_svg />
              {/* </a>
              <a href={props.item.linkedin} target="__blank"> */}
              <p className='px-1' />
              <Github_svg />
              {/* </a> */}
              {/*<p className="mx-2"></p>*/}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
