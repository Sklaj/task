import * as React from "react";
import {useEffect} from "react";
import {getPetsData} from "./actions/getPetsData";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../mainReducer";
import {map} from "lodash";
import {Link} from "react-router-dom";

interface IProps {
    profilePets: string[];
}

export const PetListView = (props: IProps) => {

    const dispatch = useDispatch();
    const pets = useSelector((store: IStore) => store.pets);

    useEffect(() => {
        if (pets.length !== props.profilePets.length) {
            getPetsData(props.profilePets, dispatch);
        }
    }, [props.profilePets, dispatch]);


    return (
        <>
            <h3>
                Twoje zwierzaki
            </h3>

            <div>
                {pets && map(pets, (pet) => {
                    return (
                        <li key={pet.id}>
                            <Link to={`/pets/pet/${pet.id}`}>
                                <p style={{marginRight: "5px", display: "inline-block"}}>{pet.name}</p>
                                <p style={{marginRight: "5px", display: "inline-block"}}>{pet.age}</p>
                                <p style={{marginRight: "5px", display: "inline-block"}}>{pet.breed}</p>
                                <p style={{marginRight: "5px", display: "inline-block"}}>{pet.sex}</p>
                            </Link>
                        </li>
                    );
                })}
            </div>
        </>
    );
};
