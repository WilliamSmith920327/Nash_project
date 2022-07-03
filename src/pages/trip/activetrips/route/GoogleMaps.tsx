import { Row, Col, Card } from 'react-bootstrap';
import { Map, GoogleApiWrapper } from 'google-maps-react';

type MapContainerProps = {
    google: any;
};

const DarkStyledMap = ({ google }: MapContainerProps) => {
    const mapStyles = [
        {
            featureType: 'all',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }],
        },
        {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }],
        },
        {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }],
        },
        {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }, { lightness: 20 }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }],
        },
        {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#c4c4c4' }],
        },
        {
            featureType: 'administrative.neighborhood',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 20 }],
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 21 }, { visibility: 'on' }],
        },
        {
            featureType: 'poi.business',
            elementType: 'geometry',
            stylers: [{ visibility: 'on' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#e5c163' }, { lightness: '0' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ visibility: 'off' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 18 }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [{ color: '#575757' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#2c2c2c' }],
        },
        {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 16 }],
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#999999' }],
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 19 }],
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 17 }],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Map</h4>

                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={google}
                        zoom={14}
                        initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        styles={mapStyles}
                        zoomControlOptions={{
                            position: google.maps.ControlPosition.LEFT_TOP,
                        }}
                    ></Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const GoogleMaps = ({ google }: MapContainerProps) => {
    return (
        <>
                <Row>
                    <Col xl={12}>
                        <DarkStyledMap google={google} />
                    </Col>
                </Row>
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA',
})(GoogleMaps);
