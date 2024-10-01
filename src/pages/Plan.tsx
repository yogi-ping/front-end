import { Header } from '../components/plan/detailplan/header/Header';
import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';
import { PlaceList } from '../components/plan/selectplace/PlaceList';
import WeatherDateRangePicker from '../components/plan/calendar/WeatherDateRangePicker';

export const Plan: React.FC = () => {
  return (
    <div className='w-full flex'>
      <IndexSidemenu />
      <Header />
      <PlaceList />
      {/* <WeatherDateRangePicker/> */}
    </div>
  );
};
