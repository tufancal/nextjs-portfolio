import type { PageStoryblok } from '@/component-types-sb';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

interface PageProps {
	blok: PageStoryblok;
}

const Page = ({ blok }: PageProps) => (
	<main className="text-center mt-4" {...storyblokEditable(blok)}>
		{blok.body?.map((nestedBlok) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default Page;
