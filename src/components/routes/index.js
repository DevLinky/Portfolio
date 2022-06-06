import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';

const Index = (props) => {
    return( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Section1 language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab}/>} />
                <Route path='/skills' element={<Section2 language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab}/>} />
                <Route path='/projects' element={<Section3 language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab}/>} />
                <Route path='/contact' element={<Section4 language={props.language} setLanguage={props.setLanguage} langFile={props.langFile} selectedTab={props.selectedTab} setSelectedTab={props.setSelectedTab}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;