## Products Service API

### Overview
- Rebuilt the backend of an e-commerce website to accommodate production level traffic
- ETL CSV files that contain over 5 million records of products data
- Created multiple Products API routes that allows the client to get all products, get all styles for one product, and get all related products for one product
- Utilized common expression tables and composite indexes to handle complex database queries and reduce MySQL query response time from 40ms to 10ms
- Optimized throughput by horizontal scaling on AWS and implementing NGINX Least Connections load balancing
</br>
</br>

### MySQL Database Schema
<img src="./productServiceApiSchemaDiagram.png" width="500px">
</br>
</br>

### Microservice Architecture
- 3 Products Service API Servers
- 1 MySQL Database Server
- 1 NGINX Server
<img src="./microserviceDesign.png" width="500px">
</br>
</br>

### Optimization Steps
#### No Load Balancing
<img src="./no-balancer.png" width="500px">
</br>
</br>

#### 2 Products Service API Instances + NGINX Least Connections Load Balancing
<img src="./balancer-2-instance.png" width="500px">
</br>
</br>

#### 3 Products Service API Instances + NGINX Least Connections Load Balancing
<img src="./balancer-3-instance.png" width="500px">








