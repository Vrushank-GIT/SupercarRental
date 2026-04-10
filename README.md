# SupercarRental-AWS-React-Application

The Supercar Rental Full Stack Website uses React, Node.js, and AWS (S3, API Gateway, Lambda, DynamoDB, and SNS) to create a highly scalable, serverless booking platform for exotic track experiences. 

This project is a cloud-native web application that allows users to browse high-performance vehicles and securely book driving time slots.

## Main Features

* **Real-Time Fleet Browsing:** Users can view a curated list of supercars with details like Make, Model, Year, and high-quality images.
* **Double-Booking Prevention:** Utilizes a composite primary key strategy in DynamoDB (Conditional Writes) to mathematically prevent two users from booking the same car at the exact same time.
* **Instant Notifications:** Seamless integration with Amazon SNS triggers an immediate confirmation email to the user upon a successful booking.
* **Serverless Architecture:** Designed for high availability and low latency. The backend logic scales automatically from zero to thousands of requests using AWS Lambda to handle burst holiday traffic.
* **Secure AWS Integration:** All data is encrypted at rest (KMS) and in transit (HTTPS/TLS), with Lambda functions operating under strict Identity and Access Management (IAM) least-privilege roles.

## Screenshots

**Architecture Diagram**

<img width="468" height="227" alt="image" src="https://github.com/user-attachments/assets/96679338-9c57-4fb9-b8ae-c128f5fafac6" />


**Frontend User Interface**

<img width="1494" height="797" alt="Screenshot 2025-12-17 at 7 38 44 PM" src="https://github.com/user-attachments/assets/66271bac-f797-4c35-80a6-7ca69b370606" />

<img width="1495" height="826" alt="Screenshot 2025-12-17 at 7 40 12 PM" src="https://github.com/user-attachments/assets/24c1143c-51a3-4bfb-b540-793647c80b80" />

<img width="1501" height="838" alt="Screenshot 2025-12-17 at 7 39 54 PM" src="https://github.com/user-attachments/assets/be7dfaa5-bfcd-4744-a37a-f83ae331cb28" />

<img width="1501" height="831" alt="Screenshot 2025-12-17 at 7 38 55 PM" src="https://github.com/user-attachments/assets/40dc2180-4a4e-4449-b830-60c3ca4f7385" />



**DynamoDB Database View**

<img width="1511" height="747" alt="Screenshot 2025-12-17 at 7 41 51 PM" src="https://github.com/user-attachments/assets/20ec299b-83f9-4afd-80c3-339a6cd53798" />

<img width="1505" height="786" alt="Screenshot 2025-12-17 at 7 42 24 PM" src="https://github.com/user-attachments/assets/ef97a93f-4a4c-4467-9093-9dcbdecf95da" />

<img width="1509" height="779" alt="Screenshot 2025-12-17 at 7 42 14 PM" src="https://github.com/user-attachments/assets/ef4bbe40-0967-4710-b574-6dd65cef078c" />

## Purpose of Assignments Over the Term

Throughout the term, this project was built as the Final Term Project for CSCI3124 - Intro to Cloud Computing at Dalhousie University. The goal was to build a scalable, cloud-native platform that targets the holiday travel and leisure market, allowing customers to book high-demand driving experiences without the risk of system crashes.

By the end of the course, the site features:
* A responsive React-based Single Page Application hosted entirely on the cloud.
* Collections of supercars with their respective specifications.
* The ability for users to securely reserve specific time slots.
* An automated email notification system for booking confirmations.
* A cost-efficient, 100% serverless backend architecture replacing traditional idle servers.

## Users of the Site

* **Holiday Travelers & Gift-Givers:** Can browse the platform for unique holiday activities and book experiences.
* **Automotive Enthusiasts:** Can view supercar specifications and reserve track time.
* **Platform Administrators:** Oversee fleet availability and system data.

## Assignment Description

The project was built utilizing a completely serverless pipeline to compare cloud computing services versus traditional server-based (EC2/RDS) setups. The architecture was designed in stages:

* **Frontend:** Built using React and TypeScript. Compiled artifacts were uploaded to Amazon S3 for static website hosting, providing a cheap and highly durable user interface.
* **Networking:** Amazon API Gateway was set up as a secure HTTP entry point for the frontend to communicate with the backend.
* **Compute:** Node.js functions were written and hosted on AWS Lambda, allowing the code to execute and scale without provisioning servers.
* **Database:** Data storage was handled by Amazon DynamoDB, chosen over relational databases for its single-digit millisecond latency and flexible NoSQL schema.
* **Integration:** Amazon SNS was integrated to handle asynchronous email delivery to the end users upon successful reservation.

## Installation Steps

To run this project in your own AWS environment, you will need an active AWS account.

**1. Frontend Setup (S3):**
* Run `npm run build` in the React frontend directory.
* Create an Amazon S3 Bucket, enable "Static Website Hosting", and upload the build artifacts (`.html`, `.js`, `.css`).
* Update the bucket policies to allow public read access.

**2. Database Setup (DynamoDB):**
* Open the AWS DynamoDB Console.
* Create a table named `Cars` with a Partition key of `carId`.
* Create a table named `Reservations` with a Partition key of `carId` and a Sort key of `dateSlot`.

**3. Backend Setup (Lambda & SNS):**
* Create an Amazon SNS Topic for email notifications and subscribe your email address.
* Create two Node.js AWS Lambda functions (`GetCars` and `ReserveCar`) and upload your backend code.
* Attach IAM policies to the Lambda execution role allowing DynamoDB Scan/PutItem actions and SNS Publish actions.

**4. API Routing (API Gateway):**
* Create a new HTTP API in API Gateway.
* Set up a `GET /cars` route pointing to the `GetCars` Lambda.
* Set up a `POST /reserve` route pointing to the `ReserveCar` Lambda. 
* Enable CORS for your S3 domain.

**5. Configuration:**
* Update the API Gateway URL in your React frontend environment variables and rebuild the project to connect the frontend to the backend.

## Acknowledgements

* AWS S3 for static website hosting.
* AWS Lambda and API Gateway for serverless compute and networking.
* Amazon DynamoDB for NoSQL database management.
* Amazon SNS for application integration and messaging.
* React and Node.js for frontend and backend development.
* *Note: The live application and video presentation links are no longer active, as this project was originally deployed using an academic AWS Learner Lab account that expired at the end of the university term.*
