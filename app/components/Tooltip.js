import React from "react";
import PropTypes from "prop-types";
// import withHover from "./withHover";
import Hover from "./Hover";
import useHover from "../hooks/useHover";

const styles = {
    container: {
        position: 'relative',
        display: 'flex'
    },
    tooltip: {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '160px',
        bottom: '100%',
        left: '50%',
        marginLeft: '-80px',
        borderRadius: '3px',
        backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
        padding: '7px',
        marginBottom: '5px',
        color: '#fff',
        textAlign: 'center',
        fontSize: '14px',
    }
}

/*
function Tooltip({ text, children, hovering }) {
    return (
        <div style={styles.container}>
            {hovering === true && <div style={styles.tooltip}>{text}</div>}
            {children}
        </div>
    )
}*/

export default function Tooltip({ text, children }) {
    const [hovering, attrs] = useHover();
    return (

        <div style={styles.container} {...attrs}>
            {hovering === true && <div style={styles.tooltip}>{text}</div>}
            {children}
        </div>

    )
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
}

//export default withHover(Tooltip)