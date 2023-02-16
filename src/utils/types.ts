export interface RenderCardsProps {
  data: {
    _id: string;
    name: string;
    prompt: string;
    photo: string;
    __v: string;
  }[];
  title: string;
}

export interface Post {
  _id: string;
  name: string;
  prompt: string;
  photo: string;
  __v: string;
}

export interface FormFieldProps {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
  formError?: boolean;
}


export interface CustomError extends Error {
  response?: {
    data: {
      message: string;
    };
  };
}