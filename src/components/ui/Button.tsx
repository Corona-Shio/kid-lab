"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const sizeClasses = {
  sm: "py-2 px-4 text-base rounded-xl min-h-[40px]",
  md: "py-3 px-6 text-xl rounded-2xl min-h-[52px]",
  lg: "py-4 px-8 text-2xl rounded-2xl min-h-[64px]",
};

const variantStyles = {
  primary: {
    base: "relative overflow-hidden font-bold text-white shadow-lg",
    gradient: "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-500",
    shadow: "shadow-pink-300/50",
    hoverShadow: "hover:shadow-pink-400/60",
    disabled: "from-gray-300 via-gray-300 to-gray-300 shadow-gray-200/50",
  },
  secondary: {
    base: "font-bold border-3 border-current bg-white shadow-md",
    text: "text-purple-600",
    hover: "hover:bg-purple-50",
    disabled: "border-gray-300 text-gray-400",
  },
  ghost: {
    base: "font-semibold bg-transparent underline-offset-4",
    text: "text-purple-500",
    hover: "hover:underline hover:text-purple-700",
    disabled: "text-gray-400",
  },
  danger: {
    base: "relative overflow-hidden font-bold text-white shadow-lg",
    gradient: "bg-gradient-to-br from-red-400 to-rose-500",
    shadow: "shadow-red-300/50",
    hoverShadow: "hover:shadow-red-400/60",
    disabled: "from-gray-300 to-gray-300 shadow-none",
  },
};

export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const isPrimary = variant === "primary" || variant === "danger";
  const style = variantStyles[variant];

  if (isPrimary) {
    const s = style as typeof variantStyles.primary;
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        whileHover={disabled ? {} : { scale: 1.06, y: -2 }}
        whileTap={disabled ? {} : { scale: 0.94 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className={[
          s.base,
          disabled ? s.disabled : `${s.gradient} ${s.shadow} ${s.hoverShadow} hover:shadow-xl`,
          sizeClasses[size],
          "cursor-pointer select-none transition-shadow duration-200",
          disabled ? "cursor-not-allowed opacity-60" : "",
          className,
        ].join(" ")}
      >
        {!disabled && (
          <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-inherit" />
        )}
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </motion.button>
    );
  }

  if (variant === "secondary") {
    const s = style as typeof variantStyles.secondary;
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        whileHover={disabled ? {} : { scale: 1.04, y: -1 }}
        whileTap={disabled ? {} : { scale: 0.96 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        className={[
          s.base,
          disabled ? s.disabled : `${s.text} border-purple-500 ${s.hover}`,
          sizeClasses[size],
          "cursor-pointer select-none transition-colors duration-200 border-2",
          disabled ? "cursor-not-allowed opacity-60" : "",
          className,
        ].join(" ")}
      >
        <span className="flex items-center justify-center gap-2">{children}</span>
      </motion.button>
    );
  }

  // ghost
  const s = style as typeof variantStyles.ghost;
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
      className={[
        s.base,
        disabled ? s.disabled : `${s.text} ${s.hover}`,
        sizeClasses[size],
        "cursor-pointer select-none transition-all duration-200",
        disabled ? "cursor-not-allowed opacity-60" : "",
        className,
      ].join(" ")}
    >
      <span className="flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
}
