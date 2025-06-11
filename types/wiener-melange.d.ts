// TypeScript declarations for Wiener Melange custom web components
declare namespace JSX {
  interface IntrinsicElements {
    'wm-section': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      highlight?: string;
      contentsize?: string;
    };
    'wm-input': React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    'wm-select': React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
      size?: string;
    };
    'wm-button': React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
      kind?: string;
    };
    'wm-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      iconid?: string;
      width?: number;
    };
    'wm-notification': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      type?: 'info' | 'error' | 'warning' | 'success';
    };
    'wm-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'wm-accordion-heading': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'wm-accordion-content': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
