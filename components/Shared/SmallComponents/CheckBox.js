import {Fragment} from 'react';

const CheckBox = ({on = true, name, disabled, loading, readOnly = false}) => {
  const id = Math.random ();
  return (
    <Fragment>
      <input
        type="checkbox"
        className={`checkbox ${readOnly ? 'readonly' : ''}`}
        name={name || 'oopp'}
        id={id}
        readOnly={readOnly}
        checked={on}
        disabled={disabled}
        // readOnly={readOnly}
      />
      <label
        htmlFor={id}
        className={`dummy_check checkbox_label pos-r ${on ? 'checked' : ''}`}
      />
    </Fragment>
  );
};

export default CheckBox;
