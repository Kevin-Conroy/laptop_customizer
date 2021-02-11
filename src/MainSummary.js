import React from "react"
import Option from './Option'
import Total from './Total'

function MainSummary (props) {
<h2>Your cart</h2>
{props.summary}
<Total total={props.total} />
}


export default MainSummary