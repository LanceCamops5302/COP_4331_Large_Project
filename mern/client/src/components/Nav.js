import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SvgIcon from '@mui/material/SvgIcon';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import { GiSkateboard } from 'react-icons/gi';

export default function Nav(){
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <GiSkateboard fontSize="50px" color="white" />
                <div className="d-flex">
                    <a className="nav-link text-light col-4" href="/content">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link text-light col-4" href="/clips">Explore <span className="sr-only">(current)</span></a>
                    <a className="nav-link text-light col-4" href="/login">Logout <span className="sr-only">(current)</span></a>

                </div>
            </nav>
        </div>
    )
}
