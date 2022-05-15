import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppSelector";
import {Pagination, Space, Spin} from "antd";
import {setPeoplesPage} from "../../store/peoples/peoplesActionCreator";
import PeopleCard from "../PeopleCard/PeopleCard";
import PeoplesSearch from "../PeoplesSearch/Search";

const Peoples = () => {
    const dispatch: any = useDispatch();
    const {peoples, loading, error, pageNumber, peoplesCount} = useAppSelector(state => state.peoples)

    return (
        <div>
            <h1>Peoples from page 1</h1>
            <PeoplesSearch />
            {loading && (
                <Space size={"large"}>
                    <Spin size={"large"} />
                </Space>
            )}
            {!error && !loading && (
                peoples.map((people, idx) => {
                    return <PeopleCard key={people.name} people={people} index={idx + 1} />
                })
            )}
            <div style={{paddingBottom: '30px', display: 'flex', justifyContent: 'center'}}>
                <Pagination
                    defaultCurrent={1}
                    total={peoplesCount}
                    current={pageNumber}
                    onChange={(newPageNumber) => dispatch(setPeoplesPage(newPageNumber))}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
};

export default Peoples;