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
    assignedTo?: string; // Derived from name prefix [user]
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

    display_picture?: string;

    // Project Links
    github_url?: string; // alias for repo
    github_repo?: string;
    live_url?: string;
    admin_url?: string;
    figma_url?: string; // New
    design_link?: string;

    // Notes
    domain_notes?: string; // New
    notes?: string; // New generalized note
    internal_notes?: string;

    // Payment Tracking
    payment_status: 'unpaid' | 'partial' | 'paid';
    amount_paid: number;
    total_deal_value: number; // Manually set or calculated default

    // Manual Payment Links
    manual_payment_link?: string;
    payment_completed_link?: string;

    // Additional Payment Links
    addon_links?: { title: string; url: string; price?: number }[];
}

export type ClientUpdatePayload = Partial<Omit<Client, 'id' | 'created_at'>>;

export interface PaymentRecord {
    id: string;
    client_id: string;
    amount: number;
    proof_url?: string;
    notes?: string;
    created_at: string;
}
