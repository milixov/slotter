export interface ITimeSlots {
    start_time: string;
    end_time: string;
}

export interface IData {
    id: number;
    name: string;
    type: string;
    time_slots: ITimeSlots[];
}

export interface INormalaizedData extends IData {
    [key: string]: any;
}
