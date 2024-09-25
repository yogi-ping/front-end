import { Header } from '../components/plan/detailplan/Header';
import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';

export const Plan: React.FC = () => {
  return (
    <div className="w-full flex">
      <IndexSidemenu  />
      <Header />
    </div>
  );
};
