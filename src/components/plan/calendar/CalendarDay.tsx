import React from 'react';
import { format, isSameDay, isToday, isSaturday, isSunday } from 'date-fns';
import { WeatherData, DateRange } from './types';

type CalendarDayProps = {
  date: Date;
  weatherData: WeatherData[];
  dateRange: DateRange;
  handleSelect: (date: Date) => void;
};

export const CalendarDay: React.FC<CalendarDayProps> = ({ date, weatherData, dateRange, handleSelect }) => {
  const weatherForDay = weatherData.find(d => isSameDay(d.date, date));
  const isSelected = dateRange.from && isSameDay(date, dateRange.from);
  const isEndDate = dateRange.to && isSameDay(date, dateRange.to);
  const isInRange = dateRange.from && dateRange.to && date > dateRange.from && date < dateRange.to;
  const isPastDate = date < new Date();
  const isTodayDate = isToday(date);

  return (
    <div
      className={`wdrp-calendar-day text-center p-1 cursor-pointer relative h-16 flex flex-col justify-between
        ${isTodayDate ? 'wdrp-today font-bold' : ''}
        ${isSelected || isEndDate ? 'wdrp-selected bg-[#FED766] bg-opacity-90 ' : ''}
        ${isInRange ? 'wdrp-in-range bg-[#FED766] bg-opacity-20' : ''}
        ${isSaturday(date) ? 'wdrp-saturday text-blue-500' : ''}
        ${isSunday(date) ? 'wdrp-sunday text-red-500' : ''}
        ${isPastDate && !isTodayDate ? 'wdrp-past-date text-gray-400' : ''}
      `}
      onClick={() => {
        if (!isPastDate || isTodayDate) {
          handleSelect(date);
        }
      }}
    >
      <div className="wdrp-day-number">{format(date, 'd')}</div>
      {weatherForDay && (
        <div className="wdrp-weather-info absolute bottom-1 flex flex-col items-center justify-center">
          <img 
            src={`https://openweathermap.org/img/wn/${weatherForDay.icon}.png`} 
            alt="weather icon" 
            className="wdrp-weather-icon w-6 h-6"
          />
          <span className="wdrp-temperature text-xs ml-1">{weatherForDay.temperature}°C</span>
        </div>
      )}
    </div>
  );
};
