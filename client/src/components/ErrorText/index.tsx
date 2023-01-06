import type { Props } from './types';

const ErrorText = ({ children }: Props) => {
  return <span className="text-xs text-[red]">{children}</span>;
};

export default ErrorText;
