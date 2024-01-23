interface MainButtonProps {
  children: React.ReactNode;
  variant: 'green' | 'white';
}
const MainButton: React.FC<MainButtonProps> = ({ children, variant }) => {
  return <div className={`cursor-pointer border-2 py-4 px-4 rounded-3xl text-sm font-bold w-fit
  ${variant === 'green' ? 'border-green-700 text-green-700 bg-white hover:bg-green-700 hover:text-white' : 'border-white bg-transparent hover:bg-white hover:text-green-800 text-white ml-8'}
  `}>
    {children}
    </div>
};

export default MainButton;
