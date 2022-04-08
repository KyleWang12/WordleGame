
const initState = {
    successShow:false,
    failedShow:false,
    errorShow:false
}

export function popUpReducer(preState = initState, action) {
    let state = {...preState}
    if(action.type === 'SUCCESS_SHOW'){
        state.successShow = true;
        return state;
    }
    if(action.type === 'SUCCESS_CLOSE'){
        state.successShow = false;
        return state;
    }
    if(action.type === 'FAILED_SHOW'){
        state.failedShow = true;
        return state;
    }
    if(action.type === 'FAILED_CLOSE'){
        state.failedShow = false;
        return state;
    }
    if(action.type === 'ERROR_SHOW'){
        state.errorShow = true;
        return state;
    }
    if(action.type === 'ERROR_CLOSE'){
        state.errorShow = false;
        return state;
    }

    return state;
}