import React from "react"
import Option from './Option'
import Total from './Total'

/*const summary = Object.keys(this.state.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = this.state.selected[feature];

*/

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

function MainSummary(props) {


    const summary = Object.keys(props.selection).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selection[feature];


    return (
        <div>
        <h2>Your cart</h2>
 
        <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>


            
            <Total />

        </div>
    )

})

return (
  <div>
    {summary}
  </div>
)

}

export default MainSummary