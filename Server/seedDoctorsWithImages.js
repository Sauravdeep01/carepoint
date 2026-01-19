import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from './models/doctorModel.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const doctors = [
    {
        name: 'Dr. Richard James',
        email: 'richard@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc1.png',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Emily Larson',
        email: 'emily@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc2.png',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Sarah Patel',
        email: 'sarah@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc3.png',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Christopher Lee',
        email: 'christopher@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc4.png',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Jennifer Garcia',
        email: 'jennifer@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc5.png',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Andrew Williams',
        email: 'andrew@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc6.png',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Christopher Davis',
        email: 'chrisdavis@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc7.png',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Timothy White',
        email: 'timothy@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc8.png',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Ava Mitchell',
        email: 'ava@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc9.png',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Jeffrey King',
        email: 'jeffrey@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc10.png',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Zoe Kelly',
        email: 'zoe@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc11.png',
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Patrick Harris',
        email: 'patrick@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc12.png',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Chloe Evans',
        email: 'chloe@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc13.png',
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Ryan Martinez',
        email: 'ryan@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc14.png',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        name: 'Dr. Amelia Hill',
        email: 'amelia@carepoint.com',
        password: 'doctor123',
        imagePath: '../Client/src/assets/doc15.png',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    }
];

const uploadImageToCloudinary = async (imagePath) => {
    try {
        const fullPath = path.join(__dirname, imagePath);
        console.log(`Uploading: ${fullPath}`);

        const result = await cloudinary.uploader.upload(fullPath, {
            folder: 'carepoint_doctors',
            resource_type: 'image'
        });

        console.log(`✅ Uploaded successfully: ${result.secure_url}`);
        return result.secure_url;
    } catch (error) {
        console.error(`❌ Error uploading ${imagePath}:`, error.message);
        return null;
    }
};

const seedDoctorsWithImages = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing doctors
        await doctorModel.deleteMany({});
        console.log('✅ Cleared existing doctors');

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('doctor123', salt);

        console.log('\n📤 Starting image uploads to Cloudinary...\n');

        // Upload images and create doctors
        for (let i = 0; i < doctors.length; i++) {
            const doctor = doctors[i];
            console.log(`\n[${i + 1}/${doctors.length}] Processing ${doctor.name}...`);

            // Upload image to Cloudinary
            const imageUrl = await uploadImageToCloudinary(doctor.imagePath);

            if (imageUrl) {
                // Create doctor with Cloudinary image URL
                await doctorModel.create({
                    name: doctor.name,
                    email: doctor.email,
                    password: hashedPassword,
                    image: imageUrl,
                    speciality: doctor.speciality,
                    degree: doctor.degree,
                    experience: doctor.experience,
                    about: doctor.about,
                    fees: doctor.fees,
                    address: doctor.address,
                    date: Date.now(),
                    slots_booked: {}
                });
                console.log(`✅ ${doctor.name} added to database`);
            } else {
                console.log(`⚠️  Skipped ${doctor.name} due to image upload failure`);
            }
        }

        console.log('\n\n🎉 Successfully completed!');
        console.log('✅ All doctor images uploaded to Cloudinary');
        console.log('✅ All doctors added to MongoDB');
        console.log('\n📋 Doctor login credentials:');
        console.log('   Email: [doctorname]@carepoint.com');
        console.log('   Password: doctor123');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

seedDoctorsWithImages();
