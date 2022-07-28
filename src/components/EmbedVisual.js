import React from 'react'
import vegaEmbed from "vega-embed";
import visual from '../visuals/yourspecification.vl.json'
export default function EmbedVisual() {
    return (
        <div>
            <div id='vis' class='vega-lite-visual-1'></div>
        </div>
    )
}
vegaEmbed('#vis', visual);