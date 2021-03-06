import React, {Component} from 'react';
import _ from 'lodash';

import './tabs.css';

import Tabs from './tabs-inner';

const dataTabs = [
	{
		title: 'London',
		text: 'London has been my adopted home for nearly 15 years and I still marvel at its energy and diversity. Living here is a constant discovery: new restaurants and bars, outstanding museum extensions or refurbishments (and yet many remain free), once-derelict but now trendy neighbourhoods, and four distinct seasons that each brings unique pleasures. The spectre of Brexit may be looming over the citys famed cultural...',
		tabId: 0,
	},
	{
		title: 'Moscow',
		text: 'Moscow is a major political, economic, cultural, and scientific centre of Russia and Eastern Europe, as well as the largest city entirely on the European continent. By broader definitions Moscow is among the worlds largest cities, being the 14th largest metro area, the 18th largest agglomeration, the 15th largest urban area, and the 11th largest by population within city limits worldwide. According to Forbes 2013,[12] Moscow has been ranked as the ninth most expensive city in the world by Mercer and has one of the worlds largest urban economies, being ranked as an alpha global city according to the Globalization and World Cities Research Network, and is also one of the fastest growing tourist destinations in the world according to the MasterCard Global Destination Cities Index.',
		tabId: 1,
	},
	{
		title: 'Paris',
		text: 'Paris’ grandeur is inspiring but what I love most about the city is its intimacy. Its quartiers (quarters) are like a patchwork of villages, and while it’s one of the world’s major metropolises – with all of the culture and facilities that go with it – there’s a real sense of community at the local shops, markets and cafes that hasn’t changed since my childhood. Yet because every little ‘village’ has its own evolving...',
		tabId: 2,
	}
];

export class TabsV2 extends Component {

	render() {

		const data = [];

		_.map(dataTabs, (item) => {
			data.push(
				<div label={item.title} key={item.tabId}>
					<h3 className='tab_content__city_title'>
						{item.title}
					</h3>
					<p className='tab_content__city_description'>
						{item.text}
					</p>
				</div>);
		});

		return (
			<Tabs>
				{data}
			</Tabs>
		);
	}
}



