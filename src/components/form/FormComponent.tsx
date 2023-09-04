import Button from '@/src/components/button/Button';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import style from './FormComponent.module.scss';

type FieldType = {
  ae_title: string;
  description: string;
  host: string;
  port: string;
};

type FieldsPropsType = {
  id?: string;
  item: FieldType;
  buttonText: string;
  handler: (payload: { data: any; id: string | undefined }) => void;
};
const FormComponent: FC<FieldsPropsType> = ({
  item, handler, buttonText,
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
    // console.log(data);
    handler(data);
    reset();
  };

  // eslint-disable-next-line react/destructuring-assignment
  // const showFields = fields.map((item) => {
  //   // debugger
  //   return (
  //     <div className={style.inputField_container} key={item.name}>
  //       <label>
  //         {item.name}
  //         <input
  //           type={item.type}
  //           placeholder={item.value}
  //           {...register(item.name, {
  //             value: item.value,
  //             disabled: item.isDisabled,
  //             required: item.isRequired,
  //           })}
  //           className={`${errors?.[item.name] ? style.error : ''}`}
  //         />
  //         { errors?.[item.name] && <div className={style.errorMessage}>Field is required</div> }
  //       </label>
  //     </div>
  //   );
  // });
  return (
    <div className={style.form_block}>
      <form id={item.ae_title} onSubmit={handleSubmit(onFormSubmitHandler)}>
        {/* {showFields} */}
        <div className={style.inputField_container}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Name
            <input
              type="text"
              placeholder="Type the AE Title"
              {...register('ae_title', {
                value: item.ae_title,
                required: true,
              })}
              className={`${errors?.ae_title ? style.error : ''}`}
            />
            { errors?.ae_title && <div className={style.errorMessage}>Field is required</div> }
          </label>
        </div>
        <div className={style.inputField_container}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Description
            <input
              type="text"
              placeholder="Type the description"
              {...register('description', {
                value: item.description,
                required: false,
              })}
              className={`${errors?.description ? style.error : ''}`}
            />
            { errors?.description && <div className={style.errorMessage}>Field is required</div> }
          </label>
        </div>
        <div className={style.inputField_container}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Host
            <input
              type="text"
              placeholder="Type the host"
              {...register('host', {
                value: item.host,
                required: true,
              })}
              className={`${errors?.host ? style.error : ''}`}
            />
            { errors?.host && <div className={style.errorMessage}>Field is required</div> }
          </label>
        </div>
        <div className={style.inputField_container}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Port
            <input
              type="number"
              placeholder="Type the port"
              {...register('port', {
                value: item.port,
                required: true,
              })}
              className={`${errors?.port ? style.error : ''}`}
            />
            { errors?.port && <div className={style.errorMessage}>Field is required</div> }
          </label>
        </div>
        <Button title={buttonText} type="submit" />
      </form>
    </div>
  );
};

export default FormComponent;
