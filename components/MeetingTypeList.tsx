"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  const router = useRouter();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="Nouvelle Réunion"
        description="Commencer une nouvelle réunion"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className='bg-orange-1'
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Calendrier Réunion"
        description="Plannifier votre prochaine réunion"
        handleClick={() => setMeetingState('isScheduleMeeting')}
        className='bg-blue-1'
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="Enregistrement"
        description="Voir vos enregistrement"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className='bg-purple-1'
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Rejoindre"
        description="Rejoindre une réunion"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className='bg-yellow-1'
      />
    </section>
  );
};

export default MeetingTypeList;
