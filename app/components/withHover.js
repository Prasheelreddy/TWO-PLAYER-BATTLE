import React from "react";

export default function withHover(Component) {

    return class WithHover extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                hovering: false,
            }

            this.mouseOut = this.mouseOut.bind(this)
            this.mouseOver = this.mouseOver.bind(this)
        }

        mouseOver() {
            this.setState({
                hovering: true
            })
        }

        mouseOut() {
            this.setState({
                hovering: false
            })
        }

        render() {
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component {...this.props} hovering={this.state.hovering}></Component>
                </div>
            )
        }

    }
}