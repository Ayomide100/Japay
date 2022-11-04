import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
    //   <div>
    //     <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
    //     <div className="Clock-hours">
    //       {this.leading0(this.state.hours)} Hours
    //     </div>
    //     <div className="Clock-minutes">
    //       {this.leading0(this.state.minutes)} Minutes
    //     </div>
    //     <div className="Clock-seconds">
    //       {this.leading0(this.state.seconds)} Seconds
    //     </div>
    //   </div>
    <>
        <div class="cs-height_10 cs-height_lg_10"></div>
            <div class="cs-countdown" data-countdate="24 August 2022">
            <div class="cs-countdown_item">
                <div class="cs-countdown_number">
                    <div class="cs-count_days">{this.leading0(this.state.days)}</div>
                </div>
                <h3 class="cs-countdown_text">Days</h3>
            </div>
            <div class="cs-countdown_item">
                <div class="cs-countdown_number">
                <div class="cs-count_hours">
                    {this.leading0(this.state.hours)}
                </div>
                </div>
                <h3 class="cs-countdown_text">Hours</h3>
            </div>
            <div class="cs-countdown_item">
                <div class="cs-countdown_number">
                    <div class="cs-count_minutes">
                        {this.leading0(this.state.minutes)}
                    </div>
                </div>
                <h3 class="cs-countdown_text">Min</h3>
            </div>
            <div class="cs-countdown_item">
                <div class="cs-countdown_number">
                    <div class="cs-count_seconds">
                        {this.leading0(this.state.seconds)}
                    </div>
                </div>
                <h3 class="cs-countdown_text">Sec</h3>
            </div>
            </div>
    </>
    );
  }
}
export default Clock;
