import Button from '@/src/components/button/Button';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import style from './FormComponent.module.scss';

type FieldType = {
  name: string;
  type: string;
  isRequired: boolean;
  isDisabled: boolean;
  value: string;
};

type FieldsPropsType = {
  id?: string;
  fields: Array<FieldType>;
  buttonText: string;
  handler: (payload: { data: any; id: string | undefined }) => void;
};
const FormComponent: FC<FieldsPropsType> = ({
  id, fields, handler, buttonText,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  // console.log(fields);
  const onFormSubmitHandler = (data: any) => {
    handler({ id, data });
    reset();
  };

  // eslint-disable-next-line react/destructuring-assignment
  const showFields = fields.map((item) => {
    // debugger
    return (
      <div className={style.inputField_container} key={item.name}>
        <label>
          {item.name}
          <input
            type={item.type}
            placeholder={item.value}
            {...register(item.name, {
              value: item.value,
              disabled: item.isDisabled,
              required: item.isRequired,
            })}
            className={`${errors?.[item.name] ? style.error : ''}`}
          />
          { errors?.[item.name] && <div className={style.errorMessage}>Field is required</div> }
        </label>
      </div>
    );
  });
  return (
    <div className={style.form_block}>
      <form id={id} onSubmit={handleSubmit(onFormSubmitHandler)}>
        {showFields}
        <Button title={buttonText} type="submit" />
      </form>
    </div>
  );
};

export default FormComponent;
