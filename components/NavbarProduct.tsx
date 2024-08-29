'use client';
import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContent } from './ContentProduct'; // Import the TabContent interface

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="h-full w-full"
      {...other}
    >
      {value === index && <div className="h-full w-full">{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface NavbarProductProps {
  tabsData: TabContent[];
}

const NavbarProduct: React.FC<NavbarProductProps> = ({ tabsData }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="h-full w-full fixed">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', background: '#C4C4C4A3' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="dynamic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#206E1A',
            },
          }}
          sx={{
            '& .MuiTab-root': { color: 'black' },
            '& .Mui-selected': { color: '#206E1A' },
          }}
        >
          {tabsData.map((tab, index) => (
            <Tab key={index} className='font-bold text-sm' label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabsData.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
};

export default NavbarProduct;