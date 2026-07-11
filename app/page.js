import HeroChaos from '@/components/HeroChaos';
import Ingestion from '@/components/Ingestion';
import Modeling from '@/components/Modeling';
import Dashboard from '@/components/Dashboard';
import Resolution from '@/components/Resolution';
import MiniNav from '@/components/MiniNav';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <HeroChaos />
      <Ingestion />
      <Modeling />
      <Dashboard />
      <Resolution />
      <MiniNav />
    </div>
  );
}
