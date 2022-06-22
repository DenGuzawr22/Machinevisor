const isNumber = (number: any): boolean  => {
    return !isNaN(+number);
}

const makeErr = (error_name: string, message: string): Object => {
    return {error_name, message};
}
export {makeErr, isNumber }

export enum Modality{
    SLEEP_MODE,
    ENERGY_ECONOMY_PRODUCTION_MODE,
    PRODUCTION_MODE
}

export enum State{
    OFFLINE,
    OFF,
    ON,
    ALLARM, 
}