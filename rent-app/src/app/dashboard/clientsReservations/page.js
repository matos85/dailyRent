// pages/dashboard/clients.js
import Layout from '../../../components/Navbar';
import Navbar from '../../../components/nav-dashbord';
import SidebarMenu from '@/components/nav-clientsReservations'; 

const ClientsReservations = () => {
  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold">Клиенты и бронь</h1>
      <SidebarMenu />
    </Layout>
  );
};

export default ClientsReservations;


             
