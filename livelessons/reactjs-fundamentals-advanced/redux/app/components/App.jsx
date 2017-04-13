import React from 'react'

import CountWidgetContainer from '../containers/CountWidgetContainer.jsx'

class App extends React.Component {
    render() {
        return(
            <div>
                <CountWidgetContainer store={this.props.store} />
            </div>
        )
    }
}

export default App