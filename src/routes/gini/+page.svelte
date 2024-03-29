<script>
    import { marked } from 'marked';

let markdownText = `# What's Gini?
### The Gini Coefficient is a measure ranging from 0 to 1, where 0 signifies perfect equality (everyone has the same income) and 1 indicates perfect inequality (all wealth is held by a single individual). This statistic helps us understand the nuances of income distribution within a nation, shedding light on societal balance or disparity.

### Dive into our interactive globe and select a year to see the inequality of nations through Gini colors. Lower green values indicate equality; higher reds reveal disparity. Click the legend to filter and explore countries within specific Gini ranges.
`;

let htmlContent = marked.parse(markdownText);


let markdownTextBottom = `# Let's Combine! And Start Packing UP!
### This last graph brings together GDP and Gini, allowing us to consider both the wealth of a nation and how that wealth is spread among its people. It’s not just about having a high GDP or a low Gini, but about finding a country that harmoniously balances both. Here lies the nuanced destination of our data-driven journey: countries positioned in the graph's bottom right, boasting both economic abundance and equitable distribution, are where economic well-being for all is more likely to be a reality. If you click on the dots on the graph, you will find out that country is *<u>Luxembourg!</u>*
`;
let markdownTextBottom3 = `# Takeways
### Our exploration concludes with a clear takeaway: real prosperity is not solely in a nation's wealth but in how fairly it's shared. This project illuminates this through interactive visualizations, demonstrating the powerful combination of GDP and the Gini coefficient to reveal the balance of economic health and equity.

### Why is this effective? Because every clickable point on our charts represents a nuanced narrative that interprets abstract numbers into human experience. Through interesting interactions and witty words, we express: In the world economy, fairness and prosperity are equally important. Our visualizations not only demonstrate this, they resonate, ensuring a deeper understanding of what it means to thrive collectively.

## Thank you for your time to explore the economic world with us! We have bottons on the top right to go back to the previous pages if you want review it!

`;
let htmlContentBottom3 = marked.parse(markdownTextBottom3);
let htmlContentBottom = marked.parse(markdownTextBottom);
let markdownTextMiddle = `# Rank!
### As the years change, so do the rankings—watch as countries climb or descend in the quest for economic balance. Let's focus back on 2021. Countries like Slovenia and Ukraine lead with the narrowest wealth gaps, exemplifying greater equality. 

### Toggle between the lowest and highest wealth gaps to reveal the full spectrum of income distribution across the globe. By switching the view, you can instantly identify countries grappling with the most significant disparities, where wealth is less evenly distributed among their populace. 
`
;

let markdownTextMiddle2 = `# Can We Pack Our Bags Now?
### As we've navigated through separate indicators, a question naturally arises: should one pack their bags for countries with the lowest Gini coefficient, equating it with utopian equality? Not so fast. While a low Gini suggests fairer wealth distribution, it doesn't account for overall economic health.`;

let htmlContentMiddle= marked.parse(markdownTextMiddle);
let htmlContentMiddle2= marked.parse(markdownTextMiddle2);

  let url_gdp = "https://zmc0806.github.io/project/gdp"; 
  let url_gini = "https://zmc0806.github.io/project/gini"; 
  let url_home = "https://zmc0806.github.io/project/home";
</script>
<!DOCTYPE html>
<html lang="en">

    <head>
        <style>
        body {
        background-color: #F5F5DC;
        }
            
          .bar {
            fill: steelblue;
        }
        
        .bar:hover {
            fill: orange;
        }
        
        .axis path,
        .axis line {
            fill: none;
            stroke: #000;
            shape-rendering: crispEdges;
        }
        /* Styles for Home link container */
#home-link-container {
  position: absolute;
  top: 20px;
  right: 20px;
}

#home-link-container a {
  /* Style for your Home link */
  padding: 10px;
  background: #f8f9fa;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Styles for bottom right link container */
#bottom-right-link-container {
  position: static;
  bottom: 20px;
  right: 20px;
}

#bottom-right-link-container a {
  /* Style for your links */
  display: inline-block;
  margin-left: 10px;
  padding: 10px;
  background: #f8f9fa;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 5px;
}

