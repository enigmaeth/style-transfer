import * as React from 'react';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
// import { Image } from 'office-ui-fabric-react/lib/Image';

export class WebSlider extends React.Component<
  {},
  {
    value: number;
    images: Array<string>;
    index: number;
  }
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: 0,
      images: this.fillArray(500),
      index: 0
    };
  }

  fillArray(len: number) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push('images/step_' + (i+1)*10 + '.png');
    }
    return arr;
  }

  public render(): JSX.Element {
    // const resize = 0.60;
    // const width_ = Math.floor(1920*resize) + 'em';
    // const height_ = Math.floor(1080*resize) + 'em';
    return (
        <div className='box'>
            <Slider
                className='slider'
                min={1}
                max={this.state.images.length}
                step={1}
                defaultValue={Math.floor((this.state.images.length)*0.35)}
                onChange={(value: any) => this.setState({ index: value-1})}
            />
            <img
            src={this.state.images[this.state.index]}
            alt="Sublime"
            width={'960px'}
            height={'540px'}
            />
        </div>
    );
  }
}