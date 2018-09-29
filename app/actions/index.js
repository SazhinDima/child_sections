export const SECTIONS = 'SECTIONS';
export const TYPES = 'TYPES';

import {AsyncStorage} from "react-native";

export function getSections(){
    return (dispatch) => {
        AsyncStorage.getItem('sections', (err, sections) => {
            if (sections !== null){
                dispatch({type: SECTIONS, sections:JSON.parse(sections)});
            }
        });
    };
}

export function getTypes(){
    return (dispatch) => {
        AsyncStorage.getItem('types', (err, types) => {
            if (types !== null){
                dispatch({type: TYPES, types:JSON.parse(types)});
            }
        });
    };
}
