import React from 'react'
import {AiFillHome} from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdContactMail, MdWork } from 'react-icons/md';
import { useNavigate } from "react-router";
import { useState } from 'react';

function MobileNav(props) {

    
    const navigateMobile = useNavigate();
    return (
<>
        <nav className="mobile-bottom-nav">
            <div className={props.selectedTab === 'home' ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}>
                <div className="mobile-bottom-nav__item-content" onClick={() => {
                    props.setSelectedTab('home');
                    navigateMobile('/');
                    
                    
                    }}>
                    <i className="icons"><AiFillHome /></i>
                    {props.langFile.navigation.home}
                </div>
            </div>
            <div className={props.selectedTab === 'skills' ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}>
                <div className="mobile-bottom-nav__item-content" onClick={() => {
                    props.setSelectedTab('skills');
                    navigateMobile('/skills');
                   
                    }}>
                    <i className="icons"><GiSkills /></i>
                    {props.langFile.navigation.skills}
                </div>
            </div>
            <div className={props.selectedTab === 'projects' ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}
                onClick={() => {
                    props.setSelectedTab('projects');
                    navigateMobile('/projects');
                    
                    }}
            >
                <div className="mobile-bottom-nav__item-content" >
                    <i className="icons"><MdWork /></i>
                    {props.langFile.navigation.projects}
                </div>
            </div>

            <div className={props.selectedTab === 'contact' ? "mobile-bottom-nav__item mobile-bottom-nav__item--active" : "mobile-bottom-nav__item"}>
                <div className="mobile-bottom-nav__item-content" onClick={() => {
                    navigateMobile('/contact');
                    props.setSelectedTab('contact');
                    }}>
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