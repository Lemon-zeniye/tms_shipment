export const shipments = [
  {
    id: 1,
    shipmentNumber: "SHIP-001",
    shipmentDate: "10/15/2024",
    pickupLocations: {
      multiple_pickup_location: false,
      pickup_location: "Yeka, Gulf, Southern Region, Papua New Guinea",
      pickup_date: "10/17/2024",
      from: "12:49",
      to: "12:52",
      contact_person: {
        full_name: "Kebede Guracha Mega",
        phone_number: 987654321,
        email: "kebede@gmail.com",
      },
      id: "0fdd934b-0235-4c54-b9a6-5b0bad3054fb",
    },
    items: [
      {
        itemCategory: "Parcels and Small Packages",
        packagingType: "Pallets",
        itemDescription: "Item one",
        quantity: 12,
        dimension: {
          length: 3,
          width: 3,
          height: 3,
        },
        weight: 56,
        totalWeight: 672,
        dropOffLocations: [
          {
            multiple_dropoff_location: true,
            dropoff_location: "Yeka, Agago, Northern Region, Uganda",
            delivery_date: "10/23/2024",
            reciver: {
              full_name: "Nati Tolosa Gadi",
              phone_number: 987654321,
              email: "nati@gmail.com",
            },
            quantity: 4,
            id: "7093f5bb-557b-49ac-9f80-dcb484c54e67",
          },
          {
            multiple_dropoff_location: false,
            dropoff_location: "Yeka, Addis Ababa, 2310, Ethiopia",
            delivery_date: "10/23/2024",
            reciver: {
              full_name: "Babi",
              phone_number: 98765432,
              email: "babi@gmail.com",
            },
            quantity: 8,
            id: "8864676d-de78-4021-ab8c-c0111248f9c7",
          },
        ],
        id: "7ed740ca-9655-4fbc-befc-588384946fc2",
      },
      {
        id: "ad705ba7-f358-4d83-a336-30fd219a73b8",
        itemCategory: "Bulk Items",
        packagingType: "Pallets",
        itemDescription: "Item Two",
        quantity: 10,
        dimension: {
          length: 1,
          width: 1,
          height: 1,
        },
        weight: 12,
        totalWeight: 120,
        dropOffLocations: [
          {
            multiple_dropoff_location: true,
            dropoff_location: "Yeka, Agago, Northern Region, Uganda",
            delivery_date: "10/23/2024",
            reciver: {
              full_name: "Nati Tolosa Gadi",
              phone_number: 987654321,
              email: "nati@gmail.com",
            },
            quantity: 10,
            id: "7093f5bb-557b-49ac-9f80-dcb484c54e67",
          },
        ],
      },
    ],
    driver: {
      full_name: "John Doe",
      contact_number: "123456789",
    },
    vehicle: {
      vehicleNumber: "AB-1234",
      vehicleType: "Truck",
    },
    status: "Picked",
  },
  {
    id: 2,
    shipmentNumber: "SHIP-002",
    shipmentDate: "10/16/2024",
    destination: "Nairobi, Kenya",
    status: "Pending",
    pickupLocations: {
      multiple_pickup_location: true,
      pickup_location: "Mombasa, Kenya",
      pickup_date: "10/18/2024",
      from: "09:00",
      to: "09:30",
      contact_person: {
        full_name: "Aisha Muthoni",
        phone_number: 987654322,
        email: "aisha@gmail.com",
      },
      id: "1a2b3c4d-5678-4e90-bb12-345678901234",
    },
    items: [
      {
        itemCategory: "Electronics",
        packagingType: "Boxes",
        itemDescription: "Laptop",
        quantity: 5,
        dimension: {
          length: 1,
          width: 0.5,
          height: 0.3,
        },
        weight: 2,
        totalWeight: 10,
        dropOffLocations: [
          {
            multiple_dropoff_location: false,
            dropoff_location: "Nairobi, Kenya",
            delivery_date: "10/20/2024",
            reciver: {
              full_name: "David Kamau",
              phone_number: 987654323,
              email: "david@gmail.com",
            },
            quantity: 5,
            id: "5f6e7d8c-1234-5678-90ab-cdef01234567",
          },
        ],
      },
    ],
    driver: {
      full_name: "Jane Smith",
      contact_number: "987654321",
    },
    vehicle: {
      vehicleNumber: "CD-5678",
      vehicleType: "Van",
    },
    status: "Driver Assigned",
  },
  {
    id: 3,
    shipmentNumber: "SHIP-003",
    shipmentDate: "10/17/2024",
    destination: "Addis Ababa, Ethiopia",
    status: "Shipped",
    pickupLocations: {
      multiple_pickup_location: true,
      pickup_location: "Kampala, Uganda",
      pickup_date: "10/19/2024",
      from: "14:00",
      to: "14:30",
      contact_person: {
        full_name: "Moses Nsubuga",
        phone_number: 987654324,
        email: "moses@gmail.com",
      },
      id: "9a0b1c2d-5678-4e90-bb12-345678901234",
    },
    items: [
      {
        itemCategory: "Furniture",
        packagingType: "Boxes",
        itemDescription: "Office Desk",
        quantity: 3,
        dimension: {
          length: 1.5,
          width: 0.8,
          height: 0.75,
        },
        weight: 25,
        totalWeight: 75,
        dropOffLocations: [
          {
            multiple_dropoff_location: false,
            dropoff_location: "Addis Ababa, Ethiopia",
            delivery_date: "10/25/2024",
            reciver: {
              full_name: "Selam Tesfaye",
              phone_number: 987654325,
              email: "selam@gmail.com",
            },
            quantity: 3,
            id: "1e2f3g4h-1234-5678-90ab-cdef01234567",
          },
        ],
      },
      {
        itemCategory: "Clothing",
        packagingType: "Bags",
        itemDescription: "Winter Coats",
        quantity: 20,
        dimension: {
          length: 1,
          width: 0.5,
          height: 0.3,
        },
        weight: 1,
        totalWeight: 20,
        dropOffLocations: [
          {
            multiple_dropoff_location: false,
            dropoff_location: "Addis Ababa, Ethiopia",
            delivery_date: "10/25/2024",
            reciver: {
              full_name: "Selam Tesfaye",
              phone_number: 987654325,
              email: "selam@gmail.com",
            },
            quantity: 20,
            id: "2e3f4g5h-1234-5678-90ab-cdef01234567",
          },
        ],
      },
    ],
    driver: {
      full_name: "Sammy Kibet",
      contact_number: "123456780",
    },
    vehicle: {
      vehicleNumber: "EF-1234",
      vehicleType: "Truck",
    },
    status: "Delivered",
  },
];

