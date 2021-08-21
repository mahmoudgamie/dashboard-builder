




# dashboard-builder
===============================
## Table of Contents

* [About](#about)
* [Installing](#installing)
* [Features](#features)
* [Data](#data)
* [Container](#container)
* [Chart-Config](#chart-config)

## About

Javascript plugin for a Dynamic Dashboard Builder
 
## Installing

Because I am putting the data in JSON files, I used the fetch API to retrieve the data, for that the project has to be serverd locally,
follow the below steps.

1- Clone the repo.

2- Access the repo folder from your terminal.

3- Run `python -m http.server` (you have to install python 2 or 3 on your PC).

4- Navigate to `http://localhost:8000/index.html`.

## Features

1- Generate dashboard widgets according to widget type.

2- Control widget position and order.

3- Control widget size.

4- Fetch widget data from API.

5- Set widget display priority.

## Data

The BuildData json, is the json that feeds the main builder method it should contain the following properties:
1- styles property (width, height, order...etc).
2- title property which defaults to null if no title is inserted in the json.
3- type of the widget (text or chart).
4- config which is mandatory to build the chart.
5- dataSource which will specify a url and priority if the data to be fetched by an API.
6- data which is mandatory to build text chart.

## Container

The widget container is made of flex container, so in the styles property we can add any CSS for a flex container.

## Chart-Config

For each chart type there is a configuration and a specific json data that needs to be inserted into the config property for type chart widgets, please follow the chart.js documentaion to correctly build the data for each chart type.
[chart.js](https://www.chartjs.org/). 

