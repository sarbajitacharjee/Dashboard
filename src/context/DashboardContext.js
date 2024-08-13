import React, { createContext, useState } from 'react';
import initialData from '../data/initialData';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const addWidget = (categoryId, widget) => {
    setData(prevData => {
      const updatedCategories = prevData.categories.map(category => {
        if (category.id === categoryId) {
          return { ...category, widgets: [...category.widgets, widget] };
        }
        return category;
      });
      return { ...prevData, categories: updatedCategories };
    });
  };

  const removeWidget = (categoryId, widgetId) => {
    setData(prevData => {
      const updatedCategories = prevData.categories.map(category => {
        if (category.id === categoryId) {
          return { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) };
        }
        return category;
      });
      return { ...prevData, categories: updatedCategories };
    });
  };

  return (
    <DashboardContext.Provider value={{ data, addWidget, removeWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};
