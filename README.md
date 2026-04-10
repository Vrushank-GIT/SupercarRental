Supercar Rental - AWS Serverless Platform
A serverless web application built on AWS for booking high-performance vehicles. Designed to handle peak traffic efficiently without the cost of idle servers.

Course: CSCI3124 - Intro to Cloud Computing, Dalhousie University
Instructor: Dr. Lu Yang
Author: Vrushank Ronak Patel

Key Features
Real-Time Booking: Browse a supercar fleet and reserve driving slots.
Double-Booking Prevention: Uses DynamoDB Conditional Writes to guarantee slot exclusivity.
Instant Notifications: Automated email confirmations triggered by Amazon SNS.
100% Serverless: Scales automatically from zero to thousands of requests.
Tech Stack
Frontend: React & TypeScript. Hosted on Amazon S3 (Static Website Hosting).
API Routing: Amazon API Gateway (HTTP API) for secure frontend-to-backend communication.
Compute: AWS Lambda (Node.js) for scalable backend logic.
Database: Amazon DynamoDB (NoSQL) for low-latency reads/writes and flexible schemas.
Messaging: Amazon SNS for decoupled email alerts.
Architecture & Screenshots
Architecture Diagram

Frontend UI


DynamoDB Database


Security
Encryption at Rest: DynamoDB data is encrypted using AWS KMS.
Encryption in Transit: HTTPS/TLS enforced via API Gateway.
IAM Roles: Lambda functions use strict, least-privilege access policies.
Deployment Steps
Frontend (S3): Build the React app (npm run build) and upload to an S3 bucket with Static Website Hosting enabled.
Database (DynamoDB): Create Cars (Partition key: carId) and Reservations tables (Partition key: carId, Sort key: dateSlot).
Backend (Lambda/SNS): Create an SNS topic. Deploy Node.js functions to Lambda. Attach IAM permissions for DynamoDB and SNS.
Routing (API Gateway): Create an HTTP API. Map GET /cars and POST /reserve to the respective Lambda functions.
Config: Add the API Gateway URL to the React frontend environment variables.
Future Enhancements
Authentication: Add Amazon Cognito for user sign-in and profile history.
Payments: Integrate Stripe API into Lambda to process transactions.
Advanced Search: Add Amazon OpenSearch to filter cars by specs (e.g., Horsepower).
Live Demo Status
Note: The live application is currently offline. The project was hosted on an academic AWS Learner Lab account which expired at the end of the semester. Please refer to the architecture diagrams and screenshots above.

