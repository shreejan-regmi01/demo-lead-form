export default function SelectOption({ label, selected, ...rest }) {
  return (
    <div
      className={`rounded-full py-2.5 text-center my-5 border border-solid ${
        selected ? 'select-option-active' : 'border-gray-400/40'
      } cursor-pointer`}
      {...rest}
    >
      {label}
    </div>
  );
}
