const Select = ({ defaultValue, options, value, onChange }) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)}>
            <option value="" disabled>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}

        </select>
    );
};

export default Select;