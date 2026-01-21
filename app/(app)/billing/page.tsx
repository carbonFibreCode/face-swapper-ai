import { Metadata } from 'next';
import { BillingDashboard } from './billing-dashboard';
export const metadata: Metadata = {
    title: 'Billing | FaceSwapper.ai',
    description: 'Manage your credits and subscription',
};
export default function BillingPage() {
    return <BillingDashboard />;
}