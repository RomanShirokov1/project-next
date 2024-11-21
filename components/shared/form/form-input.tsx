'use client';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '../../ui/input'; // Импортируйте стандартный Input для других полей
import { ClearButton } from '../clear-button';
import { ErrorText } from '../error-text';
import { RequiredSymbol } from '../required-symbol';
import { PhoneInput } from '../phone-input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({ className, name, label, required, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, '', { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        {name == 'phone' ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <PhoneInput
                className="h-12 text-md"
                onChange={field.onChange}
                placeholder="+7(000)000-00-00"
              />
            )}
          />
        ) : (
          <Input className="h-12 text-md" {...register(name)} {...props} />
        )}

        {value && <ClearButton onClick={onClickClear} />}
      </div>

      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
