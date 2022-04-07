
/** 
 * letter.bg:bg-light not submitted
 * letter.bg:bg-secondary submitted but not in goal
 * letter.bg:bg-warning submitted and in goal but not right position
 * letter.bg:bg-success in right position
*/
import { randomWord } from '../helper/getWord'

const initState = {
    goal: "THORN",
    rows:[],
    currentRow: 0,
    currentCol: 0,
    wordLength: 5,
    allowedTries: 7
}
let rows = initState.rows;
for (let i=0; i<initState.allowedTries; i++) {
    const letters = [];
    for (let j=0; j<initState.wordLength; j++) {
        letters.push({ bg: 'bg-light', letter: '', total: 1 });
    }
    rows.push(letters);
}

export function keyBoardReducer(preState = initState, action) {
    let state = {
        goal: preState.goal,
        rows: [...preState.rows],
        currentRow: preState.currentRow,
        currentCol: preState.currentCol,
        wordLength: preState.wordLength,
        allowedTries: preState.allowedTries
    }
    if (action.type === 'ADD') {
        let row = state.currentRow;
        let col = state.currentCol;
        state.rows[row][col].letter = action.letter;
        if (col === state.wordLength-1) {
            state.currentRow += 1;
            state.currentCol = 0;
        } else {
            state.currentCol += 1;
        }
        return state;
    }
    if (action.type === 'DEL') {
        let row = state.currentRow;
        let col = state.currentCol - 1;
        if (col === -1) {
            col = state.wordLength-1;
            row -= 1;
        }
        state.rows[row][col].letter = '';
        state.currentRow = row;
        state.currentCol = col;
        return state;
    }
    if (action.type === 'CHECK') {
        const row = state.currentRow - 1;
        const word = action.word;
        const goalCnt = {};
        // count for letters in goal
        for (let c of state.goal) {
            goalCnt[c] = goalCnt[c] ? goalCnt[c] + 1 : 1;
        }

        // count for word to check
        const cnt = {};
        // loop checks for letters at right position
        // or not appear
        // this has the most priority
        for (let i = 0; i < word.length; i++) {
            state.rows[row][i].bg = "bg-secondary";
            const c = word.charAt(i);
            if (c === state.goal.charAt(i)) {
                cnt[c] = cnt[c] ? cnt[c] + 1 : 1;
                state.rows[row][i].bg = "bg-success";
            }
            if (!goalCnt[c]) {
                cnt[c] = cnt[c] ? cnt[c] + 1 : 1;
                state.rows[row][i].bg = "bg-secondary";
            }
        }
        // loop checks for letters at wrong position
        for (let i = 0; i < word.length; i++) {
            const c = word.charAt(i);
            if (c !== state.goal.charAt(i) && goalCnt[c]) {
                state.rows[row][i].status = 1;
                cnt[c] = cnt[c] ? cnt[c] + 1 : 1;
                if (cnt[c] <= goalCnt[c]) {
                    state.rows[row][i].bg = "bg-warning";
                }
            }
        }

        return state;
    }
    if (action.type === 'RESET') {
        const newGoal = randomWord(state.wordLength);
        const rows = [];
        for (let i=0; i<state.allowedTries; i++) {
            const letters = [];
            for (let j=0; j<state.wordLength; j++) {
                letters.push({ bg: 'bg-light', letter: '', total: 1 });
            }
            rows.push(letters);
        }
        return {
            goal: newGoal,
            rows,
            currentRow: 0,
            currentCol: 0,
            wordLength: state.wordLength,
            allowedTries: state.allowedTries
        }
    }
    if (action.type === 'DIFFICULTY'){
        const newGoal = randomWord(action.wordLength);
        const rows = [];
        for (let i=0; i<action.allowedTries; i++) {
            const letters = [];
            for (let j=0; j<action.wordLength; j++) {
                letters.push({ bg: 'bg-light', letter: '', total: 1 });
            }
            rows.push(letters);
        }
        return {
            goal: newGoal,
            rows,
            currentRow: 0,
            currentCol: 0,
            wordLength: action.wordLength,
            allowedTries: action.allowedTries
        }
    }
    return state;
}

// let state = keyBoardReducer(initState, {type:'ADD', letter:'A'});
// state = keyBoardReducer(state, {type:'ADD', letter:'P'});
// state = keyBoardReducer(state, {type:'ADD', letter:'P'});
// state = keyBoardReducer(state, {type:'ADD', letter:'L'});
// state = keyBoardReducer(state, {type:'ADD', letter:'E'});
// console.log(state.rows[0])
// state = keyBoardReducer(state, {type:'CHECK', word:'THORN'});
// console.log(state.rows[0])

