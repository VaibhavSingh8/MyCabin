function Checkbox({
  checked,
  onChange,
  disabled = false,
  id,
  className,
  children,
}) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="h-6 w-6 transform-origin-0 accent-indigo-600 disabled:accent-indigo-600 "
      />
      <label
        htmlFor={!disabled ? id : ""}
        className="flex flex-1 items-center gap-2"
      >
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
