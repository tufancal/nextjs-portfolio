import type { FormCheckboxStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';

interface FormCheckboxProps {
	blok: FormCheckboxStoryblok;
}

const FormCheckbox = ({ blok }: FormCheckboxProps) => {
	return (
		<div className="form-group mb-6 flex" {...storyblokEditable(blok)}>
			<input
				type="checkbox"
				name={blok.name}
				className="mr-4"
				id={blok.name}
				required={blok.required}
			/>
			<label htmlFor={blok.name}>{blok.label}</label>
		</div>
	);
};

export default FormCheckbox;
