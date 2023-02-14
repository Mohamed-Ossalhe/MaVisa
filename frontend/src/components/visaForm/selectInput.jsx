const SelectInput = ({options, name, id, onChange, value}) => {
    return (
    <select name={name} id={id} className="w-full rounded border-gray-400" value={""} onChange={onChange}>
        {
            options.map(i => {
                return <option key={i.value} value={i.value}>{i.label}</option>
            })
        }
    </select>
    )
}

export default SelectInput