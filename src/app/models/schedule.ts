export interface ISlot {
    id: number;
    value: string;
}

export interface IScheduleDay {
    id: string;
    day: number;
    weekday: string;
    slots: ISlot[];
    isToday?: boolean;
}

export type TSchedule = IScheduleDay[];
