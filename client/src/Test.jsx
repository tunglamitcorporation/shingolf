import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const TabsInput = () => {
  const [tabInputs, setTabInputs] = useState({
    tab1: { input1: '', input2: '', input3: '', input4: '', input5: '' },
    tab2: { input1: '', input2: '', input3: '', input4: '' },
    tab3: { input1: '', input2: '', input3: '', input4: '', input5: '' },
    tab4: { input1: '', input2: '', input3: '', input4: '', input5: '' },
    tab5: { input1: '', input2: '', input3: '', input4: '', input5: '' },
  });

  const handleInputChange = (tabId, inputName, value) => {
    setTabInputs((prevState) => ({
      ...prevState,
      [tabId]: {
        ...prevState[tabId],
        [inputName]: value,
      },
    }));
  };

  const handleRadioChange = (tabId, inputName, value) => {
    setTabInputs((prevState) => ({
      ...prevState,
      [tabId]: {
        ...prevState[tabId],
        [inputName]: value,
      },
    }));
  };

  const handleSave = () => {
    // Log specific content from the state object
    console.log("Tab 1:", tabInputs.tab1);
    console.log("Tab 2:", tabInputs.tab2);
    console.log("Tab 3:", tabInputs.tab3);
    console.log("Tab 4:", tabInputs.tab4);
    console.log("Tab 5:", tabInputs.tab5);
    // You can log other specific content as needed
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 4</Tab>
        <Tab>Tab 5</Tab>
      </TabList>

      <TabPanel>
        <input
          type="text"
          value={tabInputs.tab1.input1}
          onChange={(e) => handleInputChange('tab1', 'input1', e.target.value)}
        />
        {/* Add more input fields for tab1 */}
      </TabPanel>
      
      <TabPanel>
        <label>
          <input
            type="radio"
            value="option1"
            checked={tabInputs.tab2.input1 === 'option1'}
            onChange={(e) => handleRadioChange('tab2', 'input1', e.target.value)}
          /> Option 1
        </label>
        {/* Add more radio buttons for tab2 */}
      </TabPanel>

      <TabPanel>
        <select
          value={tabInputs.tab3.input1}
          onChange={(e) => handleInputChange('tab3', 'input1', e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options for tab3 */}
        </select>
        {/* Add more select dropdowns for tab3 */}
      </TabPanel>

      {/* Repeat TabPanel for other tabs */}
      
      <button onClick={handleSave}>Save</button> {/* Log specific content on button click */}
    </Tabs>
  );
};

export default TabsInput;
