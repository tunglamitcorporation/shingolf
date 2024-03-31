import React, { useState, useEffect } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const TabComponent = () => {
  const [tabs, setTabs] = useState(['Tab 1']);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOption, setSelectedOption] = useState('1'); // Default to option 1

  useEffect(() => {
    updateTabs();
  }, [selectedOption]); // Trigger updateTabs when selectedOption changes

  const updateTabs = () => {
    let numTabsToShow = tabs.length;
    setSelectedOption(numTabsToShow.toString()); // Update selectedOption based on number of tabs
  };

  const addTab = () => {
    if (tabs.length + 1 <= 5) {
      const newTab = `Tab ${tabs.length + 1}`;
      setTabs([...tabs, newTab]);
    } else {
      alert('Maximum of 5 tabs allowed!');
    }
  };

  const deleteTab = (index) => {
    const updatedTabs = tabs.filter((_, i) => i !== index);
    setTabs(updatedTabs);
    // Update active tab based on current active tab index and deleted tab index
    let nextActiveTab = activeTab;
    if (activeTab > index) {
      nextActiveTab--; // Adjust active tab index if deleted tab was before it
    } else if (activeTab === tabs.length - 1) {
      nextActiveTab = tabs.length - 2; // Activate the previous tab if the last tab is deleted
    }

    setActiveTab(nextActiveTab >= 0 ? nextActiveTab : 0); // Ensure a valid active tab index
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    let numTabsToAdd = parseInt(event.target.value, 10);

    if (numTabsToAdd > tabs.length) {
      // Add additional tabs if selected option is greater than current tabs
      let newTabs = [];
      for (let i = tabs.length + 1; i <= numTabsToAdd; i++) {
        newTabs.push(`Tab ${i}`);
      }
      setTabs([...tabs, ...newTabs]);
    } else if (numTabsToAdd < tabs.length) {
      // Remove tabs if selected option is less than current tabs
      const updatedTabs = tabs.slice(0, numTabsToAdd);
      setTabs(updatedTabs);
    }
  };

  return (
    <div>
      <label htmlFor="numTabs">Select Tabs to Show:</label>
      <select id="numTabs" value={selectedOption} onChange={handleSelectChange}>
        <option value="1">Show 1 Tab</option>
        <option value="2">Show 2 Tabs</option>
        <option value="3">Show 3 Tabs</option>
        <option value="4">Show 4 Tabs</option>
        <option value="5">Show 5 Tabs</option>
      </select>
      <button onClick={addTab}>Add Tab</button>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </TabList>
        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            <div>
              <h2>{tab} Content</h2>
              <button onClick={() => deleteTab(index)}>Delete</button>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabComponent;
