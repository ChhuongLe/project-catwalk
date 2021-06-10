import React from 'react';
import styled from 'styled-components';
import Tile from './ReviewTile';

const ReviewArea = styled.div`
  grid-area: ReviewList;

  `;

const formatTile = (data) => <Tile key={data.review_id} data={data} />;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hasError: false,
    };
  }

  // static getDerivedStateFromError(err) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  render() {
    const { reviews } = this.props;
    // const { hasError } = this.state;
    console.log(reviews.results);
    if (!reviews) {
      return (
        <>
          Still loading Review List...
        </>
      );
    }
    return (
      <ReviewArea>
        {reviews.results.map(formatTile)}
      </ReviewArea>
    );
  }
}

export default ReviewList;
