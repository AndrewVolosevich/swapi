import React from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppSelector";
import Search from "antd/es/input/Search";
import {setSearchPeoples} from "../../store/peoples/peoplesActionCreator";

const PeoplesSearch = () => {
    const dispatch: any = useDispatch();

    return (
        <div style={{margin: '10px auto', width: '90%'}}>
            <Search
                placeholder={'input people name'}
                enterButton={'Search'}
                size={"large"}
                onSearch={((value) => {
                    if (value.length) {
                        dispatch(setSearchPeoples(value))
                    }
                })}
            />
        </div>
    );
};

export default PeoplesSearch;