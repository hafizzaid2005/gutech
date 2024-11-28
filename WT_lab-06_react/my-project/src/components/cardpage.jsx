import React from 'react'
import Card from './cards'
const cardpage = () => {
  return (
    <div className="page-2 flex justify-around items-center h-screen w-full bg-[#f2f2f2] border-t-2">
      <Card
        title="TEACHER"
        desc="Are you a tech professional?"
        cto="Join Skill as an instructor and share your expertise while earning through a rewarding side hustle."
        btn="Sign up"
        btn2="Log in"
      />
      <Card
        title="STUDENT"
        desc="Are you a Computer Science student?"
        cto="Join Skill to learn directly from professionals and build valuable connections."
        btn="Sign up"
        btn2="Log in"
      />
      <Card
        title="EVENTS"
        desc="Networking Opportunity?"
        cto="Sign up to join our workshops, conferences, and bootcamps."
        btn="Sign up"
        btn2="Log in"
      />
    </div>
  );
}

export default cardpage
