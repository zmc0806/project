<script>
  import { marked } from 'marked';

  let markdownText = `# Explore the Visualization!
  ### First! Select a year. Watch as our interactive globe comes alive! Hover to see a line chart detailing the GDP trajectory over time – the heartbeat of economies pulsing on your screen.
`;

  let htmlContent = marked.parse(markdownText);

  let markdownTextMiddle = `# Interpreting GDP
  #### As you navigate through the vivid tapestry of our interactive globe, I invite you to pause and cast your eyes upon the year 2021. By looking at the bar chart showing below. We notice taht *<u>Ireland</u>* emerges as a dark horse, boasting a higher GDP than the *<u>United States</u>*. (You may also change the year to see how the bar chart is changing! Right now, Let's focus on year 2021)
### For those of us residing in the bustling cities and quiet towns of America, a question dangles in the air – is it time to pack our bags to living in this Emerald Isle?
`;
  let markdownTextBottom = `# BUT!
  #### Hold that thought, and let's not rush to conclusions or the nearest airport! Before you start looking up Irish Gaelic lessons, take a moment to delve into the next chart, one that paints a different picture. When we shift our gaze from GDP to average annual income, the stars realign, and it's the US that shines brighter in terms of earnings. (Hover to see the actual values)
  `;
  let markdownTextBottom2 = `# Why? GDP vs. Personal Wealth: Unveiling the Truth
  #### This revelation might seem puzzling at first – how can a country with a higher GDP not necessarily be the land of greater personal fortunes? Here lies the crux of a common misconception: GDP, while a measure of a country's economic performance, isn't a direct passport to personal wealth. It's a national scorecard, not an individual one. The wealth of a nation doesn't always trickle down evenly to its citizens – factors like tax policies, social services, cost of living, and income distribution play significant roles in shaping the financial realities of the populace.

  ### So, while Ireland's impressive GDP is commendable, it doesn't necessarily mean that every Irish resident is walking around with deeper pockets than their American counterparts.

  ### Now, with this newfound insight, let's turn the page to the *<u>Gini Coefficient</u>*, where we will uncover the layers of income inequality and explore the landscape of wealth distribution. Join me as we continue to unravel the complex yarn of economics and society....


  `;

  let htmlContentBottom = marked.parse(markdownTextBottom);
  let htmlContentBottom2 = marked.parse(markdownTextBottom2);

  let htmlContentMiddle= marked.parse(markdownTextMiddle);


  let url_gdp = "https://zmc0806.github.io/project/gdp"; 
  let url_gini = "https://zmc0806.github.io/project/gini"; 
  let url_home = "https://zmc0806.github.io/project/home";
</script>

<!DOCTYPE html>
<html lang="en">
    <head>
        <style>
            /* Styles for Home link container */
#home-link-container {
  position: absolute;
  top: 8px;
  right: 5px;
}

#home-link-container a {
  /* Style for your Home link */
  padding: 5px;
  background: #f8f9fa;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Styles for bottom right link container */
#bottom-right-link-container {
  position: fixed;
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

#link-container {
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  text-align: right;
}

#link-container a {
  display: inline-block;
  margin-left: 10px; /* Adds space between the buttons if needed */
  padding: 10px;
  background: #f8f9fa; /* Example background color */
  color: #007bff; /* Example text color */
  text-decoration: none;
  border: 1px solid #ddd; /* Example border */
  border-radius: 5px; /* Rounded corners */
}

#link-container a:hover {
  background: #e2e6ea; /* Darker background on hover */
}

        body {
        min-height: 2500px; /* Adjust this value to change the page length */
        background-color: #F5F5DC;
      }
      #bar2 {
  min-height: 600px; /* or whatever height you desire */
}
          .bar {
            fill: steelblue;
        }
        .bar2{
            fill: green;
        }
        
        .bar:hover {
            fill: orange;
        }
        .x-axis-label {
    font-size: 14px; /* Adjust font size as needed */
}
        .axis path,
        .axis line {
            fill: none;
            stroke: #000;
            shape-rendering: crispEdges;
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
    top: 200px; /* Adjust as needed */
    right: 250px; /* Adjust as needed */
    width: 300px; /* Maintain or adjust size as needed */
    height: 900px; /* Maintain or adjust size as needed */
}

        </style>
    </head>
