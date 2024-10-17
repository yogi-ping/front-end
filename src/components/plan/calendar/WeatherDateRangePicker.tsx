import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { DateRange, WeatherData, City, cities } from './types';
import { CalendarHeader } from './CalendarHeader';
import { Calendar } from './Calendar';
import { WEATHER_API_KEY } from '../../../api/api';

interface WeatherDateRangePickerProps {
  onDateRangeChange: (dateRange: DateRange) => void;
  selectedCity: string;
}

const WeatherDateRangePicker: React.FC<WeatherDateRangePickerProps> = ({ onDateRangeChange, selectedCity }) => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  
  const API_KEY = WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const city = cities.find(c => c.name === selectedCity) || cities[0];
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
          params: {
            lat: city.lat,
            lon: city.lon,
            appid: API_KEY,
            units: 'metric',
          },
        });

        const weatherList = response.data.list
          .filter((_: any, index: number) => index % 8 === 0)
          .slice(0, 5)
          .map((item: any) => ({
            date: new Date(item.dt * 1000),
            icon: item.weather[0].icon,
            temperature: Math.round(item.main.temp),
          }));

        setWeatherData(weatherList);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const handleSelect = (date: Date) => {
    let newDateRange: DateRange;
    if (!dateRange.from || (dateRange.from && dateRange.to)) {
      newDateRange = { from: date, to: undefined };
    } else if (dateRange.from && !dateRange.to) {
      if (date >= dateRange.from) {
        newDateRange = { ...dateRange, to: date };
      } else {
        newDateRange = { from: date, to: undefined };
      }
    } else {
      newDateRange = dateRange;
    }
    setDateRange(newDateRange);

    onDateRangeChange(newDateRange);
  };

  const handleConfirmRange = () => {
    setIsCalendarOpen(false);
    onDateRangeChange(dateRange);
  };

  return (
    <div className="wdrp-container flex items-center space-x-2 w-full">
      <div className="flex-grow flex items-center">
        <span className="text-sm sm:text-base md:text-lg font-semibold truncate">
          {dateRange.from && dateRange.to
            ? `${format(dateRange.from, 'yyyy.MM.dd(EEE)', { locale: ko })} ~ ${format(dateRange.to, 'yyyy.MM.dd(EEE)', { locale: ko })}`
            : '날짜를 선택하세요'}
        </span>
      </div>
      <button 
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        className="wdrp-calendar-button flex-shrink-0 p-2 border rounded hover:bg-[#FED766] transition-colors duration-200"
      >
        <CalendarIcon className="wdrp-calendar-icon h-5 w-5" />
      </button>

      {isCalendarOpen && (
        <div className="wdrp-modal fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="wdrp-modal-content bg-white rounded-lg p-4 shadow-lg relative w-11/12 max-w-3xl h-auto max-h-[90vh] overflow-auto">
            <button 
              onClick={() => setIsCalendarOpen(false)} 
              className="wdrp-close-button absolute top-2 right-2 p-1 rounded-full hover:bg-[#FED766]"
              style={{ zIndex: 10 }}
            >
              <X className="wdrp-close-icon h-5 w-5" />
            </button>
            <CalendarHeader
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
            />
            <Calendar
              currentMonth={currentMonth}
              weatherData={weatherData}
              dateRange={dateRange}
              handleSelect={handleSelect}
            />
            <div className="wdrp-confirm-container flex justify-end mt-4">
              <button 
                onClick={handleConfirmRange} 
                className="wdrp-confirm-button px-4 py-2 bg-gray-900 text-white rounded hover:bg-[#FED766] hover:text-black transition-colors duration-200"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDateRangePicker;