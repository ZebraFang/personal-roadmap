import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "btn inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "btn-primary bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500",
    secondary:
      "btn-secondary bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
    success:
      "btn-success bg-success-600 text-white hover:bg-success-700 focus-visible:ring-success-500",
    danger:
      "btn-danger bg-danger-600 text-white hover:bg-danger-700 focus-visible:ring-danger-500",
    ghost:
      "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs rounded-md",
    md: "h-10 px-4 py-2 text-sm rounded-md",
    lg: "h-12 px-6 py-3 text-base rounded-lg",
  };

  const buttonClasses = clsx(
    baseClasses,
    variants[variant],
    sizes[size],
    {
      "cursor-not-allowed": disabled || loading,
      "opacity-50": disabled,
    },
    className
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
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
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
