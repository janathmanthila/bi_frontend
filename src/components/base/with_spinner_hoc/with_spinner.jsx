import React from 'react';

import LoadingOverlay from 'react-loading-overlay';

const WithSpinnerHOC = WrappedComponent => {

    return  ({isLoading, ...props}) => (
        <LoadingOverlay
            active={isLoading}
            spinner
            text='Loading content...'
        >
            <WrappedComponent  {...props}/>
        </LoadingOverlay>
    )
}

export default WithSpinnerHOC