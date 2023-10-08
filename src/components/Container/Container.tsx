export const Container = ({
  children,
  className = "",
}: {
  children: any;
  className: string;
}) => {
  return (
    <div className={`container mx-[auto] pl-[140px] ${className}`}>
      {children}
    </div>
  );
};
