namespace material.managment.cap.app.db;

using { cuid, managed, Country } from '@sap/cds/common';

entity Products : cuid, managed {
    name            : String(100);
    category        : String(50);
    brand           : String(50);
    price           : Decimal(9,2);
    stock           : Integer;
    rating          : Decimal(3,1);
    description     : String(255);
    details         : Association to one ProductDetails;
}

entity ProductDetails : cuid, managed {
    color           : String(30);
    weight          : String(20);
    dimensions      : String(50);
    material        : String(50);
    batteryLife     : String(30);
    connectivity    : String(100); // Comma-separated list (e.g., "Bluetooth, Wi-Fi, GPS")
    warranty        : String(111);
    screenSize      : String(20); // Optional field for TVs
    resolution      : String(30); // Optional field for TVs
    processor       : String(50); // Optional field for computers
    ram             : String(20); // Optional field for computers
    storage         : String(50); // Optional field for computers
    graphicsCard    : String(50); // Optional field for computers
}

entity Users {
    key userId: String(111);
    name: String(111);
    lastName: String(111);
    birthDate: Date;
    phone: Integer;
    email: String(1111);
    country: String(111);
}