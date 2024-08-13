import React, { useState, useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const WidgetForm = ({ categoryId, setShowForm }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const { addWidget } = useContext(DashboardContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText
    };
    addWidget(categoryId, newWidget);
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-2">
        <label className="block text-sm">Widget Name</label>
        <input 
          type="text" 
          value={widgetName} 
          onChange={(e) => setWidgetName(e.target.value)} 
          className="w-full px-2 py-1 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm">Widget Text</label>
        <textarea 
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          className="w-full px-2 py-1 border rounded"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Add Widget
      </button>
    </form>
  );
};

export default WidgetForm;
