import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SvgIcon from '@mui/material/SvgIcon';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import { GiSkateboard } from 'react-icons/gi';

export default function Nav(){
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="d-flex align-items-center">
                    <GiSkateboard fontSize="50px" color="white" />
                    <a className="nav-link text-light" href="/" style={{fontSize: "22px"}}>Skate Park Flexin'<span className="sr-only">(current)</span></a>
                </div>
                <div className="d-flex">
                    <a className="nav-link text-light col-4" href="/">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link text-light col-4" href="/allClips">Explore <span className="sr-only">(current)</span></a>
                    <a className="nav-link text-light col-4" href="/login">Logout <span className="sr-only">(current)</span></a>

                </div>
            </nav>
        </div>
    )
}
