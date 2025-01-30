import React, {lazy, Suspense} from "react";
const EmailAppComp = lazy(() => import("EmailApp/EmailApp"));
import '../style.css'

const EmailApp = () => {
    return (
        <div className="email-container">
            <Suspense fallback={<p>Loading...</p>}>
            <EmailAppComp />
            </Suspense>
        </div>
    )
}

export default EmailApp;
