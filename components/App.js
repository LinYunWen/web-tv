import React from 'react';
import Category from "./Category";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Category type="news" />
                {/* <Category type="online" /> */}
            </div>
        )
    }
}

export default App;
