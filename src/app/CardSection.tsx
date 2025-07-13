import ProfileCard from '@/components/ProfileCard'
import React from 'react'

export default function CardSection() {
  return (
    <div>
        <ProfileCard
        name="Mario Uparela"
        title="Software Developer"
        handle="AKAMarioU"
        status="Online"
        contactText="Contact Me"
        avatarUrl=""
        showUserInfo={true}
        enableTilt={true}
        onContactClick={() => console.log('Contact clicked')}
        />
    </div>
    
  )
}


