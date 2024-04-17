import React, { useState, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const MyForm = () => {
  const [tabData, setTabData] = useState({
    tab1: {
      field1: '',
      field2: ''
    },
    tab2: {
      field3: '',
      field4: ''
    }
  });

  const [errors, setErrors] = useState({});
  const tabRef = useRef(null);

  const handleTabDataChange = (tabName, fieldName, value) => {
    setTabData(prevData => ({
      ...prevData,
      [tabName]: {
        ...prevData[tabName],
        [fieldName]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentTab = tabRef.current?.state?.selectedIndex;

    // Validate data for the current tab
    const { tabErrors, tabIndex } = validateTabData(currentTab);

    if (Object.keys(tabErrors).length === 0) {
      // If current tab data is valid, move to the next tab
      if (currentTab < tabRef.current?.state?.tabs.length - 1) {
        tabRef.current.handleClick(currentTab + 1);
      } else {
        // If it's the last tab, submit the form
        submitForm();
      }
    } else {
      // If there are errors, set the errors state and switch to the tab with errors
      setErrors(tabErrors);
      tabRef.current?.handleClick(tabIndex);
    }
  };

  const validateTabData = (tabIndex) => {
    const tabName = `tab${tabIndex + 1}`;
    const tabErrors = {};

    // Validation logic for each tab
    Object.entries(tabData[tabName]).forEach(([fieldName, value]) => {
      if (!value) {
        tabErrors[fieldName] = 'Field is required';
      }
    });

    return { tabErrors, tabIndex };
  };

  const submitForm = () => {
    // Form submission logic goes here
    console.log('Form submitted successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tabs ref={tabRef}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>

        <TabPanel>
          <label>Field 1</label>
          <input
            type="text"
            value={tabData.tab1.field1}
            onChange={(e) => handleTabDataChange('tab1', 'field1', e.target.value)}
          />
          {errors.field1 && <div className="error">{errors.field1}</div>}

          <label>Field 2</label>
          <input
            type="text"
            value={tabData.tab1.field2}
            onChange={(e) => handleTabDataChange('tab1', 'field2', e.target.value)}
          />
          {errors.field2 && <div className="error">{errors.field2}</div>}
        </TabPanel>

        <TabPanel>
          <label>Field 3</label>
          <input
            type="text"
            value={tabData.tab2.field3}
            onChange={(e) => handleTabDataChange('tab2', 'field3', e.target.value)}
          />
          {errors.field3 && <div className="error">{errors.field3}</div>}

          <label>Field 4</label>
          <input
            type="text"
            value={tabData.tab2.field4}
            onChange={(e) => handleTabDataChange('tab2', 'field4', e.target.value)}
          />
          {errors.field4 && <div className="error">{errors.field4}</div>}
        </TabPanel>
      </Tabs>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
