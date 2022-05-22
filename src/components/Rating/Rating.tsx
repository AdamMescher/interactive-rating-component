import * as React from "react";
import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/images/icon-star.svg";
import { ReactComponent as InfoIcon } from "../../assets/images/info-icon.svg";
import { ReactComponent as ThankYouIllustration } from "../../assets/images/illustration-thank-you.svg";

const Rating = () => {
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [selectedRating, setSelectedRating] = React.useState<string | null>(
    null
  );
  const [showSubmitError, setShowSubmitError] = React.useState(false);
  const options = ["1", "2", "3", "4", "5"];
  const handleOptionClick = (rating: string): void => {
    if (showSubmitError === true) {
      setShowSubmitError(false);
    }
    setSelectedRating(rating);
  };
  const handleSubmitClick = (): void => {
    if (selectedRating) {
      setSubmitted(true);
      return;
    }
    setShowSubmitError(true);
  };
  if (submitted) {
    return (
      <SubmittedWrapper>
        <IllustrationContainer>
          <ThankYouIllustration />
        </IllustrationContainer>
        <Choice>You selected {selectedRating} out of 5</Choice>
        <Title>Thank you!</Title>
        <SubmittedCopy>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </SubmittedCopy>
      </SubmittedWrapper>
    );
  }
  return (
    <Wrapper>
      <StarIconContainer>
        <StarIcon />
      </StarIconContainer>
      <Title>How did we do?</Title>
      <Copy>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Copy>
      <RatingsContainer>
        {options.map((option) => (
          <Option
            key={option}
            onClick={() => handleOptionClick(option)}
            active={selectedRating === option}
          >
            {option}
          </Option>
        ))}
      </RatingsContainer>
      <Button onClick={handleSubmitClick}>Submit</Button>
      {showSubmitError ? (
        <ErrorMessage>
          <ErrorMessageIconContainer>
            <InfoIcon />
          </ErrorMessageIconContainer>
          <span>Please choose a rating</span>
        </ErrorMessage>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --transition: 200ms ease-in-out;
  font-family: var(--fontFamily);
  font-size: 15px;
  background: var(--darkBlue);
  max-width: 415px;
  min-width: 325px;
  display: flex;
  flex-direction: column;
  padding: 24px 28px;
  border-radius: 12px;
`;
const StarIconContainer = styled.div`
  background: white;
  width: min-content;
  height: 46px;
  width: 46px;
  line-height: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--mediumGrey);
  img {
    width: 50%;
  }
`;
const Title = styled.h3`
  font-weight: var(--fw-bold);
  letter-spacing: 0.75px;
  font-size: 24px;
  color: var(--white);
  margin-top: 32px;
`;
const Copy = styled.p`
  color: var(--lightGrey);
  margin-top: 20px;
`;
const RatingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;
const Option = styled.button<{ active: boolean }>`
  transition: var(--transition);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-weight: var(--fw-bold);
  background: ${(props) =>
    props.active ? "var(--orange)" : "var(--mediumGrey)"};
  color: ${(props) => (props.active ? "var(--white)" : "var(--lightGrey)")};
  font-weight: var(--bold);
  &:hover {
    transition: var(--transition);
    background: var(--lightGrey);
    color: var(--white);
  }
`;
const Button = styled.button`
  transition: var(--transition);
  margin-top: 28px;
  padding: 14px 0;
  border: none;
  background: var(--orange);
  color: var(--white);
  font-weight: var(--fw-bold);
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    transition: var(--transition);
    background: var(--white);
    color: var(--orange);
  }
  border-radius: 999px;
  text-transform: uppercase;
  font-size: 15px;
`;
const ErrorMessage = styled.p`
  color: cyan;
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const ErrorMessageIconContainer = styled.div`
  height: 20px;
  width: 20px;
  svg {
    fill: cyan;
  }
`;
const SubmittedWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  padding: 42px;
`;
const IllustrationContainer = styled.div``;
const Choice = styled.div`
  color: var(--orange);
  padding: 2px 20px;
  background: hsl(213deg 17% 19%);
  width: min-content;
  white-space: nowrap;
  border-radius: 75px;
  margin-top: 32px;
`;
const SubmittedCopy = styled(Copy)`
  text-align: center;
`;

export default Rating;
