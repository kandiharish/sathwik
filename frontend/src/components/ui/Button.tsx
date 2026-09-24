import type { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'donate' | 'outline' | 'ghost' | 'light' | 'ghost-light';

interface BaseProps {
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode };
type LinkProps = BaseProps & React.ComponentPropsWithoutRef<typeof Link> & { to: string; children: React.ReactNode };

export const buttonStyles = ({ variant = 'primary', size = 'md', className = '' }: BaseProps) => {
  const variants: Record<Variant, string> = {
    primary: 'btn-primary',
    secondary: 'btn-donate',
    donate: 'btn-donate',
    outline: 'btn-outline',
    ghost: 'text-primary hover:bg-primary-soft',
    light: 'btn-light',
    'ghost-light': 'btn-ghost-light',
  };

  const sizes = {
    sm: '!px-4 !py-2 !text-xs',
    md: '',
    lg: '!px-8 !py-4 !text-base',
  };

  return `btn ${variants[variant]} ${sizes[size]} ${className}`;
};

export const Button: React.FC<ButtonProps> = ({ variant, size, className, children, ...props }) => (
  <button className={buttonStyles({ variant, size, className })} {...props}>
    {children}
  </button>
);

export const ButtonLink: React.FC<LinkProps> = ({ variant, size, className, children, to, ...props }) => (
  <Link to={to} className={buttonStyles({ variant, size, className })} {...props}>
    {children}
  </Link>
);
