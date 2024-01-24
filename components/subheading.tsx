interface SubheadingProps {
  children: React.ReactNode;
}

const Subheading: React.FC<SubheadingProps> = ({ children }) => {
  return <div className="text-green-700 font-semibold uppercase">{children}</div>;
};

export default Subheading;
