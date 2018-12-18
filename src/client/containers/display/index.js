import React, { Component } from 'react';
import "./display.css";
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return (
            <div className="Display">
                <table>
                    <tbody>
                        <tr>
                            <th><button id="display_button" >{this.props.expression}</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        calcReducer: state.calcReducer
    };
};

export default connect(mapStateToProps)(Display);
