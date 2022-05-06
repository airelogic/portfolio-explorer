import React, { Component } from 'react';
import PropTypes from 'prop-types';

export function asSVGArc(WrappedComponent: any) {
    
    return class GenericArcSVG extends Component<any> {

        calcX(deg: any) {
            return Math.cos(this.toRadians(deg));
        }

        calcY(deg: any) {
            return Math.sin(this.toRadians(deg));
        }

        toRadians(angle: any) {
            return angle * (Math.PI / 180);
        }

        render() {
            const { r, rot, deg, ...passThroughProps } = this.props;

            var unityCircleX = this.calcX(deg);
            var unityCircleY = this.calcY(deg);

            var x = unityCircleX * r;
            var y = unityCircleY * r * -1; // Invert for SVG y coords 
            var longSweep = deg > 180 ? 1 : 0;
            const path = "M " + r + " 0 A " + r + " " + r + " 0 " + longSweep + " 0 " + x + " " + y;
            const rotate = rot ? "rotate(" + rot + ",0,0)" : "";



            return (
                <WrappedComponent {...passThroughProps} d={path} transform={rotate} />
            );
        }
    }
}

asSVGArc.propTypes = {
    r: PropTypes.number.isRequired,
    rot: PropTypes.number.isRequired,
    deg: PropTypes.number.isRequired,
};

export default asSVGArc;