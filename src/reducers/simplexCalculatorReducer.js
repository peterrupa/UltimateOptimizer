import {
    GOAL_SET,
    GOAL_MINIMIZE,
    OBJECTIVE_FUNCTION_SET,
    CONSTRAINTS_ADD,
    CONSTRAINTS_EDIT
} from '../constants/simplexCalculatorConstants';

const init = {
    goal: GOAL_MINIMIZE,
    objectiveFunction: '1 * a + 1 * b + 1 * c',
    constraints: [
        '1 * a + 2 * b + 1 * c >= 30',
        '0 * a + 6 * b + 1 * c <= 54',
        '1 * a + 1 * b + 2 * c >= 20'
    ]
};

const simplexCalculatorReducer = (state = init, action) => {
    switch(action.type) {
        case GOAL_SET: {
            return Object.assign({}, state, {
                goal: action.goal
            });
        }

        case OBJECTIVE_FUNCTION_SET: {
            return Object.assign({}, state, {
                objectiveFunction: action.objectiveFunction
            });
        }

        case CONSTRAINTS_ADD: {
            return Object.assign({}, state, {
                constraints: [
                    ...state.constraints, action.constraint
                ].filter(c => c !== '')
            });
        }

        case CONSTRAINTS_EDIT: {
            return Object.assign({}, state, {
                constraints: state.constraints.map((constraint, index) => {
                    if(index === action.index) {
                        return action.constraint;
                    }

                    return constraint;
                }).filter(c => c !== '')
            });
        }

        default: {}
    };

    return state;
};

export default simplexCalculatorReducer;