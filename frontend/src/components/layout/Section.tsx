

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'muted' | 'primary' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'default' 
}) => {
  
  const bgColors = {
    default: 'bg-background text-text-main',
    muted: 'bg-gray-50 text-text-main',
    primary: 'bg-primary text-white',
    dark: 'bg-gray-900 text-white'
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${bgColors[background]} ${className}`}
    >
      {children}
    </section>
  );
};
