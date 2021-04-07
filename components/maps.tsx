import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import LISBON_CENTER from '../const/lb_center';

const Wrapper = styled.main`
  width: 100%;
  height: 50vh;
`;

const SimpleMap = () => {
  return (
    <Wrapper>
      <GoogleMapReact
        defaultZoom={11}
        defaultCenter={LISBON_CENTER}
        bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
      >
      </GoogleMapReact>
    </Wrapper>
  );
}

export default SimpleMap;