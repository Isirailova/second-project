import React from "react";
import "./main.style.css";

const MainContent = () => {
  return (
    <main>
      <h2>About Chicago</h2>
      <div class="about">
        <div class="img1">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/65186ddc208e8185b30820f3/Dramatic-Sunset---Downtown-Chicago/960x0.jpg?format=jpg&width=960"
            alt="Chicago"
          ></img>
        </div>
        <div class="text">
          <p>
            Chicago, on Lake Michigan in Illinois, is among the largest cities
            in the U.S. Famed for its bold architecture, it has a skyline
            punctuated by skyscrapers such as the iconic John Hancock Center,
            1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic
            Tribune Tower. The city is also renowned for its museums, including
            the Art Institute of Chicago with its noted Impressionist and
            Post-Impressionist works. Chicago is the most populous city in the
            U.S. state of Illinois and the third-most populous in the United
            States after New York City and Los Angeles. With a population of
            2,746,388 in the 2020 census, it is also the most populous city in
            the Midwest. As the seat of Cook County, the second-most populous
            county in the U.S., Chicago is the center of the Chicago
            metropolitan area. Chicago is an international hub for finance,
            culture, commerce, industry, education, technology,
            telecommunications, and transportation. It has the largest and most
            diverse derivatives market in the world, generating 20% of all
            volume in commodities and financial futures alone.O'Hare
            International Airport is routinely ranked among the world's top six
            busiest airports by passenger traffic, and the region is also the
            nation's railroad hub.
          </p>
        </div>
      </div>

      <h2>Top Attractions</h2>
      <div class="top">
        <ul>
          <li>Millennium Park</li>
          <li>Art Institute of Chicago</li>
          <li>Lincoln Park Zoo</li>
          <li>Willis Tower Skydeck</li>
          <li>The Field Museum</li>
          <li>Shedd Aquarium</li>
          <li>Chicago Riverwalk</li>
          <li>Chicago Theatre</li>
          <li>Navy Pier</li>
        </ul>
      </div>
    </main>
  );
};

export default MainContent;
