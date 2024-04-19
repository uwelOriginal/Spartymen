"use client";
import React, {useState, useEffect} from "react";

const AnimatedNumbers = ({ initialValue, value, duration, formatValue, className }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentValue < value) {
        setCurrentValue(prevValue => prevValue + 1);
      } else {
        clearInterval(interval);
      }
    }, duration / value);

    return () => clearInterval(interval);
  }, [value, duration, currentValue]);

  return (
    <div className={className}>
      {formatValue(currentValue)}
    </div>
  );
};

const AchievementsSection = () => {

  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-4xl font-bold text-purple-700">Logros</h2>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600">Clientes Felices</h3>
          {!isHidden && (
            <AnimatedNumbers
              initialValue={248}
              value={99999}
              duration={300000000}
              formatValue={(value) => value.toFixed(0)}
              className="text-5xl font-bold text-blue-900"
            />
          )}
          {isHidden && (
            <AnimatedNumbers
              initialValue={0}
              value={248}
              duration={2000}
              formatValue={(value) => {
                if (value === 248) {
                  setIsHidden(false);
                }
                return value.toFixed(0);
              }}
              className="text-5xl font-bold text-blue-900"
            />
          )}
        </div>
        <div className="bg-red-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-red-500">Proyectos Completados</h3>
          {!isHidden && (
            <AnimatedNumbers
              initialValue={31}
              value={99999}
              duration={1100000000}
              formatValue={(value) => value.toFixed(0)}
              className="text-5xl font-bold text-red-700"
            />
          )}
          {isHidden && (
            <AnimatedNumbers
              initialValue={0}
              value={31}
              duration={2000}
              formatValue={(value) => {
                if (value === 31) {
                  setIsHidden(false);
                }
                return value.toFixed(0);
              }}
              className="text-5xl font-bold text-red-700"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
