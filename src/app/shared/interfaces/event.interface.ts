export interface Event {
  id: string;
  eventTypeId: string;
  name: string;
  date: Date;
  duration: number; // duration in hours, for example
  numberGuests: number;
  tablesAmount: number;
  hostId: string;
  beverageId: string;
  beverageAmount: number;
  tableLinenBaseColor: string;
  tableLinenSecondColor: string;
  securityGuards: number;
  recepcionist: string;
  sendConfirmAssistance: boolean;
  sendQRPass: boolean;
}