<body>
    
    <!-- Dropdown for selecting a year -->
    <div id="home-link-container">
        <a href="{url_home}" target="_blank" rel="noopener noreferrer">Back To HOME Page</a>
      </div>
    <div id="visualizationContainer" style="display: flex; justify-content: space-between; align-items: start;">
        <div id="lineGraphContainer" style="width: 300px; height: 200px;">
            <!-- Line graph will be rendered here by Plotly -->
        </div>
    </div>
    <div>{@html htmlContent}</div>
    <label for="yearSelector" style="font-size: 20px;">Which year are you interested in?</label>
    <select id="yearSelector" style="font-size: 15px;" ></select>
    <svg>
        <div>{@html htmlContentMiddle}</div>
        <div id="barChartContainer"></div> <!-- Container for the bar chart -->
        <div>{@html htmlContentBottom}</div>
        <div id="bar2" style="width: 960px; height: 500px;"></div>
        <div>{@html htmlContentBottom2}</div>
        <div id="link-container">
            <a href="{url_gini}" target="_blank" rel="noopener noreferrer">Let's Explore What is Gini Coefficient!</a>
          </div>
    </svg>
    <!-- D3.js and TopoJSON for map rendering -->
    <script src="https://d3js.org/d3.v4.min.js"></script>
    <script src="https://d3js.org/topojson.v1.min.js"></script>
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script> <!-- Plotly.js for line graph -->

    <script>
        // Place this at the top of your D3.js script, after setting up the main SVG
// Define axes here as well

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
        const gdpThresholds = [500, 1000, 5000, 10000, 20000, 50000];
        const colorRange = ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#31a354", "#006d2c"];

        // Create a threshold scale
        const colorScale = d3.scaleThreshold()
            .domain(gdpThresholds)
            .range(colorRange);
            
        const margin = { top: 20, right: 240, bottom: 70, left: 70 },
              barChartWidth = 1000 ,
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
        const gdpPerCapita = countryData.map(d => +d["GDP per capita, PPP (constant 2017 international $)"]);

        return {
            years: years,
            gdpPerCapita: gdpPerCapita
        };
    }
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
        title: `${countryName} - GDP Per Capita Over Time`,
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
        title: `${countryName} - GDP Per Capita Over Time`,
        xaxis: { title: 'Year' },
        yaxis: { title: 'GDP per capita' },
        width: 500, // Adjust width as needed
        height: 500, // Adjust height as needed
        margin: { // Adjust margins as needed
            l: 50,
            r: 50,
            b: 50,
            t: 30,
            pad: 4
        },
    };

    Plotly.newPlot('lineGraphContainer', data, layout);
}

