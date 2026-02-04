const Input = ({labelName = "loading...", labelText = "loading...", required=false, ...attrs}) => {
    return (
        <label htmlFor={labelName} className="bg-white shadow p-4 flex flex-col justify-center gap-4">
            <span>{labelText}{(required? <sup className="text-red-700">*</sup> : "")}</span>
            <input type="text" id={labelName} className="h-10 outline-0 border-b border-b-fuchsia-700" required={required} {...attrs} />
        </label>
    )
}
export default Input