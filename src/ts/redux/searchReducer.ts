export interface ISearch {
    searchValue: string;
}

const searchInitialState = {
    searchValue: ""
}

export const searchReducer = function (formValues = searchInitialState, action: any) {
    switch (action.type) {
        case "UPDATE_FORM":
            return {
                searchValue: action.searchValue
            };
        default:
            return formValues;
    }
}
