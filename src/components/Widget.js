import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const Widget = ({ widget, categoryId }) => {
  const { removeWidget } = useContext(DashboardContext);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md relative">
      <h3 className="text-sm font-semibold mb-2">{widget.name}</h3>
      <p className="text-xs text-gray-600">{widget.text}</p>
      <button 
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-1 right-1 text-red-500"
      >
        &times;
      </button>
    </div>
  );
};

export default Widget;
