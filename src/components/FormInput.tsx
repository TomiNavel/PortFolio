import { Input } from "@material-tailwind/react";
import type { FormInputProps } from "@/types/types";

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <Input
        size="lg"
        variant="static"
        label={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        containerProps={{ className: "!min-w-full" }}
        className="!text-foreground !border-b border-border placeholder:text-muted-foreground focus:!border-accent"
        labelProps={{
          className: "!text-muted-foreground peer-focus:!text-accent",
        }}
        {...({} as any)}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
