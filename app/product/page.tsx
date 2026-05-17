import { Metadata } from 'next';
import AdminApp from '../../components/admin/AdminApp';

export const metadata: Metadata = {
  title: 'Product Management — Lenden Epicurean',
  description: 'Admin dashboard for managing products.',
};

export default function ProductPage() {
  return <AdminApp />;
}
