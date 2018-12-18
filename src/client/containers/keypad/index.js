import React, { Component } from 'react';

class Keypad extends Component {
    render() {
        return (
            <div className="Keypad">
                <table>
                    <tbody>
                        <tr>
                            <th><button onClick="" value="C">7</button></th>
                            <th><button onClick="" value="C">8</button></th>
                            <th><button onClick="" value="C">9</button></th>
                            <th><button onClick="" value="C">/</button></th>
                        </tr>
                        <tr>
                            <th><button onClick="" value="C">4</button></th>
                            <th><button onClick="" value="C">5</button></th>
                            <th><button onClick="" value="C">6</button></th>
                            <th><button onClick="" value="C">x</button></th>
                        </tr>
                        <tr>
                            <th><button onClick="" value="C">1</button></th>
                            <th><button onClick="" value="C">2</button></th>
                            <th><button onClick="" value="C">3</button></th>
                            <th><button onClick="" value="C">-</button></th>
                        </tr>
                        <tr>
                            <th><button onClick="" value="C">0</button></th>
                            <th><button onClick="" value="C">.</button></th>
                            <th><button onClick="" value="C">=</button></th>
                            <th><button onClick="" value="C">+</button></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Keypad;
