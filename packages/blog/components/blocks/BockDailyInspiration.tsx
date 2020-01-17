import React, { FC } from "react";
import styled from "styled-components";
import { LayoutBlock, LayoutBlockTitle, LayoutBlockContent } from "../layout";

interface BockDailyInspirationProps {
  dailyInspiration: any;
}

const StyledBockDailyInspiration = styled.div`
  img {
    width: 100%;
  }
`;

export const BockDailyInspiration: FC<BockDailyInspirationProps> = ({
  dailyInspiration
}) => {
  console.log(dailyInspiration);
  return (
    <LayoutBlock>
      {/* <LayoutBlockTitle title="test" /> */}
      <LayoutBlockTitle title={dailyInspiration.fields.title} />
      <LayoutBlockContent>
        <StyledBockDailyInspiration>
          <img
            src={
              dailyInspiration.fields.content.fields.picture[0].fields.file.url
            }
            alt={
              dailyInspiration.fields.content.fields.picture[0].fields.file
                .fileName
            }
          />
        </StyledBockDailyInspiration>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
