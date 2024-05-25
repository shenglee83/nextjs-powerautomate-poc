import { ControllerRenderProps } from "react-hook-form";

type Props = {
  type?: 'number' | 'text' | 'email';
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  className?: string;
  field: ControllerRenderProps<any, any>;
  onChange?: (e: any) => void;
  readonly?: boolean; 
};

const InputField: React.FC<Props> = ({
  type = 'text', // Default as Text type input field
  min,
  max,
  minLength,
  maxLength,
  placeholder,
  className = '',
  field,
  onChange = field.onChange,
  readonly = false
}) => {
  return (
    <input
      type={type}
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      className = {`w-full bg-transparent text-gray-900 disabled:text-grey-700 text-xl font-light leading-7 placeholder:text-grey-700 caret-grey-900 border-b border-grey-300 pb-[3px] focus:outline-0 ${className}`}
      {...field}
      onChange={onChange}
      disabled={readonly}
    />
  )
};

export default InputField