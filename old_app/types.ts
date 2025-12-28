
export enum LeadStatus {
  ACCEPTED = 'accepted',
  WAIT = 'wait',
  DECLINED = 'declined',
  PENDING = 'pending'
}

export type ViewState = 'dashboard' | 'dataset' | 'accepted' | 'wait' | 'ai-insights' | 'calculator';

export interface LeadRow {
  [key: string]: string;
}

export interface Dataset {
  id: string;
  name: string;
  createdAt: Date;
  headers: string[];
  data: LeadRow[];
  statuses: { [rowIndex: number]: LeadStatus };
}

export interface GlobalStats {
  total: number;
  accepted: number;
  wait: number;
  declined: number;
  pending: number;
}
