import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';

const Index = () => {
    return( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Section1 />} />
                <Route path='/skills' element={<Section2 />} />
                <Route path='/projects' element={<Section3 />} />
                <Route path='/contact' element={<Section4 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;