#bottom-right-link-container a:hover,
#home-link-container a:hover {
  background: #e2e6ea;
}

        .info-box {
  /* Other styles... */
  font-size: 1.5em; /* Bigger text size */
}
        .axis text {
            font-family: sans-serif;
            font-size: 11px;
        }
        
        .axis-label {
            font-size: 14px;
            text-anchor: middle;
        }
        #lineGraphContainer {
    position: absolute;
    top: 300px; /* Adjust as needed */
    right: 250px; /* Adjust as needed */
    width: 300px; /* Maintain or adjust size as needed */
    height: 200px; /* Maintain or adjust size as needed */
}
        </style>
    </head>
<body>
    <!-- Dropdown for selecting a year -->
    <div id="home-link-container">
        <a href="{url_home}" target="_blank" rel="noopener noreferrer">HOME</a>
        <a href="{url_gdp}" target="_blank" rel="noopener noreferrer">GDP</a>
      </div>
    <div>{@html htmlContent}</div>
    <label for="yearSelector" style="font-size: 20px;">Which year are you interested in?</label>
    <select id="yearSelector" style="font-size: 15px;" ></select>
    <div id="lineGraphContainer"></div>
    <div id="visualizationContainer" style="display: flex; justify-content: space-between; align-items: start;">
        <div id="globeContainer" style="flex-grow: 1;">
            <!-- Globe SVG and related elements here -->
        </div>
        <div id="lineGraphContainer" style="width: 300px; height: 200px;">
            <!-- Line graph will be rendered here by Plotly -->
        </div>
    </div>  
    <svg>
        <div>{@html htmlContentMiddle}</div>
        <select id="viewSelector" style="font-size: 15px; margin-top: 20px;">
            <option value="top">Countries with the LOWEST wealth gap</option>
            <option value="bottom">Countries with the HIGHEST wealth gap</option>
            </select>
        <div id="barChartContainer"></div> <!-- Container for the bar chart -->
        <div>{@html htmlContentMiddle2}</div>
        <div>{@html htmlContentBottom}</div>
        <div id="scatterPlotContainer" style="width: 960px; height: 600px;"></div>
        <div>{@html htmlContentBottom3}</div>
    </svg>
    <!-- D3.js and TopoJSON for map rendering -->
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="https://d3js.org/topojson.v1.min.js"></script>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script> <!-- Plotly.js for line graph -->
    <script>
        // Place this at the top of your D3.js script, after setting up the main SVG
// Define axes here as well
const giniColorScale = d3.scaleLinear()
    .domain([0.3, 0.4, 0.6]) // Assuming Gini values range from 0.2 to 0.7
    .range(["green", "yellow", "red"]); // Green to Yellow to Red

        const width = 1200;
        const height = 700;
        let isDragging = false;
        const svg = d3.select('svg')
            .attr('width', width).attr('height', height);
        const projection = d3.geoOrthographic()
            .scale(250)
            .translate([width / 2, height / 2]);
        const path = d3.geoPath().projection(projection);
        const graticule = d3.geoGraticule();
        let countryCasesMap = {};
        let csvData; // Global variable to store CSV data
        const margin = { top: 20, right: 240, bottom: 70, left: 70 },
              barChartWidth = 900 ,
              barChartHeight = 500;

        const xScale = d3.scaleLinear()
            .range([0, barChartWidth]);
            
        const yScale = d3.scaleBand()
            .range([barChartHeight, 0])
            .padding(0.1);
            const svgContainer = d3.select('svg');
            function generateLineGraphData(countryName) {
        const countryData = csvData.filter(d => d.Entity === countryName);
        const years = countryData.map(d => +d.Year);
        const gdpPerCapita = countryData.map(d => +d["Gini coefficient"]);

        return {
            years: years,
            gdpPerCapita: gdpPerCapita
        };
    }
    // After your globe and other visual elements are set up

// Define legend dimensions and position
const legendWidth = 20;
const legendHeight = 200;
const legendPosition = { x: 50, y: 150 }; // Adjust as necessary

