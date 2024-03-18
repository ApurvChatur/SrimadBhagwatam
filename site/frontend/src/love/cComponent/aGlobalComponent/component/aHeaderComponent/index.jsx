import { Separator } from '@/components/ui/separator';
import brand from '@/love/dFunction/gBrand';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';
import { LogIn, Signpost } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import DesktopNav from './components/aDesktopNav';
import Setting from './components/cSetting';
import MobileNav from './components/bMobileNav';


function getInitials(firstName, lastName) {
  // Extract the first character of the first name and last name
  const firstInitial = firstName?.charAt(0).toUpperCase();
  const lastInitial = lastName?.charAt(0).toUpperCase();
  
  // Return the initials
  return `${firstInitial}${lastInitial}`;
}

function HeaderComponent({ Redux, LogoutAPICall }) {
  return (
    Redux.state.RequiredObject?.Loading ? null :
    <React.Fragment>
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-[#FCF6F5]/60 dark:supports-[backdrop-filter]:bg-[#990011]/60 text-[#990011] dark:text-[#FCF6F5]">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <DesktopNav />
          <MobileNav ReduxUltimate={Redux} />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* <CommandMenu /> */}
            </div>
            <nav className="flex items-center space-x-2">
              {Redux.state.RequiredObject?.Loading ? null :
                Redux.state.ReceivedObject?.ProfileRetrieve ? (
                  <div className="flex items-center space-x-2 mr-2">
                    <Avatar>
                      <AvatarImage src={Redux.state.ReceivedObject?.ProfileRetrieve?.eImage?.url} />
                      <AvatarFallback>{getInitials(
                        Redux.state.ReceivedObject?.ProfileRetrieve?.eFirstName, 
                        Redux.state.ReceivedObject?.ProfileRetrieve?.eLastName
                      )}</AvatarFallback>
                    </Avatar>
                    <div className='hidden sm:block' >
                      <p className="text-sm font-medium leading-none">{`${Redux.state.ReceivedObject?.ProfileRetrieve?.eFirstName} ${Redux.state.ReceivedObject?.ProfileRetrieve?.eLastName}`}</p>
                      <p className="text-sm text-muted-foreground">{Redux.state.ReceivedObject?.ProfileRetrieve?.cRole?.aTitle}</p>
                    </div>
                  </div>
                ) : (
                  <React.Fragment>
                    <Button variant="customNull" asChild className="hidden md:flex">
                      <Link to="/login" >
                        <LogIn className="mr-2 h-4 w-4" /> Sign In
                      </Link>
                    </Button>

                    <Button variant="customNull" asChild className="hidden md:flex">
                      <Link to="/register" >
                        <Signpost className="mr-2 h-4 w-4" /> Sign Up
                      </Link>
                    </Button>
                  </React.Fragment>
                )
              }
              
              <ModeToggle />
              <Setting Redux={Redux} LogoutAPICall={LogoutAPICall} />
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default HeaderComponent;
