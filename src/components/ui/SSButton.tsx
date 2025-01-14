import React from "react";

type ButtonType = "button" | "submit" | "reset";

type SSButtonProps = {
    type?: ButtonType;
    disabled?: boolean;
    text: string;
    onClick?: () => void;
    className?: string;
};

const SSButton: React.FC<SSButtonProps> = ({
    type,
    disabled = false,
    text,
    onClick,
    className = "",
}) => {
    return (
        <div className="mt-5">
            <button
                type={type}
                disabled={disabled}
                onClick={onClick}
                className={`w-full py-3 px-6 rounded-md font-semibold focus:outline-none transition ${disabled
                        ? "bg-gray-300 text-gray-800 cursor-not-allowed"
                        : "bg-green-500 text-white hover:bg-green-600"
                    } ${className}`}
                aria-disabled={disabled}
            >
                {disabled ? (
                    <span className="flex items-center justify-center">
                        Just a Moment...
                    </span>
                ) : (
                    text
                )}
            </button>
        </div>
    );
};

export default SSButton;
