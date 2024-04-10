import React, { useEffect, useRef } from 'react'
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const ProfileDeleteComponent = ({ Redux, OnClick }) => {
  // JSX
  return (
    <React.Fragment>
      <section class="bg-[#FCF6F5] dark:bg-[#990011] text-[#990011] dark:text-[#FCF6F5] lg:px-20">
        <div class="container px-5 py-12 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url || "https://picsum.photos/seed/picsum/1200/500"} />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-[#990011] dark:bg-[#FCF6F5] text-[#FCF6F5] dark:text-[#990011]">
                  {Redux.state.ReceivedObject?.Retrieve?.image ? 
                    <img alt="content" className="object-cover object-center rounded-full" src={Redux.state.ReceivedObject?.Retrieve?.image?.url} />
                    :
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  }
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-lg">
                    {Redux.state.ReceivedObject?.Retrieve?.firstName} {" "}
                    {Redux.state.ReceivedObject?.Retrieve?.lastName}
                  </h2>
                  <div class="w-12 h-1 bg-[#990011] dark:bg-[#FCF6F5] rounded mt-2 mb-4"></div>
                  <p class="text-base">{Redux.state.ReceivedObject?.Retrieve?.subtitle}</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-[#990011] dark:border-[#FCF6F5] sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">{Redux.state.ReceivedObject?.Retrieve?.description}</p>
                <Button asChild variant="custom" >
                  <Link to={FinalRouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute}>
                    Edit Profile
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>                  
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-[#990011] dark:bg-[#FCF6F5]" />
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="p-4 lg:w-4/6">
              <div class="h-full p-6 rounded-lg border border-[#990011] dark:border-[#FCF6F5] flex flex-col relative overflow-hidden">
                <h1 class="text-md pb-4 mb-4 border-b border-[#990011] dark:border-[#FCF6F5] leading-none">Are you sure! You want to delete your account?</h1>
                <Button className="mt-2" variant="destructive" onClick={OnClick}>
                  Sure, Delete My Account!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProfileDeleteComponent