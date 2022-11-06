const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='group flex flex-col-reverse text-left py-3 '>
            <input className='form-input border p-2' {...otherProps} />
            {label && (
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''
                        } form-input-label pb-1`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;