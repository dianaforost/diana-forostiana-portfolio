export const Container = ({
  children,
  className = "",
}: {
  children: any;
  className: string;
}) => {
  return <div className={`container mx-[auto] ${className}`}>{children}</div>;
};
