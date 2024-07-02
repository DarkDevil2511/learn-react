import { Tabs } from '@mantine/core'
import UseEffectGeneral from './useEffect-general'
import UseEffectNoDeps from './useEffect-no-deps'
import UseEffectEmptyDeps from './useEffect-empty-deps'
import UseEffectWithDeps from './useEffect-with-deps'
import UseEffectDOMEvent from './advance/useEffect-DOM-evenet'
import UseEffectTimeoutFunc from './advance/useEffect-timeout-func'
import UseEffectUploadImg from './advance/useEffect-upload-img'
import { randomId } from '@mantine/hooks'

function UseEffectPageView() {
	const tabData = [
		{
			tab_value: 'useEffect-general',
			tab_inner_text: 'General',
			panel: <UseEffectGeneral />,
			icon: '1. ',
		},
		{
			tab_value: 'useEffect-no-deps',
			tab_inner_text: 'UseEffect No Deps',
			panel: <UseEffectNoDeps />,
			icon: '2. ',
		},
		{
			tab_value: 'useEffect-empty-deps',
			tab_inner_text: 'UseEffect Empty Deps',
			panel: <UseEffectEmptyDeps />,
			icon: '3. ',
		},
		{
			tab_value: 'useEffect-with-deps',
			tab_inner_text: 'UseEffect With Deps',
			panel: <UseEffectWithDeps />,
			icon: '4. ',
		},
		{
			tab_value: 'useEffect-DOM-event',
			tab_inner_text: 'UseEffect DOM Event',
			panel: <UseEffectDOMEvent />,
			icon: '5. ',
		},
		{
			tab_value: 'useEffect-timeout-func',
			tab_inner_text: 'UseEffect Timeout Func',
			panel: <UseEffectTimeoutFunc />,
			icon: '6. ',
		},
		{
			tab_value: 'useEffect-upload-img',
			tab_inner_text: 'UseEffect Upload Img',
			panel: <UseEffectUploadImg />,
			icon: '7. ',
		},
	]

	return (
		<Tabs variant="outline" defaultValue={tabData[0].tab_value}>
			<Tabs.List>
				{tabData.map((tab, i) => {
					return (
						<Tabs.Tab value={tab.tab_value} leftSection={tab.icon} key={randomId()}>
							{tab.tab_inner_text}
						</Tabs.Tab>
					)
				})}
			</Tabs.List>

			{tabData.map((tab, i) => {
				return (
					<Tabs.Panel value={tab.tab_value} key={randomId()}>
						<div className="pt-3">{tab.panel}</div>
					</Tabs.Panel>
				)
			})}
		</Tabs>
	)
}

export default UseEffectPageView
