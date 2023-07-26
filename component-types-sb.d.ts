import {StoryblokStory} from 'storyblok-generate-ts'

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface FormCheckboxStoryblok {
  name?: string;
  label?: string;
  required?: boolean;
  _uid: string;
  component: "FormCheckbox";
  [k: string]: any;
}

export interface FormInputStoryblok {
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: "email" | "number" | "text";
  _uid: string;
  component: "FormInput";
  [k: string]: any;
}

export interface FormTextareaStoryblok {
  name?: string;
  placeholder?: string;
  required?: boolean;
  rows?: string;
  _uid: string;
  component: "FormTextarea";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface FormWrapperStoryblok {
  forms?: any[];
  navigationSuccess?: MultilinkStoryblok;
  _uid: string;
  component: "FormWrapper";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
