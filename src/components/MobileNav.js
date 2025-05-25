import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdContactMail, MdWork } from 'react-icons/md';
import { useNavigate } from "react-router";

function MobileNav(props) {

    
    const navigateMobile = useNavigate();
    
    // Helper function to handle navigation with delay
    const handleNavigation = (tab, path) => {
        props.setSelectedTab(tab);
        setTimeout(() => {
            navigateMobile(path);
        }, 200); // 200ms delay to match transition time
    };
    
    return (
<>
        <nav className="mobile-bottom-nav">
            <div className={props.selectedTab === 'home' ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}>
                <div className="mobile-bottom-nav__item-content" onClick={() => handleNavigation('home', '/')}>
                    <i className="icons"><AiFillHome /></i>
                    {props.langFile.navigation.home}
                </div>
            </div>
            <div className={props.selectedTab === 'skills' ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}>
                <div className="mobile-bottom-nav__item-content" onClick={() => handleNavigation('skills', '/skills')}>
                    <i className="icons"><GiSkills /></i>
                    {props.langFile.navigation.skills}
                </div>
            </div>
            <div className={props.selectedTab === 'projects' ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}
                onClick={() => handleNavigation('projects', '/projects')}
            >
                <div className="mobile-bottom-nav__item-content" >
                    <i className="icons"><MdWork /></i>
                    {props.langFile.navigation.projects}
                </div>
            </div>

            <div className={props.selectedTab === 'contact' ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}>
                <div className="mobile-bottom-nav__item-content" onClick={() => handleNavigation('contact', '/contact')}>
                    <i className="icons"><MdContactMail /></i>
                    {props.langFile.navigation.contact}
                </div>
            </div>
           
        </nav>
        <div className="language" onClick={() => {props.setLanguage(!props.language)}}>
                <h2 className="language" >{props.language? "EN" : "FR"}</h2>
        </div>
        </>
    )
}

export default MobileNav