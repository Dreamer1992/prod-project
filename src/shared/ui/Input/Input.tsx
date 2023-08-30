import { InputHTMLAttributes, memo } from 'react'

// libs
import { TMods, classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

interface IProps extends HTMLInputProps {
  className?: string
  value?: string
  isReadonly?: boolean
  onChange?: (value: string) => void
}

export const Input = memo((props: IProps) => {
  const {
    className,
    value,
    type = 'text',
    placeholder,
    isReadonly,
    onChange,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const mods: TMods = {
    [cls.readonly]: isReadonly,
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}`}</div>}

      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        readOnly={isReadonly}
        {...otherProps}
      />
    </div>
  )
})

Input.displayName = 'Input'
