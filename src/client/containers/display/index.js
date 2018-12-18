import React, { Component } from 'react';
import "./display.css";

class Display extends Component {
    render() {
        return (
            <div className="Display">
                <table>
                    <tbody>
                        <tr>
                            <th><button id="display_button" ></button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Display;
