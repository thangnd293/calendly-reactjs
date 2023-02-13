export type WorkingDay = {
  _id: string;
  day: string;
  hasShift: boolean;
  shifts: Shift[];
};

export type Shift = {
  _id: string;
  startTime: string;
  endTime: string;
  isReversed: boolean;
};

export type Reservation = {
  _id: string;
  user: string;
  shift: Shift;
};
