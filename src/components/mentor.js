import React, { Component } from 'react'
import './mentor.css'
import Present from './mentors.json'
import {linkedin_svg} from './speaker_card'

const image="https://plchldr.co/i/500x250"
export default class Mentor extends Component {

    render() {
        return (
            <div className='bg-brochgreen'>
              <div className="py-4 lg:flex flex-wrap">
        {/*Acm directives contact*/}
        <div className="flex justify-center item-center w-full">
          <h1 className="text-2xl my-5">Contact Us</h1>
        </div>
        <div className="justify-center sm:flex-no-wrap md:flex-wrap lg:w-full flex flex-row flex-wrap">
          {Present.map((item) => (
            <pre className="py-2" key={item.key}>
              <div
                className="flex px-4 mx-4 flex-col text-center justify-between h-full w-full main-test"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div>
                  <p className="mt-8 font-bold name">{item.name}</p>
                  <p className="mt-2">{item.post}</p>
                </div>
                <div className="mb-12 font-light">
                  <div className="flex justify-center my-2">
                    <a href={item.linkedin} target="__blank">
                    </a>
                    {/*<p className="mx-2"></p>*/}
                  </div>
                  <p>{item.mobile}</p>
                </div>
                
              </div>
            </pre>
          ))}
        </div>
      </div>
            </div>
        )
    }
}
