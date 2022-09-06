import styled from 'styled-components';

const TitleStyle = styled.h3`
  border-bottom: 1px solid rgba(226, 228, 232);
  padding-bottom: 24px;
  padding-top: 80px;
  margin-bottom: 48px;
  font-weight: bold;
  font-size: 32px;
  color: rgba(48, 53, 65);
`;
export default function Title(props) {
  return <TitleStyle>{props.text}</TitleStyle>;
}
