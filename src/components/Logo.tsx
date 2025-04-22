
const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-bold text-xl text-primary">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <path d="M19 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 5L12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 22L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <span>ВидеоСтраж</span>
    </div>
  );
};

export default Logo;
