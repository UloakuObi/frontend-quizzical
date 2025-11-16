export default function ErrorPopup({src, className}) {
    return (
        <div className={`error-popup`}>
            <img src={src} alt="error message icon" />
            <p className={`fs-5 semi-bold-text ${className}`}>Please select an answer!</p>
        </div>
    )
}