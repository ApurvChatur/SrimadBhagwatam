import React, { useEffect, useRef } from 'react'
import handleInput from '@/love/dFunction/dHandleInput';
import { Link } from 'react-router-dom';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import { Separator } from '@/components/ui/separator';
import { 
  PlusIcon,
  MinusCircledIcon,
} from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';


function getInitials(firstName, lastName) {
  // Extract the first character of the first name and last name
  const firstInitial = firstName?.charAt(0).toUpperCase();
  const lastInitial = lastName?.charAt(0).toUpperCase();
  
  // Return the initials
  return `${firstInitial}${lastInitial}`;
}


const ProfileUpdateComponent = ({ Redux, EventHandler, OnClick }) => {
  // JSX
  return (
    <React.Fragment>
      <section class="bg-[#FCF6F5] dark:bg-[#990011] text-[#990011] dark:text-[#FCF6F5] lg:px-20">
        <div class="container px-5 py-12 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <img alt="content" class="object-cover object-center h-full w-full" src={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url || "https://dummyimage.com/1200x500"} />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
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
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4">{Redux.state.ReceivedObject?.Retrieve?.description}</p>
                <Link to={FinalRouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute} class="inline-flex items-center">Edit This Shit
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-4">

            <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-[#990011] dark:border-[#FCF6F5] flex flex-col relative overflow-hidden">
                <h1 class="text-2xl pb-4 mb-4 border-b border-[#990011] dark:border-[#FCF6F5] leading-none">Critical Information</h1>
                
                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Profile Picture</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type="file" 
                      name="image" 
                      onChange={event => handleInput(event, Redux)}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["image"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">First Name</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='firstName'
                      label='First Name'
                      placeholder='First Name' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.firstName}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["firstName"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Last Name</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='lastName'
                      label='Last Name'
                      placeholder='Last Name' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.lastName}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["lastName"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Email</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='email' 
                      name='email'
                      label='Email'
                      placeholder='Email' 
                      disabled
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.email}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["email"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Mobile</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='mobile'
                      label='Mobile'
                      placeholder='Mobile' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.mobile}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["mobile"]}</label>
                  </div>
                </div>
                
              </div>
            </div>

            <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-[#990011] dark:border-[#FCF6F5] flex flex-col relative overflow-hidden">
                <h1 class="text-2xl pb-4 mb-4 border-b border-[#990011] dark:border-[#FCF6F5] leading-none">Basic Information</h1>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Cover Image</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type="file" 
                      name="coverImage"
                      onChange={event => handleInput(event, Redux)}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["firstName"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Title</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='title'
                      label='Title'
                      placeholder='Title' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.title}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["title"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Subtitle</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='subtitle'
                      label='Subtitle'
                      placeholder='Subtitle' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.subtitle}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["subtitle"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Description</label>
                    <input 
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='description'
                      label='Description'
                      placeholder='Description' 
                      onChange={event => handleInput(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.description}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["description"]}</label>
                  </div>
                </div>

              </div>
            </div>

            <div class="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div class="h-full p-6 rounded-lg border-2 border-[#990011] dark:border-[#FCF6F5] flex flex-col relative overflow-hidden">
                <h1 class="text-2xl pb-4 mb-4 border-b border-[#990011] dark:border-[#FCF6F5] leading-none">More Information</h1>

                <div className="w-full mb-2">
                  <div className="relative">
                    <label className="leading-7 text-sm">Address</label>
                    <input 
                      className="mb-2 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='lane'
                      label='Lane'
                      placeholder='Lane' 
                      onChange={event => EventHandler.Address.Change(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.address?.lane}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["title"]}</label>
                    <input 
                      className="mb-2 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='street'
                      label='Street'
                      placeholder='Street' 
                      onChange={event => EventHandler.Address.Change(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.address?.street}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["title"]}</label>
                    <input 
                      className="mb-2 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='city'
                      label='City'
                      placeholder='City' 
                      onChange={event => EventHandler.Address.Change(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.address?.city}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["title"]}</label>
                    <input 
                      className="mb-2 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='state'
                      label='State'
                      placeholder='State' 
                      onChange={event => EventHandler.Address.Change(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.address?.state}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["title"]}</label>
                    <input 
                      className="mb-2 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='country'
                      label='Country'
                      placeholder='Country' 
                      onChange={event => EventHandler.Address.Change(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.address?.country}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["title"]}</label>
                    <input 
                      className="mb-2 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                      type='text' 
                      name='pinCode'
                      label='Pin Code'
                      placeholder='Pin Code' 
                      onChange={event => EventHandler.Address.Change(event, Redux)}
                      value={Redux.state.FormObject?.FormValue?.address?.pinCode}
                    />
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["title"]}</label>
                  </div>
                </div>

                <div className="w-full mb-2">
                  <div className="relative">
                    <div className='flex items-center justify-between mb-1'>
                      <label className="leading-7 text-sm">Links</label>
                      <Button variant="custom" size="icon" onClick={() => EventHandler.Link.Add(Redux)} >
                        <PlusIcon className="h-4 w-4" /> 
                      </Button>
                    </div>
                    {Redux.state.FormObject.FormValue?.links?.map((each, index) => {
                      return (
                        <React.Fragment key={index}>
                          <input 
                            className="mb-2 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                            type='text' 
                            name='title'
                            label='Title'
                            placeholder='Title' 
                            onChange={event => EventHandler.Link.Change(event, Redux, index)}
                            value={each?.title}
                          />
                          <input 
                            className="mb-2 w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                            type='text' 
                            name='url'
                            label='URL'
                            placeholder='URL' 
                            onChange={event => EventHandler.Link.Change(event, Redux, index)}
                            value={each?.url}
                          />
                          <Button variant="destructive" className="mb-2 w-full" onClick={() => EventHandler.Link.Remove(Redux, index)} >
                            <MinusCircledIcon className="mr-2 h-4 w-4" /> Remove Link
                          </Button>                         
                        </React.Fragment>
                      )
                    })}
                    <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.["subtitle"]}</label>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <Button className="mt-8" onClick={OnClick}>
            Update Profile
          </Button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProfileUpdateComponent