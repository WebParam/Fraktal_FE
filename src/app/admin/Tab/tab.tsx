import React, { useState } from 'react';
import './tab.scss'; // Assuming your CSS file is named Tabs.css

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => handleTabClick(0)}
        >
          Companies
        </button>
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Developers
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <div>
          <div className='displayCards'>
            <div className="card2">
              <div className="card-body">Recent Signups</div>
            </div>
  
                <div className="card2">
              <div className="card-body">Active Users</div>
            
            </div>
            <div className="card2">
              <div className="card-body">Inactive Accounts</div>
            
            </div>
            </div></div>}
        {activeTab === 1 && <div>
          <div className='displayCards'>
            <div className="card2">
              <div className="card-body">Recent Sign Ups</div>
            </div>
  
                <div className="card2">
              <div className="card-body">Active Accounts</div>
            
            </div>
            <div className="card2">
              <div className="card-body">Inactive Accounts</div>
            
            </div>
            </div></div>}
      </div>
    </div>
  );
};

export default Tabs;