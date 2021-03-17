import React from "react";

import AddWidget from "./add_widget";
import WithSpinnerHOC from "../../base/with_spinner_hoc/with_spinner";


const WrappedComponent = WithSpinnerHOC(AddWidget)


class AddWidgetContainer extends React.Component{
    render() {
        return (
            <WrappedComponent {...this.props}/>
        );
    }
}


export default AddWidgetContainer;
