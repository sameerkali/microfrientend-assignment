import React, {lazy, Suspense} from "react";
const EmailApp = lazy(() => import("EmailApp/EmailApp"));

const ProductList = () => {
    return (
        <div className="todo-list-container">
            <Suspense fallback={<p>Loading...</p>}>
            <EmailApp />
            </Suspense>
        </div>
    )
}

export default ProductList;