// Create a canvas for the legend
const legendSvg = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${legendPosition.x},${legendPosition.y})`);

// Create a linear gradient for the legend
const gradientId = "gini-gradient";
const defs = legendSvg.append("defs");
const linearGradient = defs.append("linearGradient")
    .attr("id", gradientId)
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "100%")
    .attr("y2", "0%");
linearGradient.selectAll("stop")
    .data(giniColorScale.range().map(function(color, i, arr) {
        const offset = i / (arr.length - 1) * 100;
        return { offset: offset + "%", color: color };
    }))
    .enter().append("stop")
    .attr("offset", function(d) { return d.offset; })
    .attr("stop-color", function(d) { return d.color; });

    // Assuming the setup of your SVG and projection

// Example Gini coefficient ranges for discrete legend segments
const giniRanges = [0.3, 0.4, 0.6,0.8]; // Corrected ranges to match your color scale
const giniColors = ["green", "orange", "red","purple"]; // Directly using color names as per your scale
// After setting up the legend segments

// Define the text for each label based on the giniRanges
const giniLabels = ["<= 0.3 Low", "0.3 - 0.6 Meidan", "0.6 - 0.7 High", ">= 0.7 Extreme High"];

// Append labels to the legend
legendSvg.selectAll("text")
    .data(giniLabels)
    .enter()
    .append("text")
    .attr("x", legendWidth + 5) // Position the labels right of the legend rectangles
    .attr("y", (d, i) => i * (legendHeight / giniRanges.length) + (legendHeight / giniRanges.length / 2))
    .text(d => d)
    .attr("alignment-baseline", "middle") // Vertically align text in the center of each segment
    .style("font-size", "12px"); // Adjust font size as necessary

// Function to update the globe based on the selected Gini range
function updateGlobeForGiniRange(minGini, maxGini) {
    svg.selectAll(".segment")
        .style("opacity", d => {
            const giniValue = countryCasesMap[d.properties.name];
            return (giniValue >= minGini && giniValue < maxGini) ? 1 : 0.2;
        });
}

// Reset to show all countries
function resetGlobe() {
    svg.selectAll(".segment").style("opacity", 1);
}

// Draw the legend and attach click events
legendSvg.selectAll("rect")
    .data(giniRanges)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", (d, i) => i * (legendHeight / giniRanges.length))
    .attr("width", legendWidth)
    .attr("height", legendHeight / giniRanges.length)
    .attr("fill", (d, i) => giniColors[i])
    .on("click", (d, i) => {
        const minGini = d;
        const maxGini = giniRanges[i + 1] || 1; // Ensure the last range goes up to 1 or maximum
        updateGlobeForGiniRange(minGini, maxGini);
    });

// Optionally, add a reset button or area to the legend
legendSvg.append("text")
    .attr("x", 0)
    .attr("y", legendHeight + 20) // Below the legend
    .text("Reset")
    .style("cursor", "pointer")
    .on("click", resetGlobe);


    // Example function to add a highlighted point on the line graph for the selected year
    function updateGraphWithHighlightedYear(countryName, selectedYear) {
    const lineGraphData = generateLineGraphData(countryName);

    // Debugging: Log the data to verify it's as expected
    console.log("Line Graph Data:", lineGraphData);
    
    const index = lineGraphData.years.findIndex(year => year === selectedYear);
    if (index === -1) {
        console.error("Selected year not found in the data");
        return;
    }

    const highlightX = [lineGraphData.years[index]];
    const highlightY = [lineGraphData.gdpPerCapita[index]];

    // Debugging: Log the highlight data
    console.log("Highlight Data:", highlightX, highlightY);

    const trace1 = {
        x: lineGraphData.years,
        y: lineGraphData.gdpPerCapita,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'blue' },
    };

    const trace2 = {
        x: highlightX,
        y: highlightY,
        type: 'scatter',
        mode: 'markers',
        marker: { color: 'red', size: 14 },
    };

    const layout = {
        title: `${countryName} - Gini Per Capita Over Time`,
    };

    Plotly.newPlot('lineGraphContainer', [trace1, trace2], layout);
}

    // Function to create a line graph for a given country using Plotly.js
    function createLineGraph(countryName) {
    const lineGraphData = generateLineGraphData(countryName);

    const data = [{
        x: lineGraphData.years,
        y: lineGraphData.gdpPerCapita,
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'blue' },
        name: 'GDP per capita'
    }];

    const layout = {
        title: `${countryName} - Gini Per Capita Over Time`,
        xaxis: { title: 'Year' },
        yaxis: { title: 'GDP per capita' },
        width: 500, // Adjust width as needed
        height: 500, // Adjust height as needed
        margin: { // Adjust margins as needed
            l: 50,
            r: 50,
            b: 50,
            t: 50,
            pad: 4
        },
    };

    Plotly.newPlot('lineGraphContainer', data, layout);
}

// Add a title to the SVG
svgContainer.append("text")
  .attr("x", width / 2  ) // This will position the text in the center of the SVG
  .attr("y", margin.top + 20) // This positions the text from the top of the SVG
  .attr("text-anchor", "middle") // This centers the text (horizontally)
  .style("font-size", "24px") // Change the font size as needed
  .style("font-weight", "bold") // Optional: makes the text bold
  .text("Gini Per Capita Over Time 1963 - 2022"); // Replace with your actual title
            
  const barSvg = d3.select('#barChartContainer')
    .append('svg')
    .attr('width', barChartWidth + margin.left + margin.right + 101)
    .attr('height', barChartHeight + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

    d3.csv("economic-inequality-gini-index-filled-2000-2022.csv", function(error, data) {
            if (error) throw error;
            csvData = data; // Store the CSV data globally

            // Populate the year selector with unique years from the data
            
            const years = Array.from(new Set(data.map(d => d.Year))).sort((a, b) => b - a);
            const yearSelector = d3.select("#yearSelector");
            years.forEach(year => {
                yearSelector.append("option").text(year).attr("value", year);
            });

            // Initialize the map with the first available year
            updateMapForYear(years[0]);
            const initialYear = years[0]; 
            yearSelector.property('value', initialYear);

    // Now call the function to update the bar chart with this initial year
    updateBarChart(initialYear); 
        });
        // Update map based on selected year
        // Update map based on selected year
        function updateMapForYear(selectedYear) {
            countryCasesMap = {}; // Reset the map
            csvData.filter(d => d.Year == selectedYear).forEach(d => {
                countryCasesMap[d.Entity] = +d["Gini coefficient"];
            });
            updateGlobeColors(); 
            // Clear previous globe drawings and redraw
            svg.selectAll(".segment").remove(); // Clear previous countries
            svg.selectAll(".graticule").remove(); // Clear previous graticules
            svg.selectAll(".countryName").remove(); // Clear country names

            // Redraw map elements
            drawOcean();
            drawGlobe();
            drawGraticule();
            // Re-enable rotation after updating
            enableRotation();
            enableDrag();
    
        }


        // Listen for year selection changes
        d3.select("#yearSelector").on("change", function() {
            updateMapForYear(this.value);
        });

        // Function to draw the ocean
        function drawOcean() {
            svg.append("circle")
                .attr("cx", width / 2)
                .attr("cy", height / 2)
                .attr("r", projection.scale())
                .style("fill", "#1E90FF"); // Ocean color
        }

        // Function to draw the globe
        function drawGlobe(world) {
            d3.json('world-110m_with_names.v1.json', function(error, world) {
                if (error) throw error;

                const countries = topojson.feature(world, world.objects.countries).features;

             d3.selectAll(".segment")
            .on("mouseover", function(d) {
                const countryName = d.properties.name;
                const selectedYear = parseInt(document.getElementById("yearSelector").value);
                console.log("Hovered country:", countryName);
                createLineGraph(countryName); // Generate and display line graph
                highlightYearOnGraph(selectedYear);
            })
            .on("mouseout", function(d) {
                console.log("Mouseout");
                d3.select('#lineGraphContainer').selectAll("*").remove(); // Clear line graph
            });
            d3.selectAll(".country").on("mouseover", function(event, d) {
    const countryName = d.properties.name;
    const selectedYear = parseInt(document.getElementById("yearSelector").value);
    updateGraphWithHighlightedYear(countryName, selectedYear);
});
    // First, generate or update the line graph for the hovered country
 svg.selectAll(".segment")
                    .data(countries)
                    .enter().append("path")
                    .attr("class", "segment")
                    .attr("d", path)
                    .style("stroke", "#FFF") // Country borders
                    .style("stroke-width", "0.5px")
                    .style("fill", d => {
        const giniValue = countryCasesMap[d.properties.name];
        return giniValue ? giniColorScale(giniValue) : "#AAAAAA"; // Use the color scale for the fill, default color if no data
    })
                    .on("mouseover", function(d) {
                    const countryName = d.properties.name;
                    const giniValue = countryCasesMap[countryName];
                    d3.select(this).style("fill", giniValue ? giniColorScale(giniValue) : "#FFD700"); // Use Gini color scale or default highlight color
                    d3.select(this).style("fill", "#FFD700"); 
                    createLineGraph(countryName);
                })
                
                .on("mouseout", function(d) {
                const countryName = d.properties.name;
                const giniValue = countryCasesMap[countryName];
                d3.select(this).style("fill", giniValue ? giniColorScale(giniValue) : "#AAAAAA"); // Reset color based on Gini value or default color
                d3.select('#lineGraphContainer').html('');

                });
          
        });
    

        }
        function updateGlobeColors() {
    svg.selectAll(".country")
        .transition()
        .duration(250)
        .attr("fill", d => {
            const giniValue = countryCasesMap[d.properties.name];
            return giniValue ? giniColorScale(giniValue) : "grey"; // Default to grey if no data
        });
}
        function showCountryName(name, data) {
            const displayData = data || 'No data'; // Ensure there's a fallback if no data is available
            svg.append("text")
                .attr("class", "countryName")
                .attr("x", 20)
                .attr("y", 35)
                .text(`${name}: ${displayData}`) // Display the country name and its data
                .style("font-size", "20px")
                .style("fill", "black");
        }


        function hideCountryName() {
            svg.selectAll(".countryName").remove();
        }

        function drawGraticule() {
            svg.append("path")
                .datum(graticule())
                .attr("class", "graticule")
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "#DDD")
                .style("stroke-opacity", 0.5);
        }

        let rotationTimer;

        function enableRotation() {
            if (rotationTimer) {
                rotationTimer.stop();
            }

            let lastTime = Date.now();

            rotationTimer = d3.timer(function() {
                if (!isDragging) {
                    const now = Date.now();
                    const delta = now - lastTime;
                    lastTime = now;

                    const rotate = projection.rotate();
                    const rotationSpeed = 0.005;
                    projection.rotate([rotate[0] + rotationSpeed * delta, rotate[1]]);
                    svg.selectAll("path").attr("d", path);
                }
            });
        }

        // Function to update the line graph based on the country name

        function enableDrag() {
            const drag = d3.drag()
                .on('start', function() {
                    isDragging = true;
                })
                .on('drag', function() {
                    const dx = d3.event.dx;
                    const dy = d3.event.dy;
                    const rotate = projection.rotate();
                    projection.rotate([rotate[0] + dx, rotate[1] - dy]);
                    svg.selectAll("path").attr("d", path);
                })
                .on('end', function() {
                    isDragging = false;
                });

            svg.call(drag);
        }

        // Function to update the bar chart
       // Assuming that your sortedData is correctly sorted and contains the data for the selected year

// Function to create the scatter plot
function createScatterPlot(data) {
  const margin = { top: 50, right: 20, bottom: 50, left: 70 },
        width = 960 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

  const svg = d3.select("#scatterPlotContainer").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const x = d3.scaleLinear().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);

  x.domain([0, d3.max(data, function(d) { return d.gdp; })]);
  y.domain([0.2, d3.max(data, function(d) { return d.gini; })]); // Start Y scale from 0.2

  // Tooltip for hover information
  var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

  // Info box for clicked country
  var infoBox = d3.select("body").append("div")
      .attr("class", "info-box")
      .style("opacity", 0);

  // Create circles for the scatter plot
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 10) // Increased radius
      .attr("cx", function(d) { return x(d.gdp); })
      .attr("cy", function(d) { return y(d.gini); })
      .style("fill", "#69b3a2")
      .on("click", function(d) {
  // Display the country information on click
  infoBox.html("<strong>Country:</strong> " + d.country 
               + "<br/><strong>GDP:</strong> $" + d.gdp 
               + "<br/><strong>Gini:</strong> " + d.gini)
         .style("opacity", 1)
         .style("right", "50px")
         .style("top", "2300px")
         .style("position", "absolute")
         .style("background", "white")
         .style("padding", "30px")
         .style("border", "10px solid #ccc")
         .style("border-radius", "5px")
         .style("text-align", "left")
         .style("font-size", "1.5em"); // Bigger text size
});
svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x))
  .append("text")
  .attr("class", "axis-label")
  .attr("x", width / 2)
  .attr("y", margin.bottom / 2 + 15) // Position adjusted to avoid being cut off.
  .style("text-anchor", "middle")
  .style("fill", "#000") // Text color
  .text("GDP per Capita 2021 (PPP, constant 2017 international $)");

// Add the Y Axis with a label
svg.append("g")
  .call(d3.axisLeft(y))
  .append("text")
  .attr("class", "axis-label")
  .attr("transform", "rotate(-90)")
  .attr("y", -margin.left / 2 - 10) // Adjust position to not be cut off.
  .attr("x", -height / 2)
  .style("text-anchor", "middle")
  .style("fill", "#000") // Text color
  .text("Gini Coefficient 2021");

 svg.append("text")
      .attr("class", "title")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "24px")
      .text("Income Inequality vs. GDP per Capita, 2021");

}

// Load the CSV data and then call the function
d3.csv("merged_gini_gdp_2021.csv", function(error, data) {
  if (error) throw error;

  // Parse the data
  data.forEach(function(d) {
    d.gdp = +d["GDP per Capita 2021 (PPP, constant 2017 international $)"];
    d.gini = +d["Gini Coefficient 2021"];
    d.country = d.Entity; // Assuming 'Entity' column has the country names
  });

  createScatterPlot(data);
});


function updateBarChart(selectedYear,view) {
    // Filter and sort data

    let sortedData;
    if (view === "bottom") {
        sortedData = csvData.filter(d => d.Year == selectedYear)
            .sort((a, b) => b["Gini coefficient"] - a["Gini coefficient"])
            .slice(0, 15);
    } else { // "bottom"
        sortedData = csvData.filter(d => d.Year == selectedYear)
            .sort((a, b) => a["Gini coefficient"] - b["Gini coefficient"]) 
            .slice(0, 15);
    }

        const maxBarHeight = barChartHeight / sortedData.length;

const yScale = d3.scaleBand()
    .rangeRound([0, barChartHeight]) // The range is the total height available
    .paddingInner(0.1) // Adjust padding to manage spacing between bars
    .domain(sortedData.map(d => d.Entity));

// Now you update the bar height when appending the bars using the yScale
barSvg.selectAll(".bar")
    .data(sortedData)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", d => yScale(d.Entity))
    .attr("width", d => xScale(+d["Gini coefficient"]))
    .attr("height", yScale.bandwidth()); // This uses the scale's computed bandwidth
    barSvg.selectAll(".bar")
  // ... (existing code for creating bars)
// Update the SVG height if necessary based on the new calculations
const totalHeightRequired = maxBarHeight * sortedData.length;
if (totalHeightRequired > barChartHeight) {
    // Increase the height of the SVG to accommodate all bars
    d3.select('svg')
        .attr('height', totalHeightRequired + margin.top + margin.bottom);
}
    // Update scales
    xScale.domain([0, d3.max(sortedData, d => +d["Gini coefficient"])]);
    yScale.domain(sortedData.map(d => d.Entity));
    barSvg.selectAll('*').remove();
    const g = barSvg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    // Remove old bars and labels
    barSvg.selectAll(".bar").remove();
    barSvg.selectAll(".label").remove();
    barSvg.selectAll(".value").remove();
    barSvg.selectAll(".axis").remove();

    barSvg.selectAll(".bar")
    .on("mouseover", function(d) {
        // Call the highlight function with the country name
        highlightCountryOnGlobe(d.Entity);
    })
    .on("mouseout", function() {
        // Reset the globe visualization when not hovering
        drawGlobe();
    });
    // Draw bars
    g.selectAll('.bar')
        .data(sortedData)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', 40)
        .attr('y', d => yScale(d.Entity))
        .attr('width', d => xScale(+d["Gini coefficient"]))
        .attr('height', yScale.bandwidth());


    // Add x and y axes
    g.append('g')
        .attr('transform', `translate(40,${barChartHeight})`)
        .call(d3.axisBottom(xScale));

    // Draw the Y axis

    // Append country names to the left of the bars
    barSvg.selectAll(".label")
        .data(sortedData)
        .enter().append("text")
        .attr("class", "label")
        .attr("x", 100)
        .attr("y", d => yScale(d.Entity) + yScale.bandwidth() / 2+ 15)
        .attr("dy", ".35em")
        .attr("text-anchor",    "end")
        .text(d => d.Entity);

    // Append values at the end of the bars
    barSvg.selectAll(".value")
        .data(sortedData)
        .enter().append("text")
        .attr("class", "value")
        .attr("x", d => xScale(d["Gini coefficient"]) + 120)
        .attr("y", d => yScale(d.Entity) + yScale.bandwidth() / 2 + 20 )
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .text(d => d["Gini coefficient"]);
}


        d3.select("#viewSelector").on("change", function() {
            const selectedYear = document.getElementById("yearSelector").value;
            const view = this.value;
            updateBarChart(selectedYear, view);
        });

        // Call updateBarChart when the year is selected
        d3.select("#yearSelector").on("change", function() {
            const selectedYear = this.value;
            const view = document.getElementById("viewSelector").value;
            updateMapForYear(this.value);
            updateBarChart(selectedYear, view);;
        });

        // Initialize the bar chart with the first available year
        const initialView = document.getElementById("viewSelector").value;
        updateBarChart(years[0], initialView);
       
        
    </script>
</body>
</html>
