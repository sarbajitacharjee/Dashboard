import React, { useContext, useState } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import Category from './Category';

const Dashboard = () => {
  const { data } = useContext(DashboardContext);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="p-6">
      <input 
        type="text"
        placeholder="Search widgets..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      {data.categories.map(category => (
        <Category key={category.id} category={category} searchQuery={searchQuery} />
      ))}
    </div>
  );
};

export default Dashboard;
