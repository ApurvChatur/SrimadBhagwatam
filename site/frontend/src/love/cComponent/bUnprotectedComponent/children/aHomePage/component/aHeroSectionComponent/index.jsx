import React from 'react'
import { Link } from 'react-router-dom';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import brand from '@/love/dFunction/gBrand';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  EnvelopeOpenIcon,
  Link2Icon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  PersonIcon,
  UpdateIcon
} from "@radix-ui/react-icons"


const HeroSectionComponent = ({ Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.image?.url} />
          <div className="text-center lg:w-2/3 w-full">
            <Badge variant="custom" >{Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.tag}</Badge>
            <h1 className="title-font sm:text-4xl text-3xl mb-2 mt-2 font-medium">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.title}
            </h1>
            <h2 className="text-lg font-medium title-font mb-4">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle}
            </h2>
            <p className="leading-relaxed mb-4">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.description} {" "}
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.webLinks?.map((each, index) => (
                <Button asChild variant="custom" key={index} >
                  <Link to={each?.url} target="_blank" rel="noreferrer" >
                    <UpdateIcon className="mr-2 h-4 w-4" /> {each?.title}
                  </Link>
                </Button>
              ))}

              {ReduxUltimate.state.RequiredObject?.Loading ? null :
                ReduxUltimate.state.ReceivedObject?.ProfileRetrieve ? (
                  <Button asChild variant="custom" >
                    <Link to={FinalRouteName.ContentRoute.TopbarRoute.ProfileRoute}>
                      <PersonIcon className="mr-2 h-4 w-4" /> Check Your Profile
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="custom" >
                    <Link to={FinalRouteName.AuthRoute.LoginRoute}>
                      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Sign in with Email
                    </Link>
                  </Button>
                )
              }
            </div>
            <p className="mt-2 mb-2 lg:mt-4 text-center font-medium">
              Follow us on:
            </p>
            <div className="flex justify-center space-x-2 sm:flex sm:space-y-0 sm:space-x-4">
              {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.socialLinks?.map((each, index) => (
                <Button key={index} variant="ghost" size="icon" asChild >
                  <Link to={each?.url} target="_blank" rel="noreferrer" >
                    {
                      each?.title.toLowerCase() === "instagram" ? <InstagramLogoIcon className="h-4 w-4" /> :
                      each?.title.toLowerCase() === "twitter" ? <TwitterLogoIcon className="h-4 w-4" /> :
                      each?.title.toLowerCase() === "threads" ? <Link2Icon className="h-4 w-4" /> :
                      each?.title.toLowerCase() === "linkedin" ? <LinkedInLogoIcon className="h-4 w-4" /> :
                      each?.title.toLowerCase() === "github" ? <GitHubLogoIcon className="h-4 w-4" /> :
                      <Link2Icon className="h-4 w-4" />
                    }
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator/>
    </React.Fragment>
  )
}

export default HeroSectionComponent