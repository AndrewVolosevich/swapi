import React, {useMemo} from 'react';
import {Link, useParams} from "react-router-dom";
import {Card} from "antd";
import {useAppSelector} from "../../hooks/useAppSelector";

const PeoplePage = () => {
    const {id} = useParams();
    const {peoples} = useAppSelector(state => state.peoples)
    const people = useMemo(() => {
        if (id) {
            return peoples[Number(id)-1]
        }
        return peoples[0]
    }, [peoples])
    return (
        <div>
            People #{id}

            <br />

            <Card
                title={people.name}
                extra={<Link to={`/peoples`}>Go Back</Link>}
                style={{ width: '90%', margin: '10px auto 10px' }}
            >
                <p>Birth year: {people.birth_year}</p>
                <p>Gender: {people.gender}</p>
                <p>Hair color: {people.hair_color}</p>
                <p>Eye color: {people.eye_color}</p>
                <p>Skin color: {people.skin_color}</p>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
                <p>Birth year: {people.birth_year}</p>
                <p>Created at: {new Date(people.created).toDateString()}</p>
            </Card>
        </div>
    );
};

export default PeoplePage;