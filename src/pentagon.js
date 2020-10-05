import React from 'react';

const w_factor = Math.sqrt( (5 + Math.sqrt(5)) / 2 );
const s_factor = Math.sqrt( (5 - Math.sqrt(5)) / 2 );
const h_factor = w_factor / Math.sqrt(2 - (2 / Math.sqrt(5)));
const l_factor = h_factor - 1;
const r_factor = 1 / (1 + 2*l_factor);

const add_insets = false; // Adds the pentagons that squeeze into the diamonds. Still needs some work

const colors = [
    "#004d00",
    "#008000",
    "#00b300",
    "#00ff00",
    "#99ff99",
    "#ffffff",
];

export class Pentagon {
    constructor(...args) {
        if (args.length == 1 && args[0] instanceof Pentagon) {
            this.center = [args[0].center[0], args[0].center[1]];
            this.radius = args[0].radius;
            this.startAngle = args[0].startAngle;
            this.level = args[0].level;
        } else if (args.length == 5) {
            this.center = [args[0], args[1]];
            this.radius = args[2];
            this.startAngle = args[3];
            this.level = args[4];
        }
    }

    subdivide() {
        if (this.level >= 5) {
            return [];
        }

        const cx = this.center[0];
        const cy = this.center[1];
        const new_level = this.level + 1;

        console.log('W = ' + w_factor);
        console.log('S = ' + s_factor);
        console.log('H = ' + h_factor);
        console.log('L = ' + l_factor);
        console.log('R = ' + r_factor);

        let results = [];
        {
            const new_radius = this.radius * r_factor;
            let offsets = [];
            let angles = [];
            for (let i=0; i<5; i++) {
                const angle = this.startAngle + i * 2 * Math.PI / 5;
                offsets.push([2*l_factor*new_radius*Math.cos(angle),
                              2*l_factor*new_radius*Math.sin(angle)]);
                angles.push(angle);
            }
            // center
            results.push(new Pentagon(cx, cy, new_radius, this.startAngle+Math.PI, new_level));

            // five around
            results.push(new Pentagon(cx + offsets[0][0], cy + offsets[0][1], new_radius, angles[0], new_level));
            results.push(new Pentagon(cx + offsets[1][0], cy + offsets[1][1], new_radius, angles[1], new_level));
            results.push(new Pentagon(cx + offsets[2][0], cy + offsets[2][1], new_radius, angles[2], new_level));
            results.push(new Pentagon(cx + offsets[3][0], cy + offsets[3][1], new_radius, angles[3], new_level));
            results.push(new Pentagon(cx + offsets[4][0], cy + offsets[4][1], new_radius, angles[4], new_level));
        }
        if (add_insets) {
            let offsets = [];
            let angles = [];

            const factor1 = 0.767;
            const factor2 = 0.144;

            for (let i=0; i<5; i++) {
                const angle = this.startAngle + i * 2 * Math.PI / 5 + Math.PI;
                offsets.push([factor1*this.radius*Math.cos(angle),
                              factor1*this.radius*Math.sin(angle)]);
                angles.push(angle);
            }

            // five insets
            results.push(new Pentagon(cx + offsets[0][0], cy + offsets[0][1], this.radius * factor2, angles[0], new_level));
            results.push(new Pentagon(cx + offsets[1][0], cy + offsets[1][1], this.radius * factor2, angles[1], new_level));
            results.push(new Pentagon(cx + offsets[2][0], cy + offsets[2][1], this.radius * factor2, angles[2], new_level));
            results.push(new Pentagon(cx + offsets[3][0], cy + offsets[3][1], this.radius * factor2, angles[3], new_level));
            results.push(new Pentagon(cx + offsets[4][0], cy + offsets[4][1], this.radius * factor2, angles[4], new_level));
        }
        return results;
    }

    makeComponent(props) {
        const xfm = "translate(0,0)";
        let path_data = '';
        for (let i=0; i<5; i++) {
            if (i == 0) {
                path_data += 'M ';
            } else {
                path_data += 'L ';
            }
            const angle = 2 * i * Math.PI / 5 + this.startAngle;
            const c = Math.cos(angle);
            const s = Math.sin(angle);
            path_data += (this.center[0] + this.radius * c).toFixed(2) + ' ' + (this.center[1] + this.radius * s).toFixed(2) + ' ';
        }
        path_data += 'Z';
        const color = colors[this.level%colors.length];
        return <g transform={xfm}>
                   <path fill={props.fillStyle}
                         stroke={props.strokeColor}
                         stroke-width={props.strokeWidth}
                         d={path_data} />
            </g>
    }
}

export default Pentagon;
