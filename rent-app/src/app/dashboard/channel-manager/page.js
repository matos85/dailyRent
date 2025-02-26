// pages/dashboard/channel-manager.js
import Layout from '../../../components/Navbar'; // Проверьте путь
import Navbar from '../../../components/nav-dashbord';

const ChannelManager = () => {
  return (
    <Layout>
      <Navbar />
      <h1 className="text-2xl font-bold">Менеджер каналов</h1>
      {/* Здесь можно добавить остальное содержимое страницы */}
    </Layout>
  );
};

export default ChannelManager; // Убедитесь, что это строка присутствует
