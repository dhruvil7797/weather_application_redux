// Redux Store
const initialState = {
    data: {
        allCityData: {},
        selectedCityData: {},
    },
    errorMessage: '',
}

// Action Handler
const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'resetError':
            return { ...state, errorMessage: '' }
        case 'setError':
            return { ...state, errorMessage: action.errorMessage }
        case 'addCity':
            // If 8 cities are already added remove the oldest one
            if (Object.keys(state.data.allCityData).length === 8) {
                delete state.data.allCityData[Object.keys(state.data.allCityData)[0]]
            }

            return {
                ...state, data: {
                    ...state.data,
                    allCityData: {
                        ...state.data.allCityData,
                        [action.name]: action.data
                    }
                }
            }

        case 'refreshCity':
            return {
                ...state, data: {
                    ...state.data,
                    allCityData: {
                        ...state.data.allCityData,
                        [action.name]: action.data
                    }
                }
            }

        case 'removeCity':
            // Check if selected city is being removed
            let updatedSelectedCity =
                state.data.selectedCityData.name === undefined ?
                    {} : 
                    state.data.selectedCityData.name === action.data ?
                        {} : state.data.selectedCityData;

            let cloneData = { ...state.data.allCityData }
            
            delete cloneData[action.data];
            return {
                ...state,
                data: {
                    ...state.data,
                    allCityData: cloneData,
                    selectedCityData: updatedSelectedCity,
                }
            }
        case 'fetchForecast':
            return {
                ...state,
                data: {
                    ...state.data,
                    selectedCityData: action.data
                }
            }
        case 'clearAllCity':
            return {
                ...state,
                data: {
                    allCityData: {},
                    selectedCityData: {}
                }
            }

        default:
            break;
    }
    return newState;
}

export default reducer;