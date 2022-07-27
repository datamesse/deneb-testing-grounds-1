import React from 'react'
import vegaEmbed from "vega-embed";
import visual from '../visuals/yourspecification.vl.json'
export default function EmbeddedVisual() {
    return (
        <>
            <h1>This is a test</h1>
            <div id='vis' class='vega-lite-visual-1'></div>
        </>
    )
}
vegaEmbed('#vis', visual);