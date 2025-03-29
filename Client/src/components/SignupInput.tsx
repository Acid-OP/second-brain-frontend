// Correct way to define SignupInput
interface SignupInputProps {
  reference: React.RefObject<HTMLInputElement>;
  placeholder: string;
  className?: string;
  type?: string; // Define type as optional prop
}

export function SignupInput({ reference, placeholder, className, type = "text" }: SignupInputProps) {
  return (
    <input
      ref={reference}
      type={type} // Use the prop here
      placeholder={placeholder}
      className={className}
    />
  );
}