export const shipment = {
  id: 1,
  shipmentNumber: "SHIP-001",
  shipmentDate: "10/15/2024",
  pickupLocations: {
    multiple_pickup_location: false,
    pickup_location: "Yeka, Gulf, Southern Region, Papua New Guinea",
    pickup_date: "10/17/2024",
    from: "12:49",
    to: "12:52",
    contact_person: {
      full_name: "Kebede Guracha Mega",
      phone_number: 987654321,
      email: "kebede@gmail.com",
    },
    id: "0fdd934b-0235-4c54-b9a6-5b0bad3054fb",
  },
  items: [
    {
      itemCategory: "Parcels and Small Packages",
      packagingType: "Pallets",
      itemDescription: "Item one",
      quantity: 12,
      dimension: {
        length: 3,
        width: 3,
        height: 3,
      },
      weight: 56,
      totalWeight: 672,
      dropOffLocations: [
        {
          multiple_dropoff_location: true,
          dropoff_location: "Yeka, Agago, Northern Region, Uganda",
          delivery_date: "10/23/2024",
          reciver: {
            full_name: "Nati Tolosa Gadi",
            phone_number: 987654321,
            email: "nati@gmail.com",
          },
          quantity: 4,
          id: "7093f5bb-557b-49ac-9f80-dcb484c54e67",
        },
        {
          multiple_dropoff_location: false,
          dropoff_location: "Yeka, Addis Ababa, 2310, Ethiopia",
          delivery_date: "10/23/2024",
          reciver: {
            full_name: "Babi",
            phone_number: 98765432,
            email: "babi@gmail.com",
          },
          quantity: 8,
          id: "8864676d-de78-4021-ab8c-c0111248f9c7",
        },
      ],
      id: "7ed740ca-9655-4fbc-befc-588384946fc2",
    },
    {
      id: "ad705ba7-f358-4d83-a336-30fd219a73b8",
      itemCategory: "Bulk Items",
      packagingType: "Pallets",
      itemDescription: "Item Two",
      quantity: 10,
      dimension: {
        length: 1,
        width: 1,
        height: 1,
      },
      weight: 12,
      totalWeight: 120,
      dropOffLocations: [
        {
          multiple_dropoff_location: true,
          dropoff_location: "Yeka, Agago, Northern Region, Uganda",
          delivery_date: "10/23/2024",
          reciver: {
            full_name: "Nati Tolosa Gadi",
            phone_number: 987654321,
            email: "nati@gmail.com",
          },
          quantity: 10,
          id: "7093f5bb-557b-49ac-9f80-dcb484c54e67",
        },
      ],
    },
  ],
  driver: {
    full_name: "John Doe",
    contact_number: "123456789",
  },
  vehicle: {
    vehicleNumber: "AB-1234",
    vehicleType: "Truck",
  },
};

// export const vehicles = [
//   {
//     id: 1,
//     vehicle_type: "Truck",
//     vehicle_model: "Ford F-150",
//     license_plate_number: "ABC1234",
//     VIN: "1FTFW1E59JKE98765",
//     weight_capacity: "3000 kg",
//     volume_capacity: "15 m³",
//     insurance_policy_number: "INS12345678",
//     insurance_type: "Comprehensive",
//     insurance_expiry_date: "2025-05-31",
//   },
//   {
//     id: 2,
//     vehicle_type: "Van",
//     vehicle_model: "Mercedes-Benz Sprinter",
//     license_plate_number: "XYZ5678",
//     VIN: "WD3PE7CDXFP987654",
//     weight_capacity: "2000 kg",
//     volume_capacity: "12 m³",
//     insurance_policy_number: "INS87654321",
//     insurance_type: "Third-Party",
//     insurance_expiry_date: "2024-12-15",
//   },
//   {
//     id: 3,
//     vehicle_type: "SUV",
//     vehicle_model: "Toyota Land Cruiser",
//     license_plate_number: "LMN4567",
//     VIN: "JTMCU09J1G4123456",
//     weight_capacity: "1500 kg",
//     volume_capacity: "10 m³",
//     insurance_policy_number: "INS11223344",
//     insurance_type: "Comprehensive",
//     insurance_expiry_date: "2026-03-10",
//   },
//   {
//     id: 4,
//     vehicle_type: "Truck",
//     vehicle_model: "Chevrolet Silverado",
//     license_plate_number: "DEF7890",
//     VIN: "3GCUKSEC6JG123456",
//     weight_capacity: "3500 kg",
//     volume_capacity: "18 m³",
//     insurance_policy_number: "INS99887766",
//     insurance_type: "Third-Party",
//     insurance_expiry_date: "2025-09-20",
//   },
// ];

export const vehicles = [
  {
    id: "1",
    vehicle_type: "Truck",
    vehicle_model: "Ford F-150",
    license_plate_number: "ABC1234",
    VIN: "1FTFW1E59JKE98765",
    weight_capacity: "3000 kg",
    volume_capacity: "15 m³",
    insurance_policy_number: "INS12345678",
    insurance_type: "Comprehensive",
    insurance_expiry_date: "2025-05-31",
    status: "active",
  },
  {
    id: "2",
    vehicle_type: "Van",
    vehicle_model: "Mercedes-Benz Sprinter",
    license_plate_number: "XYZ5678",
    VIN: "WD3PE7CDXFP987654",
    weight_capacity: "2000 kg",
    volume_capacity: "12 m³",
    insurance_policy_number: "INS87654321",
    insurance_type: "Third-Party",
    insurance_expiry_date: "2024-12-15",
    status: "inactive",
  },
  {
    id: "3",
    vehicle_type: "SUV",
    vehicle_model: "Toyota Land Cruiser",
    license_plate_number: "LMN4567",
    VIN: "JTMCU09J1G4123456",
    weight_capacity: "1500 kg",
    volume_capacity: "10 m³",
    insurance_policy_number: "INS11223344",
    insurance_type: "Comprehensive",
    insurance_expiry_date: "2026-03-10",
    status: "active",
  },
  {
    id: "4",
    vehicle_type: "Truck",
    vehicle_model: "Chevrolet Silverado",
    license_plate_number: "DEF7890",
    VIN: "3GCUKSEC6JG123456",
    weight_capacity: "3500 kg",
    volume_capacity: "18 m³",
    insurance_policy_number: "INS99887766",
    insurance_type: "Third-Party",
    insurance_expiry_date: "2025-09-20",
    status: "active",
  },
];

export const drivers = [
  {
    id: 1,
    name: "John Doe",
    license_number: "ABC123456",
    license_expiry_date: "2025-12-31",
    license_class: "B",
    phone_number: "+1234567890",
    email: "johndoe@example.com",
    experience_years: 5,
    address: "123 Main St, City, State, ZIP",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    license_number: "XYZ987654",
    license_expiry_date: "2024-06-15",
    license_class: "C",
    phone_number: "+0987654321",
    email: "janesmith@example.com",
    experience_years: 8,
    address: "456 Elm St, City, State, ZIP",
    status: "inactive",
  },
  {
    id: 3,
    name: "David Brown",
    license_number: "LMN456789",
    license_expiry_date: "2023-11-20",
    license_class: "A",
    phone_number: "+1122334455",
    email: "davidbrown@example.com",
    experience_years: 12,
    address: "789 Oak St, City, State, ZIP",
    status: "active",
  },
  {
    id: 4,
    name: "Emily White",
    license_number: "OPQ654321",
    license_expiry_date: "2026-01-10",
    license_class: "B",
    phone_number: "+1223344556",
    email: "emilywhite@example.com",
    experience_years: 3,
    address: "321 Pine St, City, State, ZIP",
    status: "active",
  },
  {
    id: 5,
    name: "Michael Green",
    license_number: "STU123987",
    license_expiry_date: "2024-03-22",
    license_class: "C",
    phone_number: "+1324354657",
    email: "michaelgreen@example.com",
    experience_years: 9,
    address: "654 Cedar St, City, State, ZIP",
    status: "inactive",
  },
  {
    id: 6,
    name: "Sarah Blue",
    license_number: "VWX987321",
    license_expiry_date: "2025-08-30",
    license_class: "B",
    phone_number: "+1425364758",
    email: "sarahblue@example.com",
    experience_years: 7,
    address: "987 Maple St, City, State, ZIP",
    status: "active",
  },
];

export const companies = [
  {
    id: "1",
    company_name: "Transport Co.",
    operational_area: "North America",
    fleet_size: 50,
    contact_person: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone_number: "+1234567890",
    },
    status: "Active",
  },
  {
    id: "2",
    company_name: "Logistics Solutions",
    operational_area: "Europe",
    fleet_size: 100,
    contact_person: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone_number: "+9876543210",
    },
    status: "Inactive",
  },
];
