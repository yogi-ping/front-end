import { Header } from '../components/plan/detailplan/Header';
import { SideMenu } from '../components/plan/SideMenu';

export const Plan: React.FC = () => {
  return (
    <div className="w-full flex">
      <SideMenu />
      <Header />
    </div>
  );
};
