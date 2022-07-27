import React from 'react'
import vegaEmbed from "vega-embed";
import visual from '../visuals/yourspecification.vl.json'
export default function EmbeddedVisual() {
    return (
        <>
            <div id='vis'></div>
        </>
    )
}
vegaEmbed('#vis', visual);