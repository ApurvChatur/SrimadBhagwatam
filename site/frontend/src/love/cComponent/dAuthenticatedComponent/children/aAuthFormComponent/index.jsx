import React from 'react'
import { Link } from "react-router-dom";
import { 
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';


const AuthFormComponent = ({ Data, Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      <section className="bg-[#FCF6F5] dark:bg-[#990011] text-[#990011] dark:text-[#FCF6F5] lg:px-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">{Data.title}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>

          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            {ReduxUltimate.state.RequiredObject?.Loading ? (
              <div className='flex justify-center'>Loading...</div>
            ) : (
              <div className="flex flex-wrap -m-2">
                {Data.inputs.map((each, index) => {
                  return (
                    <React.Fragment key={index} >
                      <div className="p-2 w-full">
                        <div className="relative">
                          <label className="leading-7 text-sm">{each.label}</label>
                          <input 
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                            type={each.type}
                            name={each.name} 
                            placeholder={each.placeholder} 
                            onChange={each.onChange}  
                          />
                          <label className="leading-7 text-sm text-red-500">{Redux.state.FormObject.FormError?.[each.name]}</label>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                }) }
                
                <div className="p-2 w-full mt-4">
                  {Data.buttons.map((each, index) =>  {
                    return (
                      <React.Fragment key={index}>
                        <Button variant="custom" className="flex mx-auto" onClick={each.onClick} >
                          {each.label} <DoubleArrowRightIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </React.Fragment>
                    )
                  }) }
                </div>

                <div className="p-2 w-full pt-2 mt-4 border-t border-gray-800 text-center">
                  {Data.links.map((each, index) => {
                    return (
                      <React.Fragment key={index}>
                        <p className="leading-normal my-5">
                          {each?.note}{" "}
                          <Link to={each.route} className='underline' >{each.label}</Link>
                        </p>
                      </React.Fragment>
                    )
                  }) }
                </div>
              </div>
            )}
          </div>

        </div>
      </section>   
    </React.Fragment>
  )
}

export default AuthFormComponent