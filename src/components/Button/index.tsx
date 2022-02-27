type ButtonProps = {
    content: string;
    onClick?: () => void;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
};

import "./styles.css";

function Button({
    content,
    onClick,
    primary,
    secondary,
    success,
}: ButtonProps) {
    return (
        <>
            {primary && (
                <button className="primary-button" onClick={onClick}>
                    <span className="primary-button-text">{content}</span>
                </button>
            )}
            {secondary && (
                <button className="secondary-button" onClick={onClick}>
                    <span className="secondary-button-text">{content}</span>
                </button>
            )}
            {success && (
                <button className="success-button" onClick={onClick}>
                    <span className="success-button-text">{content}</span>
                </button>
            )}
        </>
    );
}

export default Button;
