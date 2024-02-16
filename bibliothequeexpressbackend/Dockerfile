FROM maven:3.8.3-openjdk-17 AS MAVEN_BUILD

MAINTAINER hatemboudabra41@gmail.com

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/

RUN mvn clean package

FROM openjdk:17-jdk

ARG JAR_FILE=/build/target/*.jar

WORKDIR /app

COPY --from=MAVEN_BUILD /build/target/*.jar /app/app.jar
##COPY target/app.jar /app/app.jar