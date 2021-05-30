export const Toast = ({toastMessage}) =>{
   
    return(
        <div className="toast-container">
            <div className="toast-message top-right">
                {toastMessage}
            </div>
        </div>
    )
}