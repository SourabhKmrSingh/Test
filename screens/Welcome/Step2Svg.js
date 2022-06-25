import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
  Rect,
  Text,
  TSpan,
  Circle,
} from "react-native-svg";

const Step2Svg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={412} height={847} {...props}>
    <Defs>
      <LinearGradient
        id="b"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#37aadd" />
        <Stop offset={1} stopColor="#1f64cc" />
      </LinearGradient>
      <ClipPath id="a">
        <Path d="M0 0h412v847H0z" />
      </ClipPath>
    </Defs>
    <G data-name="Onboarding \u2013 3" clipPath="url(#a)">
      <Path fill="url(#b)" d="M0 0h412v847H0z" />
      <Rect
        data-name="Rectangle 231"
        width={344}
        height={215}
        rx={10}
        transform="translate(35 240)"
        fill="#fff"
      />
      <Rect
        data-name="Rectangle 287"
        width={344}
        height={215}
        rx={10}
        transform="translate(35 498)"
        fill="#fff"
      />
      <Text
        data-name="Self Help + zenquip Assist"
        transform="translate(207 359)"
        fill="#606060"
        fontSize={18}
        fontFamily="Arial-BoldMT, Arial"
        fontWeight={700}
      >
        <TSpan x={-109.947} y={0}>
          {"Self Help + zenquip Assist"}
        </TSpan>
      </Text>
      <Text
        data-name="Psychiatrist + zenquip Assist"
        transform="translate(207 619)"
        fill="#606060"
        fontSize={18}
        fontFamily="Arial-BoldMT, Arial"
        fontWeight={700}
      >
        <TSpan x={-122.462} y={0}>
          {"Psychiatrist + zenquip Assist"}
        </TSpan>
      </Text>
      <G data-name="Group 1194" transform="translate(178 263)">
        <Circle
          data-name="Ellipse 14"
          cx={29.5}
          cy={29.5}
          r={29.5}
          fill="#254069"
        />
        <G data-name="029-mental health">
          <G data-name="Group 1208" fill="#fff">
            <Path
              data-name="Path 1275"
              d="M35.357 23.794a3.143 3.143 0 0 0-.778-3.2 3.093 3.093 0 0 0-4.363 0 .6.6 0 0 1-.447.188.627.627 0 0 1-.433-.188 3.093 3.093 0 0 0-4.366 0 3.143 3.143 0 0 0-.778 3.2c.724 2.7 4.035 5.419 5.483 5.808a.381.381 0 0 0 .2 0c1.447-.389 4.758-3.108 5.482-5.808Zm-2.99 3.209a8.29 8.29 0 0 1-2.592 1.831 8.29 8.29 0 0 1-2.592-1.831 8.066 8.066 0 0 1-2.254-3.409 2.387 2.387 0 0 1 .581-2.461 2.33 2.33 0 0 1 3.286 0 1.387 1.387 0 0 0 .954.412 1.369 1.369 0 0 0 1-.412 2.33 2.33 0 0 1 3.286 0 2.387 2.387 0 0 1 .58 2.461 8.066 8.066 0 0 1-2.249 3.409Z"
            />
            <Path
              data-name="Path 1276"
              d="M31.989 22.248a.908.908 0 0 0-.9.914v.807a.934.934 0 0 1-.915.95h-.018V23.01h.1a.382.382 0 1 0 0-.763h-.961a.382.382 0 0 0 0 .763h.1v1.908h-.018a.934.934 0 0 1-.915-.95v-.807a.908.908 0 0 0-.9-.914.382.382 0 0 0 0 .763.146.146 0 0 1 .137.151v.807a1.7 1.7 0 0 0 1.678 1.713h.018v1.145h-.1a.382.382 0 0 0 0 .763h.961a.382.382 0 1 0 0-.763h-.1v-1.145h.018a1.7 1.7 0 0 0 1.678-1.713v-.807a.146.146 0 0 1 .137-.151.382.382 0 0 0 0-.763Z"
            />
            <Path
              data-name="Path 1277"
              d="M37.839 23.557h-.079a1.568 1.568 0 0 0-1.595 1.533l-.073 3.724a1.313 1.313 0 0 0-.67.238 9.18 9.18 0 0 0-1.26 1.138c-.245.245-.522.522-.84.827a5.729 5.729 0 0 0-1.954 4.794s0 0 0 .007v3.031a.382.382 0 0 0 .382.382h3.566a.382.382 0 0 0 .382-.382V35.86l2.077-2.355a3.131 3.131 0 0 0 .776-2.21v-7.007a.732.732 0 0 0-.712-.731Zm-.052 7.738a2.382 2.382 0 0 1-.584 1.7l-2.174 2.465a.382.382 0 0 0-.1.252v2.751h-2.8v-2.646a4.982 4.982 0 0 1 1.72-4.255c.323-.31.6-.59.85-.837a8.943 8.943 0 0 1 1.137-1.038c.253-.165.342-.118.424-.069l.01.006c.02.013.062.046.076.166a4.013 4.013 0 0 1-1.425 2.491.382.382 0 1 0 .529.55 4.583 4.583 0 0 0 1.654-3.126.984.984 0 0 0-.256-.586l.079-4.018a.8.8 0 0 1 .817-.785h.042v6.976Z"
            />
            <Path
              data-name="Path 1278"
              d="M27.389 32.406a.382.382 0 1 0-.648.4 5.39 5.39 0 0 1 .678 3.012v2.646h-2.8v-2.751a.381.381 0 0 0-.1-.252l-2.175-2.466a2.381 2.381 0 0 1-.583-1.7v-6.976h.042a.8.8 0 0 1 .817.785l.079 4.018a.984.984 0 0 0-.256.586 4.583 4.583 0 0 0 1.654 3.125.382.382 0 0 0 .529-.55 4.014 4.014 0 0 1-1.425-2.491c.013-.12.056-.153.076-.166l.008-.005c.194-.114.405-.034 1.188.735a.382.382 0 0 0 .535-.544c-.493-.485-1-.981-1.552-1l-.073-3.724a1.568 1.568 0 0 0-1.595-1.533h-.079a.732.732 0 0 0-.711.732v7.007a3.13 3.13 0 0 0 .775 2.208l2.079 2.357v2.989a.382.382 0 0 0 .382.382h3.563a.382.382 0 0 0 .382-.382V35.81a6.1 6.1 0 0 0-.79-3.404Z"
            />
            <Path
              data-name="Path 1279"
              d="M26.345 31.291a.382.382 0 0 0-.382-.382.382.382 0 1 0 .382.382Z"
            />
          </G>
        </G>
      </G>
      <G data-name="Group 1207" transform="translate(177.646 520)">
        <Circle
          data-name="Ellipse 14"
          cx={29.5}
          cy={29.5}
          r={29.5}
          transform="translate(.354)"
          fill="#254069"
        />
        <G data-name="043-psychology">
          <G data-name="Group 1209" fill="#fff">
            <Path
              data-name="Path 1280"
              d="M23.435 28.218a.454.454 0 1 0 .454.454.454.454 0 0 0-.454-.454Z"
            />
            <Path
              data-name="Path 1281"
              d="M40.293 22.537a5.9 5.9 0 0 0-11.182-2.627h-.257a7.794 7.794 0 0 0-5.513 2.268 7.633 7.633 0 0 0-2.295 5.459 5.193 5.193 0 0 1-1.126 2.312 1.791 1.791 0 0 0-.366 1.93c.2.4.71.865 1.948.956v1.986a2.45 2.45 0 0 0 2.458 2.436c1.185 0 1.837.044 2.115.284s.358.828.429 1.911a.454.454 0 0 0 .453.424h6.508a.454.454 0 0 0 .453-.484 29.25 29.25 0 0 1-.078-2.1.454.454 0 0 0-.451-.457.454.454 0 0 0-.454.451c0 .483.012 1.014.05 1.679h-5.6a2.945 2.945 0 0 0-.711-2.114c-.545-.471-1.387-.505-2.709-.505a1.541 1.541 0 0 1-1.55-1.528v-.608h1.362a.454.454 0 0 0 0-.908h-1.364v-.905a.454.454 0 0 0-.454-.454c-.845 0-1.441-.179-1.595-.479-.109-.212 0-.572.3-.986a5.966 5.966 0 0 0 1.29-2.841 6.867 6.867 0 0 1 6.8-6.818 5.9 5.9 0 0 0 6.966 7.468 6.728 6.728 0 0 1-.978 2.888 13.726 13.726 0 0 0-1.02 1.949.454.454 0 1 0 .838.35 12.826 12.826 0 0 1 .954-1.82 7.632 7.632 0 0 0 1.139-3.666 5.91 5.91 0 0 0 3.64-5.451Zm-5.9 4.993a4.993 4.993 0 1 1 4.992-4.993 5 5 0 0 1-4.992 4.993Z"
            />
            <Path
              data-name="Path 1282"
              d="M33.561 34.803a.454.454 0 1 0 .454.454.454.454 0 0 0-.454-.454Z"
            />
            <Path
              data-name="Path 1283"
              d="M37.028 19.814a1.08 1.08 0 0 0-1.071 1.087v.96a1.111 1.111 0 0 1-1.088 1.13h-.023v-2.269h.118a.454.454 0 1 0 0-.908H33.82a.454.454 0 1 0 0 .908h.118v2.269h-.022a1.111 1.111 0 0 1-1.088-1.13v-.96a1.08 1.08 0 0 0-1.07-1.087.454.454 0 0 0 0 .908.174.174 0 0 1 .163.18v.96a2.019 2.019 0 0 0 2 2.038h.022v1.362h-.118a.454.454 0 1 0 0 .908h1.144a.454.454 0 1 0 0-.908h-.123v-1.363h.022a2.019 2.019 0 0 0 2-2.038v-.96a.174.174 0 0 1 .163-.18.454.454 0 0 0 0-.908Z"
            />
          </G>
        </G>
      </G>
      <Text
        data-name="We made it Simple"
        transform="translate(28 69)"
        fill="#fff"
        fontSize={30}
        fontFamily="Arial-BoldMT, Arial"
        fontWeight={700}
      >
        <TSpan x={0} y={0}>
          {"We made it Simple"}
        </TSpan>
      </Text>
      <Text
        data-name="We offer Self help, Psychiatrist therapy by consulting doctors and Assist you step by step through our app to complete treatment."
        transform="translate(28 96)"
        fill="#fff"
        fontSize={18}
        fontFamily="ArialMT, Arial"
      >
        <TSpan x={0} y={16}>
          {"We offer Self help, Psychiatrist therapy by "}
        </TSpan>
        <TSpan x={0} y={44}>
          {"consulting doctors and Assist you step by "}
        </TSpan>
        <TSpan x={0} y={72}>
          {"step through our app to complete treatment."}
        </TSpan>
      </Text>
      <Text
        data-name="You can set your own targets / Goals and track activity."
        transform="translate(57 376)"
        fill="#606060"
        fontSize={16}
        fontFamily="ArialMT, Arial"
      >
        <TSpan x={0} y={14} xmlSpace="preserve">
          {" You can set your own targets / Goals and "}
        </TSpan>
        <TSpan x={0} y={42}>
          {"track activity."}
        </TSpan>
      </Text>
      <Text
        data-name="Doctor prescribe medication / Exercise and helps to solve critical conditions"
        transform="translate(57 636)"
        fill="#606060"
        fontSize={16}
        fontFamily="ArialMT, Arial"
      >
        <TSpan x={0} y={14}>
          {"Doctor prescribe medication / Exercise "}
        </TSpan>
        <TSpan x={0} y={42}>
          {"and helps to solve critical conditions "}
        </TSpan>
      </Text>
    </G>
  </Svg>
);

export default Step2Svg;
