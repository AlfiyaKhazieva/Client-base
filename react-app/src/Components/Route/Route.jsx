import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Main from '../Main/Main';
import PersonalPage from '../PersonalPage/PersonalPage';
import Reference from '../Reference/Reference';

function ContainerRoute () {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/personal" element={<PersonalPage />}/>
            <Route path="/reference" element={<Reference />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default ContainerRoute;