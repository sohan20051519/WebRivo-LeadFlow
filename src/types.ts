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

export interface Client {
    id: string;
    created_at: string;

    business_name: string;
    contact_name: string;
    email: string;
    phone: string;

    source_dataset_id?: string;
    source_row_index?: number;

    status: 'onboarding' | 'in_progress' | 'review' | 'live' | 'maintenance' | 'completed';

    selected_package: string;
    package_price: number;
    core_upgrades: string[];
    add_ons: string[];
    domains: string[];
    custom_items: { name: string, price: number }[];

    github_repo?: string;
    live_url?: string;
    admin_url?: string;
    design_link?: string;

    internal_notes?: string;

    // Payment Tracking
    payment_status: 'unpaid' | 'partial' | 'paid';
    amount_paid: number;
    total_deal_value: number; // Manually set or calculated default
}

export type ClientUpdatePayload = Partial<Omit<Client, 'id' | 'created_at'>>;
