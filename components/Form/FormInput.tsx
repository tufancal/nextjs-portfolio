import type { FormInputStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';

interface FormInputProps {
	blok: FormInputStoryblok;
}

const FormInput = ({ blok }: FormInputProps) => {
	return (
		<div className="form-group mb-6" {...storyblokEditable(blok)}>
			<input
				type={blok.type}
				name={blok.name}
				className="form-control m-0 block w-full rounded-[8px] border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-primary transition ease-in-out focus:border-primary focus:bg-white focus:text-primary focus:outline-none"
				id={blok.name}
				placeholder={`${blok.placeholder} ${blok.required ? '' : '(optional)'}`}
				required={blok.required}
			/>
		</div>
	);
};

export default FormInput;
