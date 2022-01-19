import React, { Component } from 'react'
import './mentor.css'
import Present from './mentors.json'
import { linkedin_svg, github_svg } from './speaker_card'

const image = "https://plchldr.co/i/500x250"
export default class Mentor extends Component {

  render() {
    return (
      <div className='bg-brochgreen'>
        <div className="py-4 lg:flex flex-wrap">
          {/*Acm directives contact*/}
          <div className="flex justify-center item-center w-full">
            <h1 className="text-5xl my-5 ">Contact Us</h1>
          </div>
          <div className="grid justify-center m-auto md:grid-cols-3 sm:grid-cols-1  gap-14">
            {Present.map((item) => (

              <div className="py-2"  key={item.key}>
                <div
                  className="flex px-4 mx-4 flex-col text-center justify-between h-full w-full main-test "
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  <div>
                    <p className="mt-8 font-bold name">{item.name}</p>
                    <p className="mt-2">{item.post}</p>
                  </div>
                  <div className="mb-5 font-light" >
                    <div className="flex justify-center  main-test-opposite">
                      <a href={item.linkedin} target="__blank">
                        {linkedin_svg}
                      </a>
                      <a href={item.linkedin} target="__blank">
                        {github_svg}
                      </a>
                      {/*<p className="mx-2"></p>*/}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
