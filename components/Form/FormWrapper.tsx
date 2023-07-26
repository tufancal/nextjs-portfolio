import type { FormWrapperStoryblok } from '@/component-types-sb';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

interface FormWrapperProps {
	blok: FormWrapperStoryblok;
}

const FormWrapper = ({ blok }: FormWrapperProps) => {
	return (
		<div className="flex justify-center p-12">
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				action={`/${blok.navigationSuccess?.cached_url}`}
				className="flex flex-col w-[400px]"
				{...storyblokEditable(blok)}
			>
				{blok.forms?.map((nestedBlok) => {
					return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
				})}
				<button
					type="submit"
					className="w-full rounded-[8px] bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out bg-[#00b3b0] hover:bg-[#009f9c] hover:shadow-lg focus:bg-[#009f9c] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#009f9c] active:shadow-lg"
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default FormWrapper;
