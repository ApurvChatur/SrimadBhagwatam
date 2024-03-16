import React from 'react'
import { Link } from 'react-router-dom';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import brand from '@/love/dFunction/gBrand';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EnvelopeOpenIcon, LockOpen2Icon, InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"


const HeroSectionComponent = ({ Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.image?.url} />
          <div className="text-center lg:w-2/3 w-full">
            <Badge>{Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.tag}</Badge>
            <h1 className="title-font sm:text-4xl text-3xl mb-2 mt-2 font-medium text-white">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.title}
            </h1>
            <h2 className="text-lg text-white font-medium title-font mb-4">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle}
            </h2>
            <p className="leading-relaxed mb-4">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.description} {" "}
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild>
                <Link to="/login">
                  <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
                </Link>
              </Button>
              <Button asChild>
                <Link to="/login">
                  <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
                </Link>
              </Button>
            </div>
            <p className="mt-2 mb-2 lg:mt-4 text-center font-medium">
              Follow us on:
            </p>
            <div className="flex justify-center space-x-2 sm:flex sm:space-y-0 sm:space-x-4">
              <Button variant="ghost" size="icon" asChild >
                <Link 
                  to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild >
                <Link 
                  to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild >
                <Link 
                  to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild >
                <Link 
                  to="https://github.com/shadcn-ui/ui/blob/main/apps/www/components/site-header.tsx"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubLogoIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator/>
    </React.Fragment>
  )
}

export default HeroSectionComponent