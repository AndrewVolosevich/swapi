import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PeoplesPage from "../../pages/PeoplesPage/PeoplesPage";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppSelector";
import {
    fetchPeoplesDataOperation, searchPeoplesDataOperation
} from "../../store/peoples/fetchPeoplesDataOperation";

const AppController = () => {
    const dispatch: any = useDispatch();
    const {pageNumber, search} = useAppSelector(state => state.peoples)

    useEffect(() => {
        if (search.length) {
            dispatch(searchPeoplesDataOperation(pageNumber, search))
        } else {
            dispatch(fetchPeoplesDataOperation(pageNumber))
        }
    }, [pageNumber, search])

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/peoples'} element={<PeoplesPage />} />
                <Route path={'/people/:id'} element={<PeoplePage />} />
                <Route path={'*'} element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppController;