-- Create table for users
CREATE TABLE User (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
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
    agencyId INT,
    FOREIGN KEY (agencyId) REFERENCES Agency(id)
);

-- Create table for reservations
CREATE TABLE Reservation (
    id INT PRIMARY KEY,
    date DATE NOT NULL,
    userId INT,
    vehicleId INT,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (vehicleId) REFERENCES Vehicle(id)
);

-- Create table for transactions
CREATE TABLE Transaction (
    id INT PRIMARY KEY,
    amount DOUBLE PRECISION NOT NULL,
    date DATE NOT NULL,
    reservationId INT,
    FOREIGN KEY (reservationId) REFERENCES Reservation(id)
);
