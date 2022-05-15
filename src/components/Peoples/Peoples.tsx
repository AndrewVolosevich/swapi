import React, {useEffect} from 'react';
import SwapiService from "../../services/swapiService/SwapiService";

const Peoples = () => {


    useEffect(() => {
        SwapiService.getAllPeoples(1).then(res => {
            console.log(res.data)
        })
    }, [])


    return (
        <div>

        </div>
    );
};

export default Peoples;