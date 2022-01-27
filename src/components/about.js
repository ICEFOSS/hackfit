import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return <div>
        <h1 className='text-center text-5xl md:text-6xl leading-normal lg:pl-40 tracking-tight mt-20'>About hackfit</h1>
        <div className='flex  flex-wrap lg:pl-40 p-4 mx-auto mt-6 md:text-xl'>
            <p>HACKFIT is a 36-hour Hackathon conducted as part of ICEFOSS 2022 commencing from the 3rd of March 2022 to the 4th of March 2022.  Participants can enter the competition individually or as a team of not more than 5 members. Contestants can take part in the hackathon in either of 2 ways: 1) under the health theme or 2) under the open theme. In the open theme, the participants can come up with their ideas and problem statements. The Hackathon will have 2 rounds with round 1 being exclusively online. Qualifiers of the first round will be assigned a mentor to progress to the second round. The winning team along with the 2 runners up teams will be offered an opportunity to connect with some of our leading industry partners.  </p>
        </div>
    </div>;
  }
}
