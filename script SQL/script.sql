-- Create table for users
CREATE TABLE User (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    adress VARCHAR(255) NOT NULL,
    dateOfBirth DATE NOT NULL
);

-- Create table for agencies
CREATE TABLE Agency (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL
);

-- Create table for vehicles
CREATE TABLE Vehicle (
    id INT PRIMARY KEY,
    model VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    agencyId INTNOT NULL,
    FOREIGN KEY (agencyId) REFERENCES Agency(id)
);

-- Create table for reservations
CREATE TABLE Reservation (
    id INT PRIMARY KEY,
    date DATE NOT NULL,
    userId INT NOT NULL,
    vehicleId INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (vehicleId) REFERENCES Vehicle(id)
);

-- Create table for transactions
CREATE TABLE Transaction (
    id INT PRIMARY KEY,
    amount DOUBLE PRECISION NOT NULL,
    date DATE NOT NULL,
    reservationId INT NOT NULL,
    FOREIGN KEY (reservationId) REFERENCES Reservation(id)
);
