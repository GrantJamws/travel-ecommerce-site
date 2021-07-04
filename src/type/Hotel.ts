export interface Hotel {
    name: string;
    location: string;
    rating: number;
    roomSize: {
        adults?: number;
        children?: number;
        infants?: number;
    };
    date: string;
    length: number;
    departing: string;
    price: number;
    overview: string;
    imageURL: string;
}