export interface ITimeSlot {
  start_time: string;
  end_time: string;
}

export interface IData {
  id: number;
  name: string;
  type: string;
  time_slots: ITimeSlot[];
}

export interface INormalaizedData extends IData {
  [key: string]: any;
}

export interface ISelectedSlot {
  companyId: number
  slot: ITimeSlot
}

export interface ITimeSlotBlocked extends ITimeSlot {
  block: boolean
}


