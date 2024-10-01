import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../TreeView.css';
import { HiPlusSm, HiMinusSm, HiPuzzle } from "react-icons/hi";


function TreeView() {
    const [showProfile, setShowProfile] = useState(false);
    const [showDetails,setShowDetails] = useState(false)
      const [showLocation,setShowLocation] = useState(false);
      const [showSettings,setShowSettings] = useState(false);
      const [showSecurity,setShowSecurity] = useState(false);
      const[showRegister,setShowRegister] = useState(false)



    return (
        <div>
            <div className="list_Container">
                <li>Home</li>
                <li>
                    Profile
                    <span > 
                        <button onClick={() => setShowProfile(!showProfile)} style={{ background: 'transparent', border: 'none' }}>
                            {showProfile ? <HiMinusSm color="white" size={30} /> : <HiPlusSm color="white" size={30} />}
                        </button>
                    </span>
                </li>
                {showProfile && (
                    <ul className="ms-4"> 
                        <li>Details
                            <span>
                                <button onClick={()=>{setShowDetails(!showDetails)}}>
                                    {showDetails? <HiMinusSm color="white" size={30}/>:<HiPlusSm color="white" size={30}/>}</button>
                            </span>
                        </li>
                        {showDetails&& ( <li className="ps-4">
                            Location
                            <span className="ms-2">
                                <button onClick={() => {setShowLocation(!showLocation) }} style={{background:'transparent',border:'none'}}>
                                    {showLocation? <HiMinusSm color="white" size={30}/>:<HiPlusSm color="white" size={30}/>}
                                 
                                </button>
                            </span>
                        </li>)}

                        {showLocation && (
                            <li className="ps-5" >
                                City
                            </li>
                        )}
                        
                       
                    </ul>
                    
                )}

                    <li>Settings 
                        <spam>
                            <button onClick={()=>{setShowSettings(!showSettings)}}>
                                {showSettings? <HiMinusSm color="white" size={30}/>:<HiPlusSm color="white" size={30}/>}
                                 </button>
                                 </spam>
                                 </li>

                                 {showSettings && (<ul> <li >Account</li>
                                 <li>Security <spam>
                            <button onClick={()=>{setShowSecurity(!showSecurity)}}>
                                {showSecurity? <HiMinusSm color="white" size={30}/>:<HiPlusSm color="white" size={30}/>}
                                 </button>
                                 </spam> </li>
                                 {showSecurity&& (<ul><li>Login</li>
                                 <li>Register <spam>
                            <button onClick={()=>{setShowRegister(!showRegister)}}>
                                {showRegister? <HiMinusSm color="white" size={30}/>:<HiPlusSm color="white" size={30}/>}
                                 </button>
                                 </spam></li>
                                 {showRegister&&(<li>Random Data</li>)}
                                 </ul>)}
                                 </ul>)}
            </div>
        </div>
    );
}

export default TreeView;
