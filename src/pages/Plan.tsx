import { IndexSidemenu } from '../components/plan/sidemenu/IndexSidemenu';
import { PlaceList } from '../components/plan/selectplace/PlaceList';
import DetailPlan from '../components/plan/detailplan/index';
import WeatherDateRangePicker from '../components/plan/calendar/WeatherDateRangePicker';

export const Plan: React.FC = () => {
  return (
    <div className="w-full flex">
      <IndexSidemenu />
      <DetailPlan />
      <PlaceList />
      {/* <WeatherDateRangePicker /> */}
    </div>
  );
};
