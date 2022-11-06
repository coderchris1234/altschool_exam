

const RegularButton = ({ children, buttonType, ...otherProps }) => {
    return (
        <button
            className="w-full bg-slate-800 hover:bg-black text-white text-center p-3"
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default RegularButton;