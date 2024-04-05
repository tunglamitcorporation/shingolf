import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const TabsInput = () => {
  const [tabInputs, setTabInputs] = useState({
    tab1: '',
    tab2: '',
    tab3: '',
    tab4: '',
    tab5: '',
  });

  const [numTabs, setNumTabs] = useState(1); // Initial number of tabs

  const handleInputChange = (tabId, value) => {
    setTabInputs((prevState) => ({
      ...prevState,
      [tabId]: value,
    }));
  };

  const handleSave = () => {
    // Log specific content from the state object
    console.log("Content of tab1:", tabInputs.tab1);
    console.log("Content of tab3:", tabInputs.tab3);
    // You can log other specific content as needed
  };

  const addNewTab = () => {
    const newNumTabs = numTabs + 1;
    const newTabId = `tab${newNumTabs}`;
    setTabInputs((prevState) => ({
      ...prevState,
      [newTabId]: '',
    }));
    setNumTabs(newNumTabs);
  };

  return (
    <div>
      <Tabs>
        <TabList>
          {Object.keys(tabInputs).map((tabId) => (
            <Tab key={tabId}>{tabId}</Tab>
          ))}
        </TabList>

        {Object.keys(tabInputs).map((tabId) => (
          <TabPanel key={tabId}>
            <input
              type="text"
              value={tabInputs[tabId]}
              onChange={(e) => handleInputChange(tabId, e.target.value)}
            />
          </TabPanel>
        ))}
      </Tabs>

      <button onClick={addNewTab}>Add Tab</button>
      <button onClick={handleSave}>Save</button> {/* Log specific content on button click */}
    </div>
  );
};

export default TabsInput;
