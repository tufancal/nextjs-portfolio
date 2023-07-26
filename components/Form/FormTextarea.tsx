import type { FormTextareaStoryblok } from '@/component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';

interface FormTextareaProps {
	blok: FormTextareaStoryblok;
}

const FormTextarea = ({ blok }: FormTextareaProps) => {
	return (
		<div className="form-group mb-6" {...storyblokEditable(blok)}>
			<textarea
				name={blok.name}
				className="form-control m-0 block w-full rounded-[8px] border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-primary transition ease-in-out focus:border-primary focus:bg-white focus:text-primary focus:outline-none"
				id={blok.name}
				placeholder={`${blok.placeholder} ${blok.required ? '' : '(optional)'}`}
				required={blok.required}
				rows={Number(blok.rows)}
			/>
		</div>
	);
};

export default FormTextarea;
