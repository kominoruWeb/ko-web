import React, { useState, FunctionComponent, useContext, ReactNode,  createContext, ReactElement } from 'react'
import { FilteredKeys } from '../utils/filtered-keys'
import { isNullish } from '../utils/is-nullish'
import { BaseProps } from '../types/base-props';


export const createForm = <T, >() => {
  

  type FormProps = {
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>
    children?: ReactNode
  }

  function useForm(defaultValue: T): [T, FormProps]{
    const [value, setValue] = useState(defaultValue)
    return [value, {value, setValue}]
  }
  type SetValue = <K extends keyof T>(name: K, value: T[K]) => void
  
  const FormContext = createContext<[T, SetValue] | null>(null)


  const Form: FunctionComponent<FormProps> = ({children, value, setValue}) => {
    const set: SetValue = (name, newValue) => {
      setValue(value => ({...value, [name]: newValue}))
    }
  return <FormContext.Provider value={[value, set]}>
      {children}
    </FormContext.Provider>
  }

  type TextProps = {
    className?: string,
    name: keyof T,
    placeholder?: string
    children?: ReactNode
  }
  
  const Text: FunctionComponent<TextProps> = ({children, className, name, placeholder = ''}) => {
    const [values, setValue] = useContext(FormContext) || []
    if(!values || !setValue) return null
    return <input type="text" value={isNullish(values[name]) ? '' : values[name] as any} onChange={e => setValue(name, e.currentTarget.value as any)} placeholder={placeholder} />
  }

  type TextareaProps = {
    className?: string,
    name: keyof T,
    placeholder?: string
    children?: ReactNode
  }
  const Textarea: FunctionComponent<TextareaProps> = ({children, className, name, placeholder = ''}) => {
    const [values, setValue] = useContext(FormContext) || []
    if(!values || !setValue) return null
    return <textarea value={isNullish(values[name]) ? '' : values[name] as any} onChange={e => setValue(name, e.target.value as any)} placeholder={placeholder} />
  }

  type CheckboxProps = {
    className?: string,
    name: keyof T,
    children?: ReactNode
  }
  const Checkbox: FunctionComponent<CheckboxProps> = ({children, className, name}) => {
    const [values, setValue] = useContext(FormContext) || []
    if(!values || !setValue) return null
    return <input type="checkbox" checked={values[name] as any} onChange={e => setValue(name, e.target.checked as any)} />
  }

  function MultipleCheckbox<
    K extends FilteredKeys<T, any[]>,
    V extends T[K] & any[]
  >({name, value}: {
    name: K,
    value: V[number]
  }): ReactElement | null {
    const [values, setValue] = useContext(FormContext) || []
    if(!values || !setValue) return null
    const valueList = values[name] as V[]

    return <input type="checkbox" checked={valueList.includes(value)} onChange={e => {
      if(e.currentTarget.checked){
        if(!valueList.includes(value)){
          setValue(name, [...valueList, value] as any)
        }
      } else {
        setValue(name, valueList.filter(v => v !== value) as any)
      }
    }} />
  }

  function Radio<
    K extends keyof T,
    V extends T[K]
  >({name, value}: {
    name: K,
    value: V
  }): ReactElement | null {
    const [values, setValue] = useContext(FormContext) || []
    if(!values || !setValue) return null
    const currentValue = values[name]
    
    return <input type="radio" checked={currentValue === value} onChange={e => {
      if(e.currentTarget.checked){
        setValue(name, value)
      }
    }} />
  }

  function Select<K extends keyof T>({children, options, name, nullable = false}: {
    options: Map<T[K], string>,
    name: K,
    children?: ReactNode,
    nullable?: boolean
  }): ReactElement | null {
    const [values, setValue] = useContext(FormContext) || []
    if(!values || !setValue) return null

    return <select value={Array.from(options.keys()).indexOf(values[name])} onChange={e => {
      setValue(name, Array.from(options.keys())[Number(e.currentTarget.value)])
    }}>
      {
        Array.from(options.entries()).map(([value, label], i) => {
        return <option key={i} value={i}>{label}</option>
        })
      }
    </select>
  }

  return {
    useForm,
    Form,
    Text,
    Textarea,
    Checkbox,
    MultipleCheckbox,
    Select,
    Radio
  }
}