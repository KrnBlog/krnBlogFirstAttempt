  <div class="container x-scroll x-mandatory">
    <div class="wrapper">
      <div class="element">1</div>
      <div class="element">2</div>
      <div class="element">3</div>
      <div class="element">4</div>
    </div>
  </div>

  .no-support {
  text-align: center;
  padding: 5px;
  width: 450px;
  margin-left: auto;
  margin-right: auto;
  background: #ee6620;
  color: #fff;
  font-size: 16px;
}

@supports(scroll-snap-type: y mandatory) {
  .no-support {
    display: none;
  }
}

.example-wrapper {
  text-align: center;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.container {
  width: 320px;
  height: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #333;
  overflow: scroll;
  position: relative;
}

.element {
  width: 300px;
  height: 300px;
  scroll-margin: 10px;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  color: white;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.element:nth-child(1) {
  background: #1d1e21;
}
.element:nth-child(2) {
  background: #ee6620;
}
.element:nth-child(3) {
  background: #777ba0;
}
.element:nth-child(4) {
  background: #da1e62;
}

.x-mandatory {
  scroll-snap-type: x mandatory;
}

.y-mandatory {
  scroll-snap-type: y mandatory;
}

.both-mandatory {
  scroll-snap-type: both mandatory;
}

.x-proximity {
  scroll-snap-type: x proximity;
}

.y-proximity {
  scroll-snap-type: y proximity;
}

.both-proximity {
  scroll-snap-type: both proximity;
}

/* Below here just styles the container & elements so they look nice */
.x-scroll .wrapper {
  width: 1240px;
}

.x-scroll .element {
  float: left;
  margin-right: 10px;
}


.y-scroll .element {
  margin-bottom: 10px;
}

.both-scroll .wrapper {
  width: 620px;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-gap: 10px;
}