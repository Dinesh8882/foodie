import React from 'react'
import Wrapper from '../shared/Wrapper'
import SectionHeading from '../shared/SectionHeading'
import ProfileCard from '../features/profile/ProfileCard'
import ProfileInformation from '../features/profile/ProfileInformation'
import SavedAddresses from '../features/profile/SavedAddresses'

function Profile() {
  return (
    <Wrapper>
      <SectionHeading title="My Profile" />
      <p className='text-gray-500 mb-4'>Msnage your personal information and account settings.</p>
      <div className='flex gap-4 flex-col sm:flex-row justify-between '>
        <div className='w-full sm:w-[320px]'>
          <ProfileCard />
        </div>
        <div className='w-full flex gap-5 flex-col'>
          <ProfileInformation />
          <SavedAddresses />
        </div>
      </div>
    </Wrapper>
  )
}

export default Profile
