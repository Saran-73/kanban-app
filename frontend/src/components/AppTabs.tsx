import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'

type tabDataType = {
  tabData: {
    name: string;
    component: () => JSX.Element;
  }[];
}

const AppTabs = ({ tabData }: tabDataType) => {
  const [tab, setTab] = React.useState(0)

  return (
    <Tabs
      isLazy
    >
      <TabList>
        {tabData.map((each: { name: string }) => <Tab>{each.name}</Tab>)}
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