// Add a title to the SVG
svgContainer.append("text")
  .attr("x", width / 2  ) // This will position the text in the center of the SVG
  .attr("y", margin.top + 10) // This positions the text from the top of the SVG
  .attr("text-anchor", "middle") // This centers the text (horizontally)
  .style("font-size", "24px") // Change the font size as needed
  .style("font-weight", "bold") // Optional: makes the text bold
  .text("GDP Per Capita Over Time 1990 - 2021"); // Replace with your actual title
            
 const barSvg = d3.select('#barChartContainer')
    .append('svg')
    .attr('width', barChartWidth + margin.left + margin.right)
    .attr('height', barChartHeight + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

    d3.csv("gdp-per-capita-worldbank.csv", function(error, data) {
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
                countryCasesMap[d.Entity] = +d["GDP per capita, PPP (constant 2017 international $)"];
            });

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
        function drawGlobe() {

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
                    .style("fill", d => countryCasesMap[d.properties.name] ? "#32CD32" : "#AAAAAA") // Fallback color if no data
                    .on("mouseover", function(d) {
                    d3.select(this).style("fill", "#FFD700"); // Highlight color
                    const countryName = d.properties.name;
                    createLineGraph(countryName); // This line was corrected
                })
                .on("mouseout", function(d) {
                    d3.select(this).style("fill", d => countryCasesMap[d.properties.name] ? "#32CD32" : "#AAAAAA"); // Reset color
                    // Clear the line graph container
                    d3.select('#lineGraphContainer').html(''); // This line ensures the line graph is cleared on mouseout
                });
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

        let rotationTimer; // 定义一个变量来跟踪旋转计时器

        function enableRotation() {
            if (rotationTimer) {
                rotationTimer.stop();
            }

            let lastTime = Date.now(); // 初始化上一次旋转的时间

            rotationTimer = d3.timer(function() {
                if (!isDragging) {
                    const now = Date.now(); // 获取当前时间
                    const delta = now - lastTime; // 计算时间差
                    lastTime = now; // 更新上一次旋转的时间

                    const rotate = projection.rotate();
                    const rotationSpeed = 0.005; // 控制旋转速度，可根据需要调整
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
        function createIncomeBarChartV4() {
    const margin = { top: 40, right: 50, bottom: 120, left: 110 },
        width = 960 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    const svg = d3.select("#bar2").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add the title
    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("text-decoration", "underline")
        .text("Top 15 Countries by Average  Annual Income");

    // Load and process the data
    d3.csv("income.csv", function (error, data) {
        if (error) throw error;

        // Convert strings to numbers and sort and slice the data
        data.forEach(function (d) {
            d.value = +d.value;
        });

        data.sort(function (a, b) {
            return a.value - b.value;
        }).slice(0, 15);

        const x = d3.scaleBand()
            .range([0, width])
            .padding(0.1);
        const y = d3.scaleLinear()
            .range([height, 0]);

        x.domain(data.map(function (d) { return d.country; }));
        y.domain([0, d3.max(data, function (d) { return d.value; })]);

        // Add tooltip
        const tooltip = d3.select("#bar2").append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px");

        // Add bars
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", function (d) { return "bar " + (d.country === "United States" || d.country === "Ireland" ? "bar2" : ""); })
            .attr("x", function (d) { return x(d.country); })
            .attr("width", x.bandwidth())
            .attr("y", function (d) { return y(d.value); })
            .attr("height", function (d) { return height - y(d.value); })
            .on("mouseover", function (d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                tooltip.html("Value: " + d.value)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY + 200 - height + y(d.value)) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // Add X axis
      // Add X axis
svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("class", "x-axis-label") // Add class here
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-65)");


        // Add Y axis
        svg.append("g")
            .call(d3.axisLeft(y));
    });
}



// Call the function to draw the second bar chart
createIncomeBarChartV4();
        // Function to update the bar chart
       // Assuming that your sortedData is correctly sorted and contains the data for the selected year
function updateBarChart(selectedYear) {
    // Filter and sort data
    const sortedData = csvData.filter(d => d.Year == selectedYear)
        .sort((a, b) => b["GDP per capita, PPP (constant 2017 international $)"] - a["GDP per capita, PPP (constant 2017 international $)"])
        .slice(0, 15); // Take top 15

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
    .attr("width", d => xScale(+d["GDP per capita, PPP (constant 2017 international $)"]))
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
    xScale.domain([0, d3.max(sortedData, d => +d["GDP per capita, PPP (constant 2017 international $)"])]);
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
        .attr('width', d => xScale(+d["GDP per capita, PPP (constant 2017 international $)"]))
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
        .attr("x", d => xScale(d["GDP per capita, PPP (constant 2017 international $)"]) + 120)
        .attr("y", d => yScale(d.Entity) + yScale.bandwidth() / 2 + 20 )
        .attr("dy", ".35em")
        .attr("text-anchor", "start")
        .text(d => d["GDP per capita, PPP (constant 2017 international $)"]);
}

        // Call updateBarChart when the year is selected
        d3.select("#yearSelector").on("change", function() {
            updateMapForYuear(this.value);
            updateBarChart(this.value);
        });

        // Initialize the bar chart with the first available year
        updateBarChart(years[0]);

// Assuming d3 and the necessary data are correctly imported and available
    </script>


</body>
    
</html>
