import React from 'react'
import Wrapper from '../shared/Wrapper'
import SectionHeading from '../shared/SectionHeading'
import ProfileCard from '../features/profile/ProfileCard'
import ProfileInformation from '../features/profile/ProfileInformation'

function Profile() {
  return (
    <Wrapper>
      <SectionHeading title="My Profile" />
      <p className='text-gray-500 mb-4'>Msnage your personal information and account settings.</p>
      <div className='flex gap-4 justify-between'>
        <div>
          <ProfileCard />
        </div>
        <div className='w-full'>
          <ProfileInformation />
        </div>
      </div>
    </Wrapper>
  )
}

export default Profile
