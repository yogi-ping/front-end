import { Header } from '../components/plan/detailplan/Header';
import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';
import { PlaceList } from '../components/plan/selectplace/PlaceList';

export const Plan: React.FC = () => {
  return (
    <div className='w-full flex'>
      <IndexSidemenu />
      <Header />
      <PlaceList />
    </div>
  );
};
