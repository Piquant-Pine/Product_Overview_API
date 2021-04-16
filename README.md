## Products Service API

### Overview
- Rebuilt the backend of an e-commerce website to accomodate production level traffic
- Created a Products Service API that allows the client to get all products, get all styles for one product, and get all related products

### Optimization Progress
- 1 Products Service API instance with NO load-balancers
 - Throughput: 5000 clients/sec
 - Latency: 70 ms
 - Error Rate: 0%
<img src="./no-balancer.png" width="500px">

- 2 Products Service API instances with NGINX Least Connections Load Balancer
 - Throughput: 500 clients/sec
 - Latency: 67 ms
 - Error Rate: 0%
<img src="./balancer-2-instance.png" width="500px">

- 3 Products Service API instances with NGINX Least Connections Load Balancer
 - Throughput: 1070 clients/sec
 - Latency: 99ms ms
 - Error Rate: 0%
<img src="./balancer-3-instance.png" width="500px">

### MySQL Database Schema
<img src="./productServiceApiSchemaDiagram.png" width="500px">

### Microservice Architecture
- Implemented a microservice architecture:
  - 3 Products Service API Servers
  - 1 MySQL Database Server
  - 1 NGINX Server
<img src="./microserviceDesign.png" width="500px">






