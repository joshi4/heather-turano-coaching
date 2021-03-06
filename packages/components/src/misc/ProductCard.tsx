import {
  makeColor,
  makeInset,
  makeOutset,
  makeResponsive,
  makeSize,
} from "@heather-turano-coaching/design-system";
import { rgba } from "polished";
import React, { FC, Fragment, memo, useMemo } from "react";
import styled, { css } from "styled-components";

import { List, ListItem } from "../lists";
import { Line } from "./Line";
import { Button, Heading, Typography } from "..";

export interface ProductCardProps {
  description?: string;
  name: string;
  priceInCents: number;
  features: string[];
  onClick: () => void;
  color: string;
  img: string;
  imgAlt: string;
}

const StyledProductCard = styled.div`
  text-align: center;
  padding: ${makeInset({ vertical: 20, horizontal: 20 })};
  box-shadow: rgba(50, 50, 50, 0.1) 0px 16px 32px,
    rgba(0, 0, 0, 0.07) 0px 6px 16px;
  border-radius: ${makeSize({ custom: 4 })};
  ${makeOutset({ vertical: "sm", horizontal: "sm" })};
  background: ${makeColor({ fixed: "light" })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: css`
      margin-left: 0;
      margin-right: 0;
    `,
  })}
`;

const StyledProductImage = styled.img`
  height: ${makeSize({ custom: 150 })};
  display: block;
  margin: 0 auto;
`;

const StyledProductHeader = styled.header<{ productColor: string }>`
  ${makeInset({ vertical: "sm", horizontal: "sm" })};
  background: ${({ productColor }) => rgba(productColor, 0.2)};

  h5 {
    text-transform: uppercase;
    font-weight: 800;
    color: ${makeColor({ fixed: "dark" })};
  }
`;

const StyledProductPrice = styled.header<{ productColor: string }>`
  ${makeInset({ vertical: "sm", horizontal: "sm" })};

  p {
    display: inline-block;
    color: ${({ productColor }) => productColor};
    font-weight: 800;
  }
`;

const StyledProductFooter = styled.footer`
  ${makeInset({ vertical: 16, horizontal: 16 })};
  button {
    width: 100%;
  }
`;

export const ProductCard: FC<ProductCardProps> = memo(
  ({
    name,
    priceInCents,
    features,
    onClick,
    color,
    img,
    imgAlt,
    description,
  }) => {
    return (
      <StyledProductCard>
        <StyledProductImage src={img} alt={imgAlt} />
        <StyledProductHeader productColor={color}>
          <Heading fontSize="h5">{name}</Heading>
          {description && (
            <Typography variant="paragraph" fontSize="xs">
              {description}
            </Typography>
          )}
        </StyledProductHeader>
        <StyledProductPrice productColor={color}>
          {priceInCents === 0 && (
            <Typography variant="paragraph" fontSize="h2">
              FREE!
            </Typography>
          )}
          {priceInCents !== 0 && (
            <>
              <Typography variant="paragraph" fontSize="xs">
                $
              </Typography>
              <Typography variant="paragraph" fontSize="h2">
                {priceInCents / 100}
              </Typography>
              <Typography variant="paragraph" fontSize="xs">
                .00
              </Typography>
            </>
          )}
        </StyledProductPrice>
        <List>
          {useMemo(
            () =>
              features.map((feature, i) => (
                <Fragment key={i.toString()}>
                  <ListItem key={feature} label={feature} />
                  {i !== features.length - 1 && <Line />}
                </Fragment>
              )),
            [features]
          )}
        </List>
        <StyledProductFooter>
          <Button
            label={priceInCents === 0 ? "Sign up" : "Purchase"}
            onClick={onClick}
            styleType="secondary"
          />
        </StyledProductFooter>
      </StyledProductCard>
    );
  }
);
