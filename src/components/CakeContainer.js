import React from 'react'
import { connect } from 'react-redux'
import {buyCakes, addCakes} from '../redux'
function CakeContainer(props) {
    return (
        <div>
            <h1>Number of Cakes - {props.numberofCakes}</h1>
            <button onClick={props.buyCakes}>Buy Cake</button><br/>
            <button onClick={props.addCakes}>Add Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberofCakes : state.numberofCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCakes : () => dispatch(buyCakes()),
        addCakes : () => dispatch(addCakes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)

