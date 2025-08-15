declare module 'framer-motion' {
  import * as React from 'react';
  
  export interface MotionProps {
    children?: React.ReactNode;
    className?: string;
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    variants?: any;
    layout?: boolean;
    layoutId?: string;
    onAnimationComplete?: () => void;
    [key: string]: any;
  }

  export const motion: {
    div: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLDivElement>>;
    nav: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLElement>>;
    ul: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLUListElement>>;
    li: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLLIElement>>;
    button: React.ForwardRefExoticComponent<MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
    section: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLElement>>;
    h1: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
    h2: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
    h3: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
    p: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLParagraphElement>>;
    img: React.ForwardRefExoticComponent<MotionProps & React.ImgHTMLAttributes<HTMLImageElement>>;
    a: React.ForwardRefExoticComponent<MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>;
    form: React.ForwardRefExoticComponent<MotionProps & React.FormHTMLAttributes<HTMLFormElement>>;
    input: React.ForwardRefExoticComponent<MotionProps & React.InputHTMLAttributes<HTMLInputElement>>;
    textarea: React.ForwardRefExoticComponent<MotionProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>>;
    [key: string]: any;
  };

  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    initial?: boolean;
    exitBeforeEnter?: boolean;
    onExitComplete?: () => void;
    [key: string]: any;
  }>;

  export function useAnimation(): any;
  export function useInView(ref: React.RefObject<Element>, options?: any): boolean;
}
