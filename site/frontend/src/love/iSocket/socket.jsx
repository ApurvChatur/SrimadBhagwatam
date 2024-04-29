import { createContext, useMemo, useContext } from "react";
import io from "socket.io-client";


// Base URL
var BASE_URL

switch (import.meta.env.VITE_CORPORATION) {
    case 'BeehiveCorporation':

        switch (import.meta.env.VITE_ORGANISATION) {
            case 'AndromedaOrganisation':
                
                switch (import.meta.env.VITE_ENTERPRISE) {
                    case 'AcruxEnterprise':

                        switch (import.meta.env.VITE_APPLICATION) {
                            case 'ArionApplication':
                                BASE_URL = "https://soup-arion-backend.onrender.com"
                                break;
                            case 'AnkasApplication':
                                BASE_URL = "https://soup-ankas-backend.onrender.com"
                                break;
                            case 'AbolApplication':
                                BASE_URL = "https://soup-abol-backend.onrender.com"
                                break;
                            default:
                                break;
                        }   
                        break;

                    case 'AnserEnterprise':
                        switch (import.meta.env.VITE_APPLICATION) {
                            case 'SwiftTalkApplication':
                                BASE_URL = "https://soup-swift-talk-backend.onrender.com"
                                break;
                            default:
                                break;
                        }   
                        break;

                    default:
                        break;
                }   
                break;

            case 'PinwheelOrganisation':

                switch (import.meta.env.VITE_APPLICATION) {
                    case 'BeehiveApplication':
                        BASE_URL = "https://soup-beehive-backend.onrender.com"
                        break;
                    case 'AndromedaApplication':
                        BASE_URL = "https://soup-andromeda-backend.onrender.com"
                        break;
                    case 'PinwheelApplication':
                        BASE_URL = "https://soup-pinwheel-backend.onrender.com"
                        break;
                    case 'TadpoleApplication':
                        BASE_URL = "https://soup-tadpole-backend.onrender.com"
                        break;
                    case 'AcruxApplication':
                        BASE_URL = "https://soup-acrux-backend.onrender.com"
                        break;
                    case 'AnserApplication':
                        BASE_URL = "https://soup-anser-backend.onrender.com"
                        break;
                    case 'AquilaApplication':
                        BASE_URL = "https://soup-aquila-backend.onrender.com"
                        break;
                    case 'BellatrixApplication':
                        BASE_URL = "https://soup-bellatrix-backend.onrender.com"
                        break;
                    case 'CapellaApplication':
                        BASE_URL = "https://soup-capella-backend.onrender.com"
                        break;
                    default:
                        break;
                }   
                break;

            case 'TadpoleOrganisation':

                switch (import.meta.env.VITE_ENTERPRISE) {
                    case 'AquilaEnteprise':
                        break;

                    case 'BellatrixEnterprise':

                        switch (import.meta.env.VITE_FIRM) {
                            case 'TechfolioFirm':

                                switch (import.meta.env.VITE_APPLICATION) {
                                    case 'TechfolioApplication':
                                        BASE_URL = "https://soup-techfolio-backend.onrender.com"
                                        break;
                                    case 'ApurvChaturApplication':
                                        BASE_URL = "https://soup-apurv-chatur-backend.onrender.com"
                                        break;
                                    case 'AnushreeMandapeApplication':
                                        BASE_URL = "https://soup-anushree-mandape-backend.onrender.com"
                                        break;
                                    case 'SofieBerkinApplication':
                                        BASE_URL = "https://soup-sofie-berkin-backend.onrender.com"
                                        break;
                                    default:
                                        break;
                                }   
                                break;

                            case 'BlogifyFirm':

                                switch (import.meta.env.VITE_APPLICATION) {
                                    case 'BlogifyApplication':
                                        BASE_URL = "https://soup-blogify-backend.onrender.com"
                                        break;
                                    case 'SrimadBhagwatamApplication':
                                        BASE_URL = "https://soup-srimad-bhagwatam-backend.onrender.com"
                                        break;
                                    case 'BhagwadGitaApplication':
                                        BASE_URL = "https://soup-bhagwad-gita-backend.onrender.com"
                                        break;
                                    case 'InterviewQuestionApplication':
                                        BASE_URL = "https://soup-interview-question-backend.onrender.com"
                                        break;
                                    default:
                                        break;
                                }   
                                break;

                            default:
                                break;
                        }   
                        break;

                    case 'CapellaEnteprise':
                        break;
                    default:
                        break;
                }   
                break;
        }  
        break;

    default:
        BASE_URL = "https://some-backend.onrender.com/SomeOtherStuff"
        break;
}

const SocketContext = createContext();
const getSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
  const socket = useMemo(() => {
    return io(import.meta.env.VITE_ENVIRONMENT === "Production" ? BASE_URL : "http://localhost:8000", { withCredentials: true })
  }, []);

  return (
    <SocketContext.Provider value={socket} >
      {children}
    </SocketContext.Provider>
  )
}

export { SocketProvider, getSocket }