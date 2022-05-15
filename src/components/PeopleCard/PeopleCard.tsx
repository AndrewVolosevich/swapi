import React from 'react';
import {Card} from "antd";
import {IPeople} from "../../store/peoples/types";
import {Link} from "react-router-dom";

const PeopleCard = ({people, index}: { people: IPeople, index: number }) => {
    return (
        <Card
            title={people.name}
            extra={<Link to={`/people/${index}`}>More</Link>}
            style={{ width: '90%', margin: '10px auto 10px' }}
        >
            <p>Birth year: {people.birth_year}</p>
            <p>Gender: {people.gender}</p>
            <p>Hair color: {people.hair_color}</p>
        </Card>
    );
};

export default PeopleCard;