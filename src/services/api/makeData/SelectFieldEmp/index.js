import React from 'react'
import PropTypes from 'prop-types'

export default function SelectField(props) {
  const { options, placeHolder, onChange, name, disabled } = props

  const defaultValue = React.useMemo(() => {
    const found = options.find(o => !!o.selected)
    return found ? found.id : 0
  }, [options])

  const list = React.useMemo(() => {
    if (placeHolder) return [{ id: 0, name: placeHolder }, ...options]
    return options
  }, [options, placeHolder])

  const handleChange = React.useCallback(
    e => {
      const value = e && e.target && e.target.value
      if (onChange) onChange(value, name)
    },
    [onChange, name]
  )

  return (
    <>
      <select name={name} defaultValue={defaultValue} onChange={handleChange} disabled={!!disabled}>
        {list.map(option => {
          const { disabled } = option
          return (
            <option key={`option-${option.id}`} disabled={!!disabled} value={option.id}>
              {option.name}
            </option>
          )
        })}
      </select>
    </>
  )
}

SelectField.defaultProps = {
  placeHolder: 'Opções...',
  options: [],
  onChange: () => {},
  name: 'noNamed',
  disabled: false
}

SelectField.propTypes = {
  placeHolder: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool
}