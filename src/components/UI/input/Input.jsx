import clases from "./Input.module.css"

const Input = (props) => {
    return (
        <input {...props} className={clases.field} />

    );
};

export default Input;