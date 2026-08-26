import type { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

type ButtonProps = BaseProps & HTMLMotionProps<"button"> & ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode };
type LinkProps = BaseProps & React.ComponentPropsWithoutRef<typeof Link> & { to: string; children: React.ReactNode };

export const buttonStyles = ({ variant = 'primary', size = 'md', className = '' }: BaseProps) => {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#043d2e] focus:ring-primary shadow-sm",
    secondary: "bg-secondary text-white hover:bg-[#a1360a] focus:ring-secondary shadow-sm",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
};

export const Button: React.FC<ButtonProps> = ({ variant, size, className, children, ...props }) => {
  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={buttonStyles({ variant, size, className })} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const ButtonLink: React.FC<LinkProps> = ({ variant, size, className, children, to, ...props }) => {
  return (
    <Link to={to} className={buttonStyles({ variant, size, className })} {...props}>
      {children}
    </Link>
  );
};
