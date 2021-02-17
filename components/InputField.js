import "twin.macro";

const InputField = (props) => {
  return (
    <div>
      <label htmlFor={props.name} tw="block font-bold py-2">
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        tw="border border-gray-300 px-4 py-2 w-full rounded"
        onChange={props.onChange}
      />
      {props.info && (
        <small tw="text-xs text-gray-400 py-2">{props.info}</small>
      )}
    </div>
  );
};

export default InputField;
