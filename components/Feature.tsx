import type { FeatureStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';

interface FeatureProps {
  blok: FeatureStoryblok;
}

const Feature = ({ blok }: FeatureProps) => (
	<div {...storyblokEditable(blok)}>{blok.name}</div>
);

export default Feature;
