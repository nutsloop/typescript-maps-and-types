/**
 * Represents a city with its information.
 */
export type City = Map<string, CityInfo>;
/**
 * Represents information about a city.
 */
export type CityInfo = Map<'name' | 'gps-coordinates' | 'country', string> &
  Map<'population', number>;

/**
 * A map of cities and their information.
 */
export const city: City = new Map();

/*
 * pre-populated data.
 * Beijing is the only city that has a different key than `name` it has `actual`.
 */

// rome
city.set( 'Rome', new Map() );
city.get( 'Rome' ).set( 'name', 'Rome' );
city.get( 'Rome' ).set( 'gps-coordinates', '41.9028° N, 12.4964° E' );
city.get( 'Rome' ).set( 'country', 'Italy' );
city.get( 'Rome' ).set( 'population', 2872800 );

// london
city.set( 'London', new Map() );
city.get( 'London' ).set( 'name', 'London' );
city.get( 'London' ).set( 'gps-coordinates', '51.5074° N, 0.1278° W' );
city.get( 'London' ).set( 'country', 'United Kingdom' );
city.get( 'London' ).set( 'population', 8787892 );

// new york
city.set( 'New York', new Map() );
city.get( 'New York' ).set( 'name', 'New York' );
city.get( 'New York' ).set( 'gps-coordinates', '40.7128° N, 74.0060° W' );
city.get( 'New York' ).set( 'country', 'United States' );
city.get( 'New York' ).set( 'population', 8398748 );

// tokyo
city.set( 'Tokyo', new Map() );
city.get( 'Tokyo' ).set( 'name', 'Tokyo' );
city.get( 'Tokyo' ).set( 'gps-coordinates', '35.6762° N, 139.6503° E' );
city.get( 'Tokyo' ).set( 'country', 'Japan' );
city.get( 'Tokyo' ).set( 'population', 9273000 );

// moscow
city.set( 'Moscow', new Map() );
city.get( 'Moscow' ).set( 'name', 'Moscow' );
city.get( 'Moscow' ).set( 'gps-coordinates', '55.7558° N, 37.6173° E' );
city.get( 'Moscow' ).set( 'country', 'Russia' );
city.get( 'Moscow' ).set( 'population', 12692466 );

// sydney
city.set( 'Sydney', new Map() );
city.get( 'Sydney' ).set( 'name', 'Sydney' );
city.get( 'Sydney' ).set( 'gps-coordinates', '33.8688° S, 151.2093° E' );
city.get( 'Sydney' ).set( 'country', 'Australia' );
city.get( 'Sydney' ).set( 'population', 5312163 );

// cairo
city.set( 'Cairo', new Map() );
city.get( 'Cairo' ).set( 'name', 'Cairo' );
city.get( 'Cairo' ).set( 'gps-coordinates', '30.0444° N, 31.2357° E' );
city.get( 'Cairo' ).set( 'country', 'Egypt' );
city.get( 'Cairo' ).set( 'population', 9278441 );

// beijing
city.set( 'Beijing', new Map() );
city.get( 'Beijing' ).set( 'name', 'Beijing' );
city.get( 'Beijing' ).set( 'gps-coordinates', '39.9042° N, 116.4074° E' );
city.get( 'Beijing' ).set( 'country', 'China' );
city.get( 'Beijing' ).set( 'population', 21540000 );

// delhi
city.set( 'Delhi', new Map() );
city.get( 'Delhi' ).set( 'name', 'Delhi' );
city.get( 'Delhi' ).set( 'gps-coordinates', '28.7041° N, 77.1025° E' );
city.get( 'Delhi' ).set( 'country', 'India' );
city.get( 'Delhi' ).set( 'population', 16787941 );

// cape town
city.set( 'Cape Town', new Map() );
city.get( 'Cape Town' ).set( 'name', 'Cape Town' );
city.get( 'Cape Town' ).set( 'gps-coordinates', '33.9249° S, 18.4241° E' );
city.get( 'Cape Town' ).set( 'country', 'South Africa' );
city.get( 'Cape Town' ).set( 'population', 4336880 );

/**
 * Retrieves information about a specific city.
 */
export function get_city( cityName: string ): CityInfo {
  return city.get( cityName );
}

/**
 * Sets the information for a given city.
 *
 */
export function set_city( cityName: string, cityInfo: CityInfo ): void {
  city.set( cityName, cityInfo );
}

/**
 * Iterates over the city object and logs each cityName and cityInfo.
 */
export function iterate(): void {
  for ( const [ cityName, cityInfo ] of city ) {
    console.log( cityName, cityInfo );
  }
}
