import { Hotel } from "../type/Hotel";

export const HOTELDATA: Hotel[] = [
    {
        name: "Iberostar Grand Salome",
        location: "Costa Adeje, Tenerife",
        rating: 5,
        roomSize: {
            adults: 2,
            children: 2,
            infants: 1
        },
        date: "3rd July 2019",
        length: 7,
        departing: "East Midlands",
        price: 1136.50,
        overview: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Oceon. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
        imageURL: "./assets/hotel-image-1.png"
    },
    {
        name: "Aguamarina Golf Hotel",
        location: "Costa Adeje, Tenerife",
        rating: 4,
        roomSize: {
            adults: 2,
            children: 1
        },
        date: "27th May 2019",
        length: 7,
        departing: "Liverpool",
        price: 696.80,
        overview: "The Aguamarina Golf Hotel has an exceptional location in the south of Tenerife, overlooking the Atlantic Oceon. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
        imageURL: "./assets/hotel-image-2.png"
    },
    {
        name: "Las Piramides Resort",
        location: "Costa Adeje, Tenerife",
        rating: 3,
        roomSize: {
            adults: 2,
            children: 2
        },
        date: "3rd July 2019",
        length: 7,
        departing: "Manchester",
        price: 499.99,
        overview: "The Las Piramides Resort has an exceptional location in the south of Tenerife, overlooking the Atlantic Oceon. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
        imageURL: "./assets/hotel-image-3.png"
    }
]