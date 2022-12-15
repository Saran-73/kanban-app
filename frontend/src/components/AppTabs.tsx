import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'

type tabDataType = {
  tabData: {
    name: string;
    component: () => JSX.Element;
  }[];
}

const AppTabs = ( {tabData} : tabDataType ) => {

  return (
    <Tabs>
      <TabList>
        {tabData.map((each: { name: string}) => <Tab>{each.name}</Tab>)}
      </TabList>
      <TabPanels>
        {tabData.map((each: any) =>
          <TabPanel>
            <Box>{each.component()}</Box>
          </TabPanel>
        )}
      </TabPanels>
    </Tabs>
  )
}

export default AppTabs;