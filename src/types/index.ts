export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface CardProps extends ComponentProps {
  variant?: 'default' | 'glass' | 'ceo' | 'stats';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface CEOData {
  name: string;
  title: string;
  photo: string;
  photoAlt: string;
  headline: string;
  content: string[];
  ctaText?: string;
}

export interface PartnerData {
  id: string;
  type: 'technical' | 'financial';
  name: string;
  logo: string;
  description: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  cta: {
    text: string;
    action: string;
  };
}

export interface SlideData {
  id: string;
  type: 'branding' | 'opportunity';
  content: {
    badge?: string;
    headline: string;
    subtitle?: string;
    ctas?: Array<{
      text: string;
      variant: ButtonProps['variant'];
      icon?: string;
    }>;
    stats?: Array<{
      icon: string;
      number: string;
      label: string;
    }>;
  };
} 