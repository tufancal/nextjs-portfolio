import type { GridStoryblok } from '@/component-types-sb';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

interface GridProps {
  blok: GridStoryblok;
}

const Grid = ({ blok }: GridProps ) => {
	return (
		<div className="grid grid-cols-3" {...storyblokEditable(blok)}>
			{blok.columns?.map((nestedBlok) => (
				<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</div>
	);
};

export default Grid;
