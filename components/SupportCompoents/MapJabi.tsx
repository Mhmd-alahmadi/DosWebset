'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function MapJabi() {
	const mapRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		const initializeMap = async () => {
			const loader = new Loader({
				apiKey: "AIzaSyDY3AfLHx-Y9iNz3NEqm6PGHqH6QoK-5dg" as string,
				version: 'quartely',
			});

			const { Map } = await loader.importLibrary('maps');

			const locationInMap = {
				lat: 15.323168173172535, 
				lng: 44.22765057497688,
			};
            const locationInMap2 = {
				lat: 15.322029779315393,
				lng: 44.21730840317641,
			};
			// MARKER
			const { Marker } = (await loader.importLibrary(
				'marker'
			)) as google.maps.MarkerLibrary;

			const options: google.maps.MapOptions = {
				center: locationInMap,
				zoom: 15,
				mapId: 'NEXT_MAPS_TUTS',
			};

			const map = new Map(mapRef.current as HTMLDivElement, options);
            const image ="/prsanilImg/co.png";
            const marker2 = new  google.maps.Marker({
				map: map,
				position: locationInMap,
                icon: "/svg/ic_logoMap.svg",
			});

			// add the marker in the map
			const marker = new  google.maps.Marker({
				map: map,
				position: locationInMap2,
                icon: "/svg/ic_logoMap.svg",
			});
		};

		initializeMap();
	}, []);

	return(
        <div className='container mx-auto ' >
            <div className="h-[600px] rounded-3xl" ref={mapRef} />
        </div>
    );
}