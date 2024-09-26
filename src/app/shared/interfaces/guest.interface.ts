export interface Guest {
  id: string;
  eventId: string;
  name: string;
  lastName: string;
  cellphone: string;
  email: string;
  invitationCode: string; // QR code
  isSpecialGuest: boolean;
  isConfirmed: boolean;
  status: boolean;
}
