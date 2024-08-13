import React, { useState, useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import Widget from './Widget';
import WidgetForm from './WidgetForm';

const Category = ({ category, searchQuery }) => {
  const [showForm, setShowForm] = useState(false);
  const [showWidgetList, setShowWidgetList] = useState(false);
  const { removeWidget } = useContext(DashboardContext);

  // Filter widgets based on the search query
  const filteredWidgets = category.widgets.filter(widget =>
    widget.name.toLowerCase().includes(searchQuery)
  );

  const handleWidgetToggle = (widgetId) => {
    removeWidget(category.id, widgetId);
  };

  return (
    <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">{category.name}</h2>
      
      <div className="grid grid-cols-3 gap-4">
        {filteredWidgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>

      <button 
        onClick={() => setShowForm(!showForm)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        + Add Widget
      </button>

      {showForm && <WidgetForm categoryId={category.id} setShowForm={setShowForm} />}
      
      <button 
        onClick={() => setShowWidgetList(!showWidgetList)}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
      >
        Manage Widgets in Category
      </button>

      {showWidgetList && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Uncheck to Remove Widgets</h3>
          {category.widgets.map(widget => (
            <div key={widget.id} className="flex items-center mb-2">
              <input 
                type="checkbox" 
                checked 
                onChange={() => handleWidgetToggle(widget.id)} 
                className="mr-2"
              />
              <span>{widget.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
