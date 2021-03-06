/** @format */

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

class Map extends Component {
	static defaultProps = {
		center: {
			lat: 61.49911,
			lng: 23.78712,
		},
		zoom: 13,
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: `100%`, width: '100%', zIndex: '1' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					<MapMarker
						lat={61.503003793859484}
						lng={23.76016616821289}
						text='Lilli Rautavaara'
					/>
					<MapMarker lat={61.49915} lng={23.78715} text='My Marker' />
					<MapMarker lat={61.4992} lng={23.78722} text='My Marker' />
					<MapMarker lat={61.49931} lng={23.78512} text='My Marker' />
					<MapMarker lat={61.49511} lng={23.78412} text='My Marker' />
					<MapMarker lat={61.49111} lng={23.78412} text='My Marker' />
				</GoogleMapReact>
			</div>
		);
	}
}

export default Map;
