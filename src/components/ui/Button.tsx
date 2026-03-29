import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary: `
    bg-slate-900 text-white border border-slate-900
    hover:bg-slate-700 hover:border-slate-700
    active:scale-[0.97]
    disabled:bg-slate-300 disabled:border-slate-300 disabled:cursor-not-allowed
  `,
  secondary: `
    bg-white text-slate-900 border border-slate-300
    hover:bg-slate-50 hover:border-slate-400
    active:scale-[0.97]
    disabled:text-slate-400 disabled:cursor-not-allowed
  `,
  ghost: `
    bg-transparent text-slate-700 border border-transparent
    hover:bg-slate-100 hover:text-slate-900
    active:scale-[0.97]
    disabled:text-slate-400 disabled:cursor-not-allowed
  `,
  danger: `
    bg-red-600 text-white border border-red-600
    hover:bg-red-700 hover:border-red-700
    active:scale-[0.97]
    disabled:bg-red-300 disabled:border-red-300 disabled:cursor-not-allowed
  `,
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
  md: "px-5 py-2 text-sm rounded-lg gap-2",
  lg: "px-6 py-2.5 text-base rounded-lg gap-2.5",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center
        font-semibold tracking-wide
        border transition-all duration-200
        select-none outline-none
        focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
