import { getStoryblokApi, StoryblokComponent } from '@storyblok/react/rsc';

async function fetchData() {
	let sbParams = { 
    version: 'draft' as const 
  };

	const storyblokApi = getStoryblokApi();
	return storyblokApi.get(`cdn/stories/contact`, sbParams);
}


export default async function Home() {
	const { data } = await fetchData();

	return (
		<div>
			<StoryblokComponent blok={data.story.content} />
		</div>
	);
}