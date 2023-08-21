import { InputHTMLAttributes, memo } from 'react'

// libs
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>

interface IProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

const Input = (props: IProps) => {
  const {
    className,
    value,
    type = 'text',
    placeholder,
    onChange,
    ...otherProps
  } = props
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}`}</div>}

      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          {...otherProps}
        />
      </div>
    </div>
  )
}

const InputMemoized = memo(Input)

export default InputMemoized
