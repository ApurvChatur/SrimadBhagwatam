import { Separator } from "@/components/ui/separator";
import React from "react";

function CounterSectionComponent({ Redux }) {
  return (
    <React.Fragment>
      {/* Counter Section */}
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs tracking-widest font-medium title-font mb-1">KNOW OUR SCORE</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font">Our Statistics</h1>
          </div>          
          <div className="flex flex-wrap -m-4 text-center">
            {Redux.state.ReceivedObject?.Retrieve?.CounterList?.map((each, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                    <div className="bg-[#990011] dark:bg-[#FCF6F5] text-[#FCF6F5] dark:text-[#990011] bg-opacity-60 px-4 py-6 rounded-lg">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                      </svg>
                      <h2 className="title-font font-medium text-3xl">{each.subtitle}</h2>
                      <p className="leading-relaxed font-medium mb-2">{each.title}</p>
                      <p className="leading-relaxed text-base">{each.description}</p>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </section>

      <Separator />
    </React.Fragment>
  );
}

export default CounterSectionComponent;
