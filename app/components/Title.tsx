interface ITitleProps {
    className?: string;
    text: string;
}

function Title({ text, className }: ITitleProps) {
    return (
        <h2
            className={`text-title text-[45px] font-semibold capitalize font-montserrat ${className}`}
        >
            {text}
        </h2>
    );
}

export default Title;
