import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import tw from "tailwind-react-native-classnames";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
  Text,
  TSpan,
  Circle,
  Rect,
  Ellipse,
} from "react-native-svg";

const Step3 = () => {
  return (
    <View style={tw`w-full h-full`}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={412}
        height={847}
      >
        <Defs>
          <LinearGradient
            id="c"
            x1={0.5}
            x2={0.5}
            y2={1}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="#37aadd" />
            <Stop offset={1} stopColor="#1f64cc" />
          </LinearGradient>
          <LinearGradient
            id="a"
            x1={0.5}
            y1={1}
            x2={0.5}
            y2={0.001}
            gradientUnits="objectBoundingBox"
          >
            <Stop offset={0} stopColor="gray" stopOpacity={0.251} />
            <Stop offset={0.54} stopColor="gray" stopOpacity={0.122} />
            <Stop offset={1} stopColor="gray" stopOpacity={0.102} />
          </LinearGradient>
          <LinearGradient
            id="e"
            x1={0.5}
            y1={1}
            x2={0.5}
            y2={0}
            xlinkHref="#a"
          />
          <ClipPath id="d">
            <Path fill="none" d="M-8-25h350v622H-8z" />
          </ClipPath>
          <ClipPath id="b">
            <Path d="M0 0h412v847H0z" />
          </ClipPath>
        </Defs>
        <G data-name="Onboarding \u2013 6" clipPath="url(#b)">
          <Path fill="#f2f5f7" d="M0 0h412v847H0z" />
          <Path
            data-name="Path 1434"
            d="M0 2573s185.673 312.374 415.2 0C561.664 2373.682 0 2573 0 2573Z"
            transform="rotate(34 4409.727 1188.372)"
            fill="url(#c)"
          />
          <Path
            data-name="Path 1430"
            d="M55.3 293.542s117.364 113.673 103.153 183.617S25.787 592.447 47.068 676.384"
            fill="none"
            stroke="#808495"
            strokeDasharray={10}
          />
          <Text
            data-name="Self Help + Zendoc Assist"
            transform="translate(72 61)"
            fill="#fff"
            fontSize={22}
            fontFamily="Arial-BoldMT, Arial"
            fontWeight={700}
          >
            <TSpan x={0} y={0}>
              {"Self Help + Zendoc Assist"}
            </TSpan>
          </Text>
          <Text
            data-name="How it works"
            transform="translate(206 99)"
            fill="#fff"
            fontSize={20}
            fontFamily="ArialMT, Arial"
          >
            <TSpan x={-56.675} y={0}>
              {"How it works"}
            </TSpan>
          </Text>
          <G
            data-name="Scroll Group 1"
            transform="translate(38 164)"
            clipPath="url(#d)"
            style={{
              isolation: "isolate",
            }}
          >
            <G data-name="Group 1196">
              <G data-name="Group 1216">
                <Text
                  data-name="Choose your therapy"
                  transform="translate(46 132)"
                  fill="#2e5b9f"
                  fontSize={16}
                  fontFamily="Arial-BoldMT, Arial"
                  fontWeight={700}
                >
                  <TSpan x={0} y={0}>
                    {"Choose your therapy"}
                  </TSpan>
                </Text>
                <G
                  data-name="Group 1194"
                  transform="translate(-44.094 -435.094)"
                >
                  <Circle
                    data-name="Ellipse 14"
                    cx={18}
                    cy={18}
                    r={18}
                    transform="translate(36.094 543.094)"
                    fill="#ff7600"
                  />
                  <Text
                    data-name={1}
                    transform="translate(51.094 565.094)"
                    fill="#fff"
                    fontSize={12}
                    fontFamily="ArialMT, Arial"
                  >
                    <TSpan x={0} y={0}>
                      {"1"}
                    </TSpan>
                  </Text>
                </G>
              </G>
              <G data-name="Group 1195" transform="translate(32 -2.099)">
                <Path
                  data-name="Path 782"
                  d="m138.656 32.421-4.018 7.955-12.015 5.462c-1.283 2.168-5.36 2.334-5.657.932-.333-1.573 4.951-4.105 4.951-4.105l10.049-6.8.879-5.852Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 783"
                  d="m138.183 85.805.741 5.928-4.3.3-.445-6.225Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 784"
                  d="M137.59 90.844a11.639 11.639 0 0 0 1.061-1.3c.616-.852 1.162 3.52 1.162 3.52a7.934 7.934 0 0 1 .445 2.668c-.148.889-3.557.889-4.15.741a28.03 28.03 0 0 0-3.557 0h-4.446c-3.853-1.779 0-2.964 0-2.964 1.186-.148 5.187-3.853 5.187-3.853l.889-1.63c.593-.148 1.186 2.075 1.186 2.075Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 785"
                  d="m149.298 85.879.741 5.928-4.3.3-.445-6.225Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 786"
                  d="M148.705 90.919a11.639 11.639 0 0 0 1.061-1.3c.616-.852 1.163 3.52 1.163 3.52a6.874 6.874 0 0 1 .445 2.52c-.148.889-3.557.889-4.15.741a24.116 24.116 0 0 0-3.557.148h-4.451c-3.853-1.779 0-2.964 0-2.964 1.186-.148 5.187-3.853 5.187-3.853l.889-1.63c.593-.148 1.186 2.075 1.186 2.075Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 787"
                  d="M144.407 47.642c.593.741.3 3.261.3 3.261s1.037 8.151.593 8.893.3 1.334.741 2.371a23.674 23.674 0 0 1 .889 3.557c2.52 2.075 2.371 11.56 2.371 11.56l.889 8.448c-.3.889-4.446 1.037-5.039.889s-2.371-13.487-2.371-13.487l-4-7.559s.3 20.156.3 21.046-4 .445-4.891.445-.889-14.821-.889-14.821l-.889-3.853-4.743-17.637V48.68l.741-1.037s15.405-.742 15.998-.001Z"
                  fill="#2f2e41"
                />
                <Circle
                  data-name="Ellipse 15"
                  cx={4.594}
                  cy={4.594}
                  r={4.594}
                  transform="translate(133.292 4.81)"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 788"
                  d="M135.589 11.553c.931 2.074.38 4.97-1.482 8.151l7.559-3.557-1.186-1.037.3-2.964Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 789"
                  d="M135.589 16.296a4.742 4.742 0 0 0-1.922 2.77 26.25 26.25 0 0 0-1.128 6.271l-.359 6.372-4.446 16.9c3.853 3.261 6.077 2.52 11.264-.148s5.78.889 5.78.889.445-.148 0-.593 0 0 .445-.445 0 0-.148-.445 0-.148.148-.3-.593-1.482-.593-1.482l1.188-11.115 1.482-15.71c-1.779-2.223-6.818-4.15-6.818-4.15l-4.594 3.261c-1.482.593-.3-1.779-.3-1.779Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 790"
                  d="m149.743 28.671.593 8.892-7.559 10.819c0 2.52-1.334 3.112-1.334 3.112a19.593 19.593 0 0 1-1.334-2.52 2.877 2.877 0 0 1 .445-2.964l5.187-10.967-2.223-5.484Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 791"
                  d="M147.223 19.334c2.52.889 2.964 10.523 2.964 10.523-2.964-1.63-6.521 1.037-6.521 1.037s-.741-2.52-1.63-5.78a5.664 5.664 0 0 1 1.186-5.335 4.036 4.036 0 0 1 4.001-.445Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 792"
                  d="M142.11 10.812c-.585-.468-1.383.383-1.383.383l-.468-4.211a16.7 16.7 0 0 1-4.8-.117c-1.872-.468-2.164 1.7-2.164 1.7a15.028 15.028 0 0 1-.058-2.632c.117-1.053 1.638-2.106 4.328-2.807s4.094 2.34 4.094 2.34c1.876.93 1.036 5.812.451 5.344Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 793"
                  d="M17.468 72.654c.505 2.005 4.812 6.515 9.257 10.749-6.854-16.929-2.948-35.456-2.948-35.456-1.273 7.276 16.169 43.894 16.169 43.894l-3.972 2.342-1.342 1.888c-13.454-6.178-17.164-23.417-17.164-23.417Z"
                  fill="#e6e6e6"
                />
                <Path
                  data-name="Rectangle 178"
                  fill="#e6e6e6"
                  d="M67.187 35.114h56.186v11.093H67.187z"
                />
                <Path
                  data-name="Rectangle 179"
                  fill="#e6e6e6"
                  d="M67.187 17.586h56.186v11.093H67.187z"
                />
                <Path
                  data-name="Rectangle 180"
                  fill="#e6e6e6"
                  d="M67.187 0h56.186v11.093H67.187z"
                />
                <Path
                  data-name="Path 794"
                  d="M68.385 9.894h53.79v-8.7h-53.79Z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 795"
                  d="M68.385 27.519h53.79v-8.7h-53.79Z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 796"
                  d="M68.385 45.009h53.79v-8.7h-53.79Z"
                  fill="#fff"
                />
                <Circle
                  data-name="Ellipse 16"
                  cx={3.314}
                  cy={3.314}
                  r={3.314}
                  transform="translate(69.78 2.161)"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Rectangle 181"
                  fill="#0e58c7"
                  d="M81.017 4.178h32.703v.72H81.017z"
                />
                <Path
                  data-name="Rectangle 182"
                  fill="#0e58c7"
                  d="M81.017 6.051h32.703v.72H81.017z"
                />
                <Circle
                  data-name="Ellipse 17"
                  cx={3.314}
                  cy={3.314}
                  r={3.314}
                  transform="translate(69.78 19.891)"
                  fill="#ccc"
                />
                <Path
                  data-name="Rectangle 183"
                  fill="#ccc"
                  d="M81.017 21.908h32.703v.72H81.017z"
                />
                <Path
                  data-name="Rectangle 184"
                  fill="#ccc"
                  d="M81.017 23.781h32.703v.72H81.017z"
                />
                <Circle
                  data-name="Ellipse 18"
                  cx={3.314}
                  cy={3.314}
                  r={3.314}
                  transform="translate(69.78 37.419)"
                  fill="#ccc"
                />
                <Path
                  data-name="Rectangle 185"
                  fill="#ccc"
                  d="M81.017 39.436h32.703v.72H81.017z"
                />
                <Path
                  data-name="Rectangle 186"
                  fill="#ccc"
                  d="M81.017 41.309h32.703v.72H81.017z"
                />
                <Path
                  data-name="Path 797"
                  d="M35.763 31.999s-.775 4.87 2.435 4.427c0 0 12.727-2.877 13.391-2.213s4.792.89 4.577-1.909-4.355-1.189-4.355-1.189-6.419.885-7.747.221-5.091-.443-5.091-.443Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 798"
                  d="m45.475 47.879-1.764 16.747s-.553 6.64-2.213 8.079c0 0 0 2.1-.553 2.767l-.775 8.743a20.172 20.172 0 0 1 1 3.763c-.111.553.443 2.324.332 2.545s-5.312 0-5.312 0l1.107-17.818 3.431-24.79Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 799"
                  d="M35.779 89.615s-2.321 5.853-1.11 6.559 13.926.2 13.926.2 2.119-1.312-.3-2.22a8.313 8.313 0 0 1-3.33-.908 19.3 19.3 0 0 1-2.826-2.321s-.1-2.22-.908-1.716a2.074 2.074 0 0 0-.908 1.413Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 800"
                  d="M32.2 88.821s-2.545 6.419-1.217 7.194 15.273.221 15.273.221 2.324-1.439-.332-2.435a9.116 9.116 0 0 1-3.652-1 21.157 21.157 0 0 1-3.1-2.545s-.111-2.435-1-1.881a2.274 2.274 0 0 0-1 1.549Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 801"
                  d="M42.493 47.652s-1.217 11.4-1.771 13.834a31.478 31.478 0 0 0-.664 4.87s-.111 3.541-1.107 4.538a2.991 2.991 0 0 0-.885 2.213s-1 11.178-.443 12.506 1.3 3.053.751 3.939-6.838.267-6.838-.4 0-1.217-.332-1.549 0-2.435 0-2.435-1.328-9.85-.111-12.727 1.771-10.735 1.771-10.735-.885-8.964-1.992-10.4.221-6.53.221-6.53Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 802"
                  d="M39.382 12.253a1.488 1.488 0 0 0 .717.611 21.443 21.443 0 0 1 4.325 3.476 5.077 5.077 0 0 1 .2-3.434 1.77 1.77 0 0 0 .255-1.156 1.439 1.439 0 0 0-.561-.671 17.4 17.4 0 0 0-1.711-1.168c-.414-.248-1.266-.908-1.742-.836a4.417 4.417 0 0 1-.319 1.817c-.071.143-1.12 1.473-1.164 1.361Z"
                  fill="#a0616a"
                />
                <Circle
                  data-name="Ellipse 19"
                  cx={4.538}
                  cy={4.538}
                  r={4.538}
                  transform="translate(40.501 4.601)"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 803"
                  d="M45.259 19.87s.775-3.874-1.439-5.2-4.759-2.877-4.759-2.877-.775-.111-1.107 1.549c0 0-6.308 1.217-6.972 7.194s.443 14.719.443 14.719a101.04 101.04 0 0 1-2.213 11.731s-1 .885 3.431-.443 12.174 3.763 12.174 3.763.775-.775.775-1.328 1.66-17.375 1.992-18.925-1.328-9.958-2.325-10.183Z"
                  fill="#e6e6e6"
                />
                <Path
                  data-name="Path 804"
                  d="M43.969 9.609a1.892 1.892 0 0 1 .89-.237 1.694 1.694 0 0 0 .88-.262c.429-.329.46-.965.774-1.405a2.42 2.42 0 0 1 2.141-.682 2.372 2.372 0 0 0 1.4-.211 2.1 2.1 0 0 0 .74-1.237 1.676 1.676 0 0 0-.137-1.651c-.284-.287-.731-.344-1.046-.6a46.111 46.111 0 0 0-4.54-1.176 4.422 4.422 0 0 0-5.158 2.8 13.7 13.7 0 0 0-.864 2.878c.207 1.3 1.361 2.342 1.44 3.661a2.247 2.247 0 0 1 1.372-1.631.429.429 0 0 1 .279-.034c.115.037.182.151.254.247.19.252.785.634 1.123.456.298-.159.072-.661.452-.916Z"
                  fill="#3f3d56"
                />
                <Path
                  data-name="Path 805"
                  d="M46.048 33.462a.5.5 0 0 0-.01.71l3.191 3.3a.5.5 0 0 0 .718.007l9.736-9.694a.5.5 0 0 0-.081-.779l-3.828-2.494a.5.5 0 0 0-.627.062Z"
                  fill="#3f3d56"
                />
                <Path
                  data-name="Path 806"
                  d="M59.745 27.156a.51.51 0 0 1-.067.082l-9.715 9.881a.5.5 0 0 1-.718-.007l-3.259-3.44a.5.5 0 0 1-.06-.075.452.452 0 0 0 .105.579l3.191 3.3a.5.5 0 0 0 .718.007l9.736-9.694a.5.5 0 0 0 .069-.633Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 807"
                  d="m58.843 27.275-.4-.253a.378.378 0 0 1-.543.5l-2.564-1.763a.377.377 0 0 1 .1-.671l-.2-.13a.137.137 0 0 0-.172.019l-8.625 8.476a.137.137 0 0 0 0 .2l3.132 3.052a.137.137 0 0 0 .191 0l9.1-9.208a.137.137 0 0 0-.023-.213Z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 808"
                  d="m48.889 31.578 2.646 2.495 6.293-6.218-3.194-2.079Z"
                  fill="#e6e6e6"
                />
                <Path
                  data-name="Path 809"
                  d="M47.583 29.39a.094.094 0 0 0 .129 0l.55-.55a.092.092 0 0 0 0-.13.094.094 0 0 0-.13 0l-.55.55a.092.092 0 0 0 0 .129Z"
                  fill="#3f3d56"
                />
                <Path
                  data-name="Path 810"
                  d="M46.656 30.317a.092.092 0 0 0 .13 0l.55-.55a.092.092 0 0 0-.13-.13l-.55.55a.092.092 0 0 0 0 .13Z"
                  fill="#3f3d56"
                />
                <Circle
                  data-name="Ellipse 20"
                  cx={0.618}
                  cy={0.618}
                  r={0.618}
                  transform="translate(48.332 33.101)"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 811"
                  d="M32.529 30.276s-.775 4.87 2.435 4.427c0 0 12.727-2.877 13.391-2.213s4.792.89 4.577-1.909-4.356-1.189-4.356-1.189-6.419.885-7.747.221-5.091-.443-5.091-.443Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 812"
                  d="M37.07 14.897s-4.98.553-4.98 7.747v9.186l6.087-2.545s2.545-5.976 2.324-7.636-.111-6.535-3.431-6.752Z"
                  fill="#e6e6e6"
                />
              </G>
            </G>
            <G data-name="Group 1212">
              <G data-name="Group 1217">
                <Text
                  data-name="Create a Plan / Set Goals Track activity"
                  transform="translate(153 320)"
                  fill="#2e5b9f"
                  fontSize={16}
                  fontFamily="Arial-BoldMT, Arial"
                  fontWeight={700}
                >
                  <TSpan x={0} y={0}>
                    {"Create a Plan / Set Goals"}
                  </TSpan>
                  <TSpan x={0} y={29}>
                    {"Track activity"}
                  </TSpan>
                </Text>
                <G
                  data-name="Group 1194"
                  transform="translate(64.906 -247.094)"
                >
                  <Circle
                    data-name="Ellipse 14"
                    cx={18}
                    cy={18}
                    r={18}
                    transform="translate(36.094 543.094)"
                    fill="#ff7600"
                  />
                  <Text
                    data-name={2}
                    transform="translate(51.094 565.094)"
                    fill="#fff"
                    fontSize={12}
                    fontFamily="ArialMT, Arial"
                  >
                    <TSpan x={0} y={0}>
                      {"2"}
                    </TSpan>
                  </Text>
                </G>
              </G>
              <G data-name="Group 1213" transform="translate(152.46 191.048)">
                <Circle
                  data-name="Ellipse 21"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(51.026 8.293)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 22"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(46.225 8.293)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 23"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(41.423 8.293)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 24"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(36.621 8.293)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 25"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(51.026 13.323)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 26"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(46.225 13.323)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 27"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(41.423 13.323)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 28"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(36.621 13.323)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 29"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(51.026 18.354)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 30"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(46.225 18.354)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 31"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(41.423 18.354)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 32"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(36.621 18.354)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 33"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(51.026 23.384)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 34"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(46.225 23.384)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 35"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(41.423 23.384)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 36"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(36.621 23.384)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 37"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(51.026 28.414)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 38"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(46.225 28.414)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 39"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(41.423 28.414)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 40"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(36.621 28.414)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 41"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(51.026 33.444)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 42"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(46.225 33.444)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 43"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(41.423 33.444)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 44"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(36.621 33.444)"
                  fill="#f2f2f2"
                />
                <Path
                  data-name="Path 814"
                  d="M41.644 67.517v.373a2.331 2.331 0 0 0 2.329 2.329H60.74a2.33 2.33 0 0 0 2.329-2.329v-.373a2.312 2.312 0 0 0-.54-1.49 2.392 2.392 0 0 0-.393-.373s-9.218-.209-9.218-.466h-8.944a2.332 2.332 0 0 0-2.33 2.329Z"
                  fill="#ccc"
                />
                <Path
                  data-name="Rectangle 187"
                  fill="#ccc"
                  d="M51.281 70.126h2.422v15.65h-2.422z"
                />
                <Path
                  data-name="Path 815"
                  d="M60.596 85.686c0 .262-3.67.1-8.2.1s-8.2.161-8.2-.1 3.67-2.337 8.2-2.337 8.2 2.08 8.2 2.337Z"
                  fill="#ccc"
                />
                <Path
                  data-name="Path 816"
                  d="M57.266 67.201a2 2 0 0 0-.709-2.986l-5.133-17.491-3.909 1.914 6.275 16.591a2.012 2.012 0 0 0 3.476 1.971Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 817"
                  d="m52.587 49.645-4.375 1.184a.9.9 0 0 1-1.126-.761l-.529-4.488a2.492 2.492 0 0 1 4.813-1.288l1.8 4.128a.9.9 0 0 1-.588 1.225Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 818"
                  d="M58.409 83.856h2.286l1.087-5.924h-3.371Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 819"
                  d="M57.827 83.111h4.5a2.867 2.867 0 0 1 2.867 2.867v.093h-7.365Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 820"
                  d="M61.061 80.68h-.08l-3.161-.23a.838.838 0 0 1-.71-1.123l4.23-9.5a.652.652 0 0 0-.037-.521.643.643 0 0 0-.412-.328c-1.989-.52-7.093-1.9-11.511-3.525-1.893-.694-3.085-1.7-3.543-2.981a4.208 4.208 0 0 1 .328-3.3l.03-.051 4.157.378 4.507.383 9.877 5.3a3.742 3.742 0 0 1 1.643 4.8l-4.553 10.211a.838.838 0 0 1-.765.487Z"
                  fill="#2f2e41"
                />
                <Circle
                  data-name="Ellipse 45"
                  cx={4.576}
                  cy={4.576}
                  r={4.576}
                  transform="translate(46.5 31.533)"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 821"
                  d="M57.105 83.67h2.286l1.087-5.924h-3.371Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 822"
                  d="M56.523 82.924h4.5a2.867 2.867 0 0 1 2.867 2.867v.093h-7.365Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 823"
                  d="M59.757 81.239h-.08l-3.161-.23a.838.838 0 0 1-.71-1.123l4.23-9.5a.652.652 0 0 0-.037-.521.643.643 0 0 0-.412-.328c-1.989-.52-7.093-1.9-11.511-3.525-1.893-.694-3.085-1.7-3.543-2.981a4.208 4.208 0 0 1 .328-3.3l.03-.051 4.157.378 4.507.383 9.877 5.3a3.742 3.742 0 0 1 1.643 4.8l-4.553 10.211a.838.838 0 0 1-.765.487Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 824"
                  d="m52.487 43.28-4.844-1.677s-3.041 2.336-1.58 8.132a14.348 14.348 0 0 1-.633 9 9.285 9.285 0 0 1-.488 1.031s5.4 6.521 10.433 1.677l-1.956-9.408s3.073-6.24-.932-8.755Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 825"
                  d="M51.642 40.84c-.651-.975-1.165-2.327-.448-3.254s2.1-.781 3.188-1.186a3.609 3.609 0 0 0 2.112-3.927 4.659 4.659 0 0 0-3.067-3.444 6.641 6.641 0 0 0-4.72.257 7.207 7.207 0 0 0-4.061 4.113 5.541 5.541 0 0 0 1.06 5.557c1.465 1.542 3.764 1.953 5.891 1.928"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 826"
                  d="M47.387 32.525a2.576 2.576 0 0 1-2.954-.215 23.137 23.137 0 0 0-2.549-1.881c-1.68-.81-3.712-.272-5.347.626a48.876 48.876 0 0 1-4.812 2.842c-1.727.7-3.932.739-5.24-.591a4.794 4.794 0 0 0 7.026 5.658c1.893-1.153 2.938-3.57 5.061-4.207a6.812 6.812 0 0 1 3.624.239 7.911 7.911 0 0 0 3.623.378 2.577 2.577 0 0 0 2.167-2.555Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 827"
                  d="M62.283 75.641a31.208 31.208 0 0 1 0-9.5.8.8 0 0 1 .789-.672h7.429a.791.791 0 0 1 .625.3.805.805 0 0 1 .15.69 19.065 19.065 0 0 0 0 8.854.8.8 0 0 1-.15.69.791.791 0 0 1-.625.3h-7.428a.8.8 0 0 1-.79-.662Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 828"
                  d="M68.215 70.07h-3.9a.56.56 0 0 1-.559-.559v-.218a.56.56 0 0 1 .559-.559h3.9a.56.56 0 0 1 .559.559v.218a.56.56 0 0 1-.559.559Z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 829"
                  d="M68.215 72.37h-3.9a.559.559 0 0 1-.559-.559v-.216a.56.56 0 0 1 .559-.559h3.9a.56.56 0 0 1 .559.559v.218a.559.559 0 0 1-.559.557Z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 830"
                  d="M64.237 66.363a2 2 0 0 0-1.433-2.714l-9.34-15.654-3.307 2.83 10.22 14.493a2.012 2.012 0 0 0 3.859 1.04Z"
                  fill="#a0616a"
                />
                <Path
                  data-name="Path 831"
                  d="m55.319 50.532-3.94 2.24a.9.9 0 0 1-1.28-.456l-1.633-4.213a2.493 2.493 0 0 1 4.341-2.451l2.776 3.547a.9.9 0 0 1-.263 1.333Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 832"
                  d="M97.245 56.031h-75.64a1.211 1.211 0 1 0 0 2.422h2.142v26.364a1.211 1.211 0 1 0 2.422 0V60.78l13.576 24.607a1.212 1.212 0 0 0 2.1-1.211L27.653 58.453h64.842v.016L78.312 84.176a1.212 1.212 0 0 0 2.1 1.211l12.086-21.905v21.335a1.211 1.211 0 1 0 2.422 0V59.091l.352-.639h1.976a1.211 1.211 0 1 0 0-2.422Z"
                  fill="#3f3d56"
                />
                <Rect
                  data-name="Rectangle 188"
                  width={16.022}
                  height={1.304}
                  rx={0.652}
                  transform="translate(50.576 55.286)"
                  fill="#ccc"
                />
                <Path
                  data-name="Path 833"
                  d="M75.82 56.59H59.239a1.212 1.212 0 0 1-1.211-1.211V46.25a1.212 1.212 0 0 1 1.211-1.211H75.82a1.212 1.212 0 0 1 1.211 1.211v9.129a1.212 1.212 0 0 1-1.211 1.211Z"
                  fill="#ccc"
                />
                <Circle
                  data-name="Ellipse 46"
                  cx={1.118}
                  cy={1.118}
                  r={1.118}
                  transform="translate(66.412 49.697)"
                  fill="#fff"
                />
                <Path
                  data-name="Path 834"
                  d="M88.474 34.098v-32.7a1.4 1.4 0 0 1 1.4-1.4h25.85a1.4 1.4 0 0 1 1.4 1.4v32.7a1.4 1.4 0 0 1-1.4 1.4H89.876a1.4 1.4 0 0 1-1.4-1.4Zm1.4-33.786a1.091 1.091 0 0 0-1.09 1.09v32.7a1.091 1.091 0 0 0 1.09 1.09h25.85a1.091 1.091 0 0 0 1.09-1.09v-32.7a1.091 1.091 0 0 0-1.09-1.09Z"
                  fill="#e6e6e6"
                />
                <Path
                  data-name="Path 835"
                  d="M104.248 15.016V8.302a.7.7 0 0 1 .7-.7h5.689a.7.7 0 0 1 .7.7v6.714a.7.7 0 0 1-.7.7h-5.689a.7.7 0 0 1-.7-.7Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 836"
                  d="M93.193 18.13v-6.714a.7.7 0 0 1 .7-.7h5.689a.7.7 0 0 1 .7.7v6.714a.7.7 0 0 1-.7.7h-5.689a.7.7 0 0 1-.7-.7Z"
                  fill="#ccc"
                />
                <Path
                  data-name="Path 837"
                  d="M102.068 27.628v-6.714a.7.7 0 0 1 .7-.7h5.689a.7.7 0 0 1 .7.7v6.714a.7.7 0 0 1-.7.7h-5.689a.7.7 0 0 1-.7-.7Z"
                  fill="#ff6584"
                />
                <Circle
                  data-name="Ellipse 47"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(144.251 .997)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 48"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(144.251 5.799)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 49"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(144.251 10.601)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 50"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(144.251 15.402)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 51"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(139.221 .997)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 52"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(139.221 5.799)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 53"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(139.221 10.601)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 54"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(139.221 15.402)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 55"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(134.191 .997)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 56"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(134.191 5.799)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 57"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(134.191 10.601)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 58"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(134.191 15.402)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 59"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(129.161 .997)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 60"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(129.161 5.799)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 61"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(129.161 10.601)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 62"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(129.161 15.402)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 63"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(124.13 .997)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 64"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(124.13 5.799)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 65"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(124.13 10.601)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 66"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(124.13 15.402)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 67"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(119.1 .997)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 68"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(119.1 5.799)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 69"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(119.1 10.601)"
                  fill="#f2f2f2"
                />
                <Circle
                  data-name="Ellipse 70"
                  cx={1.205}
                  cy={1.205}
                  r={1.205}
                  transform="translate(119.1 15.402)"
                  fill="#f2f2f2"
                />
                <Path
                  data-name="Path 838"
                  d="M125.159 44.946a2.05 2.05 0 0 1 1.447-2.695 1.97 1.97 0 0 1 .27-.044l4.528-7.936-1.143-1.964 2.846-2.2 2.177 3.024a2.077 2.077 0 0 1-.049 2.479l-6.216 7.958a1.925 1.925 0 0 1 .058.193 2.05 2.05 0 0 1-1.744 2.513 1.992 1.992 0 0 1-.251.016 2.056 2.056 0 0 1-1.923-1.344Z"
                  fill="#ffb8b8"
                />
                <Path
                  data-name="Path 839"
                  d="M116.325 84.003h-2.284l-1.087-8.81h3.371Z"
                  fill="#ffb8b8"
                />
                <Path
                  data-name="Path 840"
                  d="M112.41 83.35h4.4v2.773h-7.178a2.773 2.773 0 0 1 2.778-2.773Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 841"
                  d="M135.142 84.003h-2.284l-1.087-8.81h3.371Z"
                  fill="#ffb8b8"
                />
                <Path
                  data-name="Path 842"
                  d="M131.227 83.35h4.4v2.773h-7.178a2.773 2.773 0 0 1 2.778-2.773Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 843"
                  d="m133.74 30.541-5.128 1.949-1.252-3.478a2.081 2.081 0 0 1 .932-2.515 2.081 2.081 0 0 1 2.657.519Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 844"
                  d="m116.522 76.867-4.3-.981a.929.929 0 0 1-.71-1.047c1.726-10.938 3.386-17.343 7.665-25.478.06-.152.728-3.23 1.164-5.27a.926.926 0 0 1 .785-.936l8.02-1.234a1.037 1.037 0 0 1 .377-.057l.08.015v.079c0 .082-.082.094-.113.1l-.107.016a1.247 1.247 0 0 1 .331.225c3.514 4.226 5.341 18.079 7.661 33.383a.835.835 0 0 1-.243.68.919.919 0 0 1-.659.3l-5.124.125a.928.928 0 0 1-.938-.786l-3.456-19.946a.74.74 0 0 0-1.4-.215c-2.784 5.67-5.38 10.574-7.938 20.357a.923.923 0 0 1-.893.694.936.936 0 0 1-.202-.024Z"
                  fill="#2f2e41"
                />
                <Path
                  data-name="Path 845"
                  d="M120.697 44.32a.931.931 0 0 1-.388-.661c-.657-6.131-.2-10.929 1.4-14.669a4.656 4.656 0 0 1 3.087-2.642l4.145-.209.021.01a4.844 4.844 0 0 1 2.649 5.14c-1.333 3.514-2.45 7.173-1.6 10.125a.954.954 0 0 1-.09.742.91.91 0 0 1-.581.43l-7.9 1.878a.924.924 0 0 1-.743-.144Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 846"
                  d="m118.913 35.521-7.95-6.272a1.964 1.964 0 0 1-.193.057 2.055 2.055 0 0 1-1.643-.315 2.033 2.033 0 0 1-.862-1.441 2.05 2.05 0 0 1 4.031-.708 1.977 1.977 0 0 1 .043.271l7.914 4.566 1.97-1.134 2.182 2.856-3.058 2.18a2.039 2.039 0 0 1-2.434-.06Z"
                  fill="#ffb8b8"
                />
                <Path
                  data-name="Path 847"
                  d="m125.375 34.291-4.536-3.085 2.132-3.019a2.081 2.081 0 0 1 2.6-.678 2.081 2.081 0 0 1 1.1 2.475Z"
                  fill="#0e58c7"
                />
                <Circle
                  data-name="Ellipse 71"
                  cx={4.576}
                  cy={4.576}
                  r={4.576}
                  transform="translate(122.98 15.439)"
                  fill="#ffb8b8"
                />
                <Path
                  data-name="Path 848"
                  d="M125.878 19.333c-1.176.8-2.72 1.632-3.922.775a2.186 2.186 0 0 1-.717-2.52c.575-1.645 2.156-2.369 3.667-2.924a10.529 10.529 0 0 1 6.131-.779c2.028.517 3.82 2.48 3.454 4.541-.294 1.657-1.857 3.036-1.636 4.7s2.112 2.563 3.779 2.863 3.532.4 4.73 1.594c1.528 1.527 1.147 4.258-.291 5.87a10.714 10.714 0 0 1-5.711 2.841c-2.786.658-5.8 1-8.445-.088s-4.705-4.034-3.939-6.793a9.476 9.476 0 0 1 1.824-3.108 8.66 8.66 0 0 0 1.765-3.137 3.261 3.261 0 0 0-.589-2.853.827.827 0 0 1-.111-.966Z"
                  fill="#2f2e41"
                />
              </G>
            </G>
            <G data-name="Group 1214">
              <G data-name="Group 1218">
                <Text
                  data-name="Zendoc will Assist to complete therapy"
                  transform="translate(50 535)"
                  fill="#2e5b9f"
                  fontSize={16}
                  fontFamily="Arial-BoldMT, Arial"
                  fontWeight={700}
                >
                  <TSpan x={0} y={0}>
                    {"Zendoc will Assist to"}
                  </TSpan>
                  <TSpan x={0} y={23}>
                    {"complete therapy"}
                  </TSpan>
                </Text>
                <G
                  data-name="Group 1194"
                  transform="translate(-44.094 -30.094)"
                >
                  <Circle
                    data-name="Ellipse 14"
                    cx={18}
                    cy={18}
                    r={18}
                    transform="translate(36.094 543.094)"
                    fill="#ff7600"
                  />
                  <Text
                    data-name={3}
                    transform="translate(51.094 565.094)"
                    fill="#fff"
                    fontSize={12}
                    fontFamily="ArialMT, Arial"
                  >
                    <TSpan x={0} y={0}>
                      {"3"}
                    </TSpan>
                  </Text>
                </G>
              </G>
              <G data-name="Group 1215" transform="translate(50.953 393.067)">
                <Ellipse
                  data-name="Ellipse 74"
                  cx={16.254}
                  cy={2.796}
                  rx={16.254}
                  ry={2.796}
                  transform="translate(86.783 100.338)"
                  fill="#0e58c7"
                  opacity={0.1}
                />
                <Ellipse
                  data-name="Ellipse 75"
                  cx={24.063}
                  cy={1.702}
                  rx={24.063}
                  ry={1.702}
                  transform="translate(29.762 98.697)"
                  fill="#0e58c7"
                  opacity={0.1}
                />
                <Path
                  data-name="Line 1"
                  fill="#0e58c7"
                  d="M22.423 24.189h-1.03"
                />
                <G data-name="Group 1201" opacity={0.1}>
                  <Path
                    data-name="Path 876"
                    d="M55.599 88.371a2.7 2.7 0 0 0 2.275 1.468c1.583 0 2.871-1.678 2.871-3.749s-1.292-3.735-2.871-3.735a2.53 2.53 0 0 0-1.935.983 3.705 3.705 0 0 0-.488.764l-.027.163a1.263 1.263 0 0 1-1.444.042V72.161H42.123a.957.957 0 0 1-.144-.894 1.143 1.143 0 0 1 .535-.652 2.7 2.7 0 0 0 1.47-2.275c0-1.583-1.679-2.871-3.749-2.871s-3.749 1.284-3.749 2.871a2.535 2.535 0 0 0 .984 1.936 3.722 3.722 0 0 0 .763.487l.016.027a1.166 1.166 0 0 1 .228 1.367h-5.346v22.488a5.332 5.332 0 0 0 5.332 5.332h15.521v-11.93a.945.945 0 0 1 .967-.205 1.132 1.132 0 0 1 .648.529Z"
                  />
                  <Path
                    data-name="Path 877"
                    d="M35.644 71.691h1.857a3.747 3.747 0 0 1-1.464-2.941 4.164 4.164 0 0 1 8.306 0 3.747 3.747 0 0 1-1.464 2.941h11.129V59.71a.957.957 0 0 1 .967-.205 1.139 1.139 0 0 1 .654.535 2.7 2.7 0 0 0 2.275 1.468c1.583 0 2.871-1.678 2.871-3.748s-1.282-3.749-2.871-3.749a2.536 2.536 0 0 0-1.936.983 3.78 3.78 0 0 0-.488.764l-.026.016a1.168 1.168 0 0 1-1.445.193v-12.14H42.592a.957.957 0 0 1-.143-.894 1.136 1.136 0 0 1 .535-.652 2.7 2.7 0 0 0 1.468-2.275c0-1.583-1.678-2.871-3.748-2.871s-3.749 1.284-3.749 2.871a2.536 2.536 0 0 0 .983 1.936 3.779 3.779 0 0 0 .764.488l.016.026a1.166 1.166 0 0 1 .228 1.367h-3.3v-.615h2.439a3.747 3.747 0 0 1-1.463-2.935 4.164 4.164 0 0 1 8.306 0 3.746 3.746 0 0 1-1.47 2.94h10.541V31.084a.949.949 0 0 1 .968-.205 1.14 1.14 0 0 1 .652.535 2.7 2.7 0 0 0 2.275 1.468c1.583 0 2.871-1.678 2.871-3.749s-1.282-3.748-2.871-3.748a2.531 2.531 0 0 0-1.936.983 3.708 3.708 0 0 0-.488.764l-.026.163a1.265 1.265 0 0 1-1.445.042v-11.31H38.484a5.332 5.332 0 0 0-5.332 5.332v5.772h-.078a.313.313 0 0 0-.313.313v2.734a.315.315 0 0 0 .313.313h.081v2.792h-.105a.315.315 0 0 0-.314.313v5.221a.315.315 0 0 0 .314.313h.105v2.051h-.086a.313.313 0 0 0-.313.313v1.682h-.068v3.544a.312.312 0 0 0 .313.313h.093V71.69Z"
                  />
                  <Path
                    data-name="Path 878"
                    d="M76.214 35.391a.314.314 0 0 0-.313-.314h-.189v-.343h-.1V21.095a5.126 5.126 0 0 0-5.127-5.127H55.101v10.391a3.794 3.794 0 0 1 3.008-1.511 4.164 4.164 0 0 1 0 8.31 3.791 3.791 0 0 1-3.008-1.511v11.53h12.442a3.756 3.756 0 0 1-1.461-2.944 4.011 4.011 0 0 1 4.145-3.864 4.3 4.3 0 0 1 2.785 1 3.653 3.653 0 0 1 0 5.708v.092h2.7v-.01h.5Z"
                  />
                  <Path
                    data-name="Path 879"
                    d="M72.083 71.08v-1.37a2.6 2.6 0 0 0 .155-.256 2.278 2.278 0 0 0 .282-1.087 2.238 2.238 0 0 0-.128-.744 2.464 2.464 0 0 0-.308-.6 4.018 4.018 0 0 0-3.311-1.524c-2.071 0-3.749 1.284-3.749 2.871a2.535 2.535 0 0 0 .983 1.936 3.769 3.769 0 0 0 .764.488l.016.026a1.167 1.167 0 0 1 .228 1.367H54.953V83.4a3.748 3.748 0 0 1 2.977-1.5 4.164 4.164 0 0 1 0 8.306 3.747 3.747 0 0 1-2.977-1.5v9.05h13.84a3.29 3.29 0 0 0 3.289-3.281V72.193v22.258a3.289 3.289 0 0 1-3.289 3.29h-13.84v2.188h14.356a5.332 5.332 0 0 0 5.332-5.332V71.609h-2.558Z"
                  />
                </G>
                <Path
                  data-name="Path 880"
                  d="M39.115 97.238a3.29 3.29 0 0 1-3.29-3.289V71.616h-2.558V94.1a5.332 5.332 0 0 0 5.332 5.332H54.12v-2.187Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 881"
                  d="M55.077 87.294a1.132 1.132 0 0 1 .652.535 2.7 2.7 0 0 0 2.275 1.468c1.583 0 2.871-1.678 2.871-3.749s-1.287-3.741-2.866-3.741a2.531 2.531 0 0 0-1.935.983 3.709 3.709 0 0 0-.488.764l-.027.163a1.263 1.263 0 0 1-1.444.042V71.614H42.259a.957.957 0 0 1-.144-.894 1.143 1.143 0 0 1 .535-.652 2.7 2.7 0 0 0 1.47-2.275c0-1.583-1.679-2.871-3.749-2.871s-3.749 1.284-3.749 2.871a2.535 2.535 0 0 0 .984 1.936 3.722 3.722 0 0 0 .763.487l.016.027a1.166 1.166 0 0 1 .228 1.367h-2.788v22.336a3.29 3.29 0 0 0 3.29 3.29H54.12v-9.739a.945.945 0 0 1 .957-.203Z"
                  fill="#b9c7e0"
                />
                <Path
                  data-name="Rectangle 191"
                  fill="#3a3768"
                  d="M32.816 42.619h.406v.662h-.406z"
                />
                <Path
                  data-name="Rectangle 192"
                  fill="#3a3768"
                  d="M33.561 42.619h2.219v.662h-2.219z"
                />
                <Path
                  data-name="Rectangle 193"
                  fill="#3a3768"
                  d="M33.222 42.619h.339v.662h-.339z"
                />
                <Path
                  data-name="Path 883"
                  d="M33.129 46.479h.093v-3.2h-.41v2.883a.312.312 0 0 0 .317.313Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 884"
                  d="M35.78 43.279h-2.219v2.883a.313.313 0 0 1-.314.313h-.025v24.668h2.558Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 885"
                  d="M33.222 46.479h.025a.313.313 0 0 0 .314-.313v-2.887h-.339Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 886"
                  d="M36.172 68.197a4.164 4.164 0 0 1 8.306 0 3.748 3.748 0 0 1-1.464 2.946h11.129v-11.98a.957.957 0 0 1 .967-.205 1.139 1.139 0 0 1 .654.535 2.7 2.7 0 0 0 2.275 1.468c1.583 0 2.871-1.678 2.871-3.748s-1.282-3.749-2.871-3.749a2.536 2.536 0 0 0-1.936.983 3.774 3.774 0 0 0-.488.764l-.026.016a1.168 1.168 0 0 1-1.445.193V43.28H42.728a.957.957 0 0 1-.144-.894 1.136 1.136 0 0 1 .535-.652 2.7 2.7 0 0 0 1.468-2.275c0-1.583-1.678-2.871-3.748-2.871s-3.749 1.284-3.749 2.871a2.536 2.536 0 0 0 .983 1.936 3.777 3.777 0 0 0 .764.488l.016.026a1.166 1.166 0 0 1 .228 1.367h-3.3v27.868h1.857a3.748 3.748 0 0 1-1.466-2.947Z"
                  fill="#b9c7e0"
                />
                <Path
                  data-name="Path 887"
                  d="M33.63 40.892a.313.313 0 0 0-.314-.313h-.025v2.04h.339Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 888"
                  d="M33.278 26.581h-.068a.313.313 0 0 0-.313.313v2.734a.315.315 0 0 0 .313.313h.081v-3.359Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 889"
                  d="M33.185 32.731a.314.314 0 0 0-.314.313v5.221a.314.314 0 0 0 .314.313h.106v-5.847Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 890"
                  d="M33.291 40.624h-.089a.313.313 0 0 0-.313.313v1.727h.41Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 891"
                  d="M33.291 20.809v5.772a.312.312 0 0 1 .3.312v2.734a.313.313 0 0 1-.3.312v2.792h.048a.313.313 0 0 1 .313.313v5.221a.313.313 0 0 1-.313.313h-.051v2.051h.025a.314.314 0 0 1 .314.313v1.72h2.219v-21.7a3.29 3.29 0 0 1 3.288-3.29h4.459v.571a2.708 2.708 0 0 0 2.708 2.708h7.844v-1.788h-3.611a.532.532 0 0 1-.529-.526v-.115a.531.531 0 0 1 .529-.529h3.6v-2.514H38.62a5.332 5.332 0 0 0-5.329 5.33Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 892"
                  d="M33.592 29.627v-2.734a.312.312 0 0 0-.3-.312v3.357a.313.313 0 0 0 .3-.31Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 893"
                  d="M33.655 38.266v-5.221a.313.313 0 0 0-.313-.313h-.051v5.849h.048a.313.313 0 0 0 .316-.313Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 894"
                  d="M36.757 39.724a4.164 4.164 0 0 1 8.306 0 3.746 3.746 0 0 1-1.47 2.94h10.541V30.536a.949.949 0 0 1 .968-.205 1.14 1.14 0 0 1 .652.535 2.7 2.7 0 0 0 2.275 1.468c1.583 0 2.871-1.678 2.871-3.749s-1.282-3.748-2.871-3.748a2.531 2.531 0 0 0-1.936.983 3.7 3.7 0 0 0-.488.764l-.026.163a1.265 1.265 0 0 1-1.445.042v-5.837h-7.84a2.708 2.708 0 0 1-2.7-2.708v-.572h-4.456a3.289 3.289 0 0 0-3.288 3.294v21.7h2.371a3.746 3.746 0 0 1-1.464-2.942Z"
                  fill="#b9c7e0"
                />
                <Path
                  data-name="Path 895"
                  d="M50.534 17.994a.53.53 0 0 0-.529.529v.119a.532.532 0 0 0 .529.53h3.6v-1.174Z"
                  fill="#e6e8ec"
                />
                <Path
                  data-name="Path 896"
                  d="M74.925 34.513v8.116h.923v-8.443h-.5a.385.385 0 0 0-.423.327Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Rectangle 194"
                  fill="#3a3768"
                  d="M55.237 15.421h1.094v2.461h-1.094z"
                />
                <Path
                  data-name="Rectangle 195"
                  fill="#3a3768"
                  d="M55.237 19.112h1.094v1.777h-1.094z"
                />
                <Path
                  data-name="Rectangle 196"
                  fill="#e6e8ec"
                  d="M55.237 17.882h1.094v1.231h-1.094z"
                />
                <Path
                  data-name="Path 897"
                  d="M76.037 34.529h-.257v8.09h.57v-7.775a.315.315 0 0 0-.313-.314Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 898"
                  d="M56.329 17.881c.291.066.547.6.547.6v.115s-.257.529-.547.52v1.777h6.179a2.71 2.71 0 0 0 2.708-2.71v-.571h4.649a3.288 3.288 0 0 1 3.281 3.288v15.93a3.653 3.653 0 0 1 0 5.708v.092h1.914v-8.024a.04.04 0 0 1 .041-.04h.643V20.548a5.126 5.126 0 0 0-5.127-5.127H56.194v2.46Zm2.07-.012a.666.666 0 1 1-.666.666.666.666 0 0 1 .666-.665Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 899"
                  d="M58.239 24.299a4.164 4.164 0 0 1 0 8.31 3.791 3.791 0 0 1-3.008-1.511v11.53h12.442a3.756 3.756 0 0 1-1.462-2.944 4.011 4.011 0 0 1 4.145-3.864 4.3 4.3 0 0 1 2.792 1V20.89a3.288 3.288 0 0 0-3.281-3.288h-4.649v.572a2.71 2.71 0 0 1-2.708 2.71h-7.272v4.922a3.794 3.794 0 0 1 3.001-1.507Z"
                  fill="#b9c7e0"
                />
                <Path
                  data-name="Path 900"
                  d="M56.333 19.113a.547.547 0 0 0 .547-.52v-.115a.684.684 0 0 0-.547-.6h-.137v1.231Z"
                  fill="#e6e8ec"
                />
                <Circle
                  data-name="Ellipse 76"
                  cx={0.666}
                  cy={0.666}
                  r={0.666}
                  transform="rotate(-9.22 140.316 -348.403)"
                  fill="#e6e8ec"
                />
                <Path
                  data-name="Path 901"
                  d="M72.22 70.529v-1.367a2.284 2.284 0 0 0 0-2.685Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Rectangle 197"
                  fill="#3a3768"
                  d="M72.22 71.057h2.558v.588H72.22z"
                />
                <Path
                  data-name="Path 902"
                  d="M71.187 70.097a1.141 1.141 0 0 0-.535.652.957.957 0 0 0 .144.9h1.423v-.597h-.551a4.1 4.1 0 0 0 .547-.528v-1.362a3.237 3.237 0 0 1-1.032.935Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 903"
                  d="M71.67 71.057h.547v-.528a4.117 4.117 0 0 1-.547.528Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 904"
                  d="M72.656 67.823a2.334 2.334 0 0 0-.436-1.343v2.684a2.339 2.339 0 0 0 .436-1.341Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 905"
                  d="M74.778 71.645v22.41a5.332 5.332 0 0 1-5.332 5.332H55.09V97.2h13.84a3.29 3.29 0 0 0 3.29-3.29V71.645Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 906"
                  d="M70.653 70.749a1.14 1.14 0 0 1 .535-.652 3.238 3.238 0 0 0 1.032-.934v-2.684a4.018 4.018 0 0 0-3.311-1.524c-2.071 0-3.749 1.284-3.749 2.871a2.535 2.535 0 0 0 .983 1.936 3.771 3.771 0 0 0 .764.488l.016.026a1.168 1.168 0 0 1 .228 1.367H55.09v11.212a3.748 3.748 0 0 1 2.977-1.5 4.164 4.164 0 0 1 0 8.306 3.747 3.747 0 0 1-2.977-1.5v9.05h13.84a3.29 3.29 0 0 0 3.29-3.281V71.645H70.8a.957.957 0 0 1-.147-.896Z"
                  fill="#b9c7e0"
                />
                <Path
                  data-name="Path 907"
                  d="M842.18 282.218a2.582 2.582 0 0 0 1.52-1.663 2.11 2.11 0 0 0 .052-.273 2.415 2.415 0 0 0 .088-.261 2.515 2.515 0 0 0-.522-2.171l-1 3.828Z"
                  transform="translate(-745.514 -245.42)"
                  fill="url(#a)"
                />
                <Path
                  data-name="Path 908"
                  d="M709.533 189.381c-.156-.915-3.044-2.9-3.044-2.9a8.107 8.107 0 0 1-1.951-1.474c-.432-.5-.567-.5-.608-.429a.2.2 0 0 0-.093-.031c-.027-.019-.053-.037-.078-.057a.185.185 0 0 0-.108-.187c-.033-.019-.066-.044-.1-.067a3.1 3.1 0 0 1-.323-1.343c-.033-.573-.684-.429-.906-.365-.153-.287-.3-.585-.443-.883a1.62 1.62 0 0 0 .154-.308 11.634 11.634 0 0 0 .49-2.8 8.118 8.118 0 0 0 .336-2.018v-.038a1.733 1.733 0 0 0-.111-.476c-.116-.293-.319-.547-.41-.849-.146-.442-.053-.928-.175-1.375a2.055 2.055 0 0 0-1.172-1.254 5.822 5.822 0 0 0-1.738-.41 8.145 8.145 0 0 0-4.413.327.793.793 0 0 1-.41.111 1.26 1.26 0 0 1-.375-.174 1.14 1.14 0 0 0-1.146.175 3.294 3.294 0 0 0-.762.924 2.876 2.876 0 0 1-.786.9c-.4.264-.917.353-1.23.708a1.143 1.143 0 0 0-.254.591v-.01a.755.755 0 0 0 0 .078v.287a3.736 3.736 0 0 0 .264.971 1.352 1.352 0 0 0 .358.61c.476.387 1.231.022 1.8.238.05.018.1.041.146.063a.276.276 0 0 1-.022.067 4.538 4.538 0 0 0-.185 1.287 4.706 4.706 0 0 0 4.761 4.649 2.6 2.6 0 0 0 .293-.011c.014.051.029.1.041.152a5.038 5.038 0 0 1 .137 1.739l-.029-.254a1.258 1.258 0 0 0-.2-.075 1.77 1.77 0 0 0-.591-.09 3.428 3.428 0 0 0-2.65 1.52s-1.326.737-1.716.915a.183.183 0 0 0-.072.082 18.028 18.028 0 0 0-1.957 3.7c-.183 1.019-.41 2.188-.41 2.188s-.443 1.321-.729 1.906a6.284 6.284 0 0 0-.571 1.4 1.206 1.206 0 0 1-.443 1.168 2.171 2.171 0 0 0-.684 1.321s-.273.257-.66.582h-.014l1.429-5.478.256.064a.328.328 0 0 0 .336-.115.3.3 0 0 0 .056-.113l.288-1.11.116-.442.023-.09.168-.644-.569-.137-.666-.165-1.881-.474.164-.629.137-.533.86-3.3.137-.532a4.506 4.506 0 0 0-2.488-1.55c-2.064-.513-4.063.321-4.465 1.862a2.084 2.084 0 0 0-.053.273 2 2 0 0 0-.086.26 2.2 2.2 0 0 0-.055.82q.008.067.02.137a2.816 2.816 0 0 0 .524 1.172 3.735 3.735 0 0 0 .639.663l.01.03a1.25 1.25 0 0 1 .179.547v.085a1.251 1.251 0 0 1-.164.23l-12.614-3.135-.137.532-2.841 10.917a4.118 4.118 0 0 1 1.23-.649 4.007 4.007 0 0 1 .533-.137l.064-.011a3.81 3.81 0 0 1 1.529.063 3.911 3.911 0 0 1 2.9 3.351 4.08 4.08 0 0 1 .034.608 4.292 4.292 0 0 1-.082.772 4.118 4.118 0 0 1-4.824 2.822 3.828 3.828 0 0 1-2.584-2.208l-.137.533-2.931 11.2 11.172 2.778.12-.537h.018a3.712 3.712 0 0 1-.771-2.956.157.157 0 0 1 .018-.052c.014-.04.029-.078.044-.116a3.761 3.761 0 0 1 .273-.54c.055-.089.112-.175.174-.258q.057-.078.119-.152a3.882 3.882 0 0 1 .669-.637l.079-.057c.09-.064.183-.126.273-.183l.171-.1a4.434 4.434 0 0 1 2.149-.513 4.721 4.721 0 0 1 1.067.137 4.422 4.422 0 0 1 2.637 1.833 4.026 4.026 0 0 1 .224.383 3.748 3.748 0 0 1 .387 1.25 3.541 3.541 0 0 1-.027 1.046 3.722 3.722 0 0 1-1.447 1.872l-.137.514h.015l-.02.015-.137.513 2.551.634 3.614-13.816a2.2 2.2 0 0 0 1.474-.61 7.149 7.149 0 0 1 1.821-.89c.323-.088.7-.15.993-.213-.35 1.738-.683 3.418-.654 3.517.01.038.072-.022.168-.153a.745.745 0 0 0-.012.153c0 .026.037.007.085-.046l-.007.033s-2.029 3.925-2.188 4.375a2.042 2.042 0 0 0 .663 1.982 1.336 1.336 0 0 1 .32.283l-.074.146a2.96 2.96 0 0 0-.4 1.324 1.792 1.792 0 0 1-.273 1.181s-1.757 5.429-1.717 6.992a34.274 34.274 0 0 1-.625 4.992s-.722 2.209-.293 2.838a16.009 16.009 0 0 1 .917 3.373 2.783 2.783 0 0 1 .312 1.162 5.747 5.747 0 0 0 .313 1.5l1.094 3.943a3.5 3.5 0 0 0 .293 1.791c.41.742.371.514.175 1.81a2.835 2.835 0 0 0 .937 2.871.429.429 0 0 1 .2.593c-.179-.07-.328.3-.417.6l-.09.086.06.015c-.038.137-.06.252-.06.252s-1.833 1.524-1.951 2.077-1.406.838-1.406.838a22.662 22.662 0 0 0-2.461.8.93.93 0 0 0-.539.74 2.03 2.03 0 0 0 .071.746c.194.781 2.926.857 4.238.648s4.018-.972 4.018-.972a23.267 23.267 0 0 0 3.692-.61c.842-.336.175-1.22.175-1.22v-.082a4.778 4.778 0 0 0-.123-1.777 2.583 2.583 0 0 1-.126-1.192c.57-1.025-.653-4.1-.653-4.1a23.743 23.743 0 0 0 .078-3.448c-.156-.44-.82-4.173-.82-4.173a6.888 6.888 0 0 1-.253-1.981c.157-.286-.1-1.106-.1-1.106s-.669-.912-.608-1.2a1.707 1.707 0 0 0-.2-.8s1.991-2.972 1.814-3.525a3.174 3.174 0 0 1 .079-1.448s.25-.421.547-.926c.369-.618.82-1.358.968-1.589a19.931 19.931 0 0 0 .909-2.266l.183-.517a58.35 58.35 0 0 0 .585 6.173 44.638 44.638 0 0 1 .684 5.087 3.094 3.094 0 0 1 .2 1.258 31.336 31.336 0 0 0 .625 3.772 11.408 11.408 0 0 1 .1 2.743 39.7 39.7 0 0 0-.038 4.785 5.44 5.44 0 0 0-1.347 1.448 6.257 6.257 0 0 0 .038 2.343l.126.059a3.618 3.618 0 0 0-.223.741c-.038.362-.625 2-.566 2.23a8.737 8.737 0 0 1-.293 1.295c-.04.361-.526.9-.566 1.087a4.67 4.67 0 0 1-.215.5 4.78 4.78 0 0 0-.253.774c-.2.8 2.126.934 2.126.934 3.435.629 4.059-1.943 4.059-1.943a19.133 19.133 0 0 1 .585-2.461.273.273 0 0 0 .026-.217 2.9 2.9 0 0 0-.495-1.076 1.28 1.28 0 0 1-.1-.746 1.725 1.725 0 0 0 .294-.055c1.385-.4.82-2.706.82-2.706a7.265 7.265 0 0 0 .937-2.114 23.406 23.406 0 0 1 .332-2.4c1.191-2.134.722-7.316.917-7.736s-.41-1.981-.9-2.687a4.411 4.411 0 0 1 0-3.162c.293-.552-.293-2.461-.293-2.461s.566-3.691.547-4.268a12.394 12.394 0 0 1 .488-2.267s.507-.876.39-1.143.39-.957.254-1.258a3.378 3.378 0 0 1 .371-1.791 10.157 10.157 0 0 0 .41-1.756l.04-.228c.569.36 1.094.628 1.28.555.349-.137-.206-1.914-.587-3.022.066-.049.093-.086.066-.1-.234-.153.026-.84.026-.84 1.38-.812.911-1.422.469-1.777s-.156-1.367-.287-1.777a16.122 16.122 0 0 1 .391-3.607 2.579 2.579 0 0 0-.007-.883c.25-.381.509-.781.735-1.15.779-1.27 2.445-7.316 2.445-7.316l-.011-.031c.163-.321.284-.582.35-.756.509-1.313-.428-5.276-.583-6.195Zm-12.125-3.481.036-.016v.029Zm-24.862 31.856Zm17.291 33a.625.625 0 0 1-.247-.049Z"
                  transform="translate(-589.796 -154.019)"
                  fill="url(#e)"
                />
                <Path
                  data-name="Path 909"
                  d="M85.587 52.671a18.968 18.968 0 0 0 4.9.473h.571l.745-1.518-.745-1.265s-.684-.189-1.591-.353c-1.34-.241-3.173-.429-4.047.112-1.463.907-1.303 1.994.167 2.551Z"
                  fill="#fec2be"
                />
                <Path
                  data-name="Path 910"
                  d="M90.489 53.144h.571l.745-1.518-.744-1.265s-.684-.189-1.591-.353c.737.542 2.509 1.721 1.019 3.136Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 911"
                  d="m102.83 34.518-.328-.38a18.543 18.543 0 0 0-1.872 3.692c-.178 1.012-.41 2.174-.41 2.174s-.429 1.315-.708 1.9a6.291 6.291 0 0 0-.555 1.39 1.22 1.22 0 0 1-.431 1.164 2.155 2.155 0 0 0-.656 1.315s-1.922 1.87-2.934 1.914-3.918.556-3.817 1.062-1.213.808-1.745.935 3.418 1.641 1.113 3.59c0 0 1.466.3 1.618.656s1.694-.2 1.694-.2a1.6 1.6 0 0 1 1.467-.835 2.3 2.3 0 0 0 1.719-.632 6.431 6.431 0 0 1 1.777-.885c.64-.176 1.466-.253 1.492-.431s3.793-16.433 3.793-16.433Z"
                  fill="#4c4981"
                />
                <Path
                  data-name="Path 912"
                  d="m102.83 34.518-.328-.38a18.543 18.543 0 0 0-1.872 3.692c-.178 1.012-.41 2.174-.41 2.174s-.429 1.315-.708 1.9a6.291 6.291 0 0 0-.555 1.39 1.22 1.22 0 0 1-.431 1.164 2.155 2.155 0 0 0-.656 1.315s-1.922 1.87-2.934 1.914-3.918.556-3.817 1.062-1.213.808-1.745.935 3.418 1.641 1.113 3.59c0 0 1.466.3 1.618.656s1.694-.2 1.694-.2a1.6 1.6 0 0 1 1.467-.835 2.3 2.3 0 0 0 1.719-.632 6.431 6.431 0 0 1 1.777-.885c.64-.176 1.466-.253 1.492-.431s3.793-16.433 3.793-16.433Z"
                  opacity={0.05}
                />
                <Path
                  data-name="Path 913"
                  d="M106.769 104.677c3.337.626 3.944-1.935 3.944-1.935a19.23 19.23 0 0 1 .569-2.446.273.273 0 0 0 .026-.216 2.975 2.975 0 0 0-.481-1.072c-.208-.246-.038-1.27-.038-1.27l-3.868-.986a5.785 5.785 0 0 0-.379 1.137c-.037.361-.607 1.991-.547 2.219a8.543 8.543 0 0 1-.284 1.289c-.038.361-.511.891-.547 1.08a4.47 4.47 0 0 1-.209.5 5 5 0 0 0-.246.77c-.196.796 2.06.93 2.06.93Z"
                  fill="#ca8496"
                />
                <Path
                  data-name="Path 914"
                  d="M106.768 104.678c3.338.626 3.945-1.935 3.945-1.935a19.234 19.234 0 0 1 .569-2.446.273.273 0 0 0 .026-.216l-.8 2.3s-.663 1.384-3.128 1.176a5.786 5.786 0 0 1-2.428-.581 5.014 5.014 0 0 0-.246.77c-.193.799 2.062.932 2.062.932Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 915"
                  d="M109.366 101.074s-.834.019-.892-.663Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 916"
                  d="m83.421 63.86.529.135-.116.537-.491-.124Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 917"
                  d="m83.421 63.86.529.135-.116.537-.491-.124Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Rectangle 198"
                  fill="#3a3768"
                  d="m98.961 39.484.163-.642.553.141-.164.642z"
                />
                <Path
                  data-name="Rectangle 199"
                  fill="#3a3768"
                  d="m96.481 38.852.163-.642 1.833.467-.163.641z"
                />
                <Path
                  data-name="Rectangle 200"
                  fill="#3a3768"
                  d="m98.312 39.32.163-.642.649.165-.164.642z"
                />
                <Path
                  data-name="Path 918"
                  d="M96.672 38.128c-.044.02-.086.042-.128.06l.107.027-.164.641-.811-.206a.957.957 0 0 1 .083-.9 1.131 1.131 0 0 1 .684-.5 3.55 3.55 0 0 0 .507-.189Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 919"
                  d="m98.607 40.892.247.064a.313.313 0 0 0 .381-.227l.276-1.1-.547-.137Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 920"
                  d="M98.418 35.405a2.549 2.549 0 0 1-1.478 1.654l.971-3.815a2.524 2.524 0 0 1 .507 2.161Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 921"
                  d="M98.263 40.806a.313.313 0 0 1-.226-.38l.282-1.106-1.832-.466-5.588 21.952a3.645 3.645 0 0 1-1.191 4.679l-.13.511 2.479.636 6.55-25.73Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 922"
                  d="M98.037 40.428a.313.313 0 0 0 .226.38l.345.087.358-1.408-.647-.165Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 923"
                  d="M95.758 37.749a1.142 1.142 0 0 1 .684-.5 3.657 3.657 0 0 0 .506-.189l.972-3.815a4.347 4.347 0 0 0-2.419-1.542c-2.006-.511-3.95.319-4.34 1.853a2.533 2.533 0 0 0 .476 2.119 3.7 3.7 0 0 0 .619.66l.01.03a1.168 1.168 0 0 1-.118 1.386L79.89 34.626l-2.766 10.867a3.752 3.752 0 0 1 3.247-.73 4.167 4.167 0 0 1-2.044 8.056 3.75 3.75 0 0 1-2.512-2.2l-2.84 11.151 10.858 2.763a3.743 3.743 0 0 1-.695-3.21 4.015 4.015 0 0 1 4.977-2.715 4.276 4.276 0 0 1 2.782 2.192l5.588-21.949-.8-.206a.957.957 0 0 1 .074-.9Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 924"
                  d="m96.654 38.215.023-.087a2.55 2.55 0 0 1-.129.061Z"
                  fill="#0e58c7"
                />
                <G data-name="Group 1202" opacity={0.1}>
                  <Path
                    data-name="Path 925"
                    d="m99.128 38.847-.647-.165-1.831-.466.023-.087.273-1.068a3.548 3.548 0 0 1-.507.189 1.131 1.131 0 0 0-.684.5 1.33 1.33 0 0 0-.1.216 1.323 1.323 0 0 1 .1-.216 1.142 1.142 0 0 1 .684-.5 3.658 3.658 0 0 0 .506-.189l.972-3.815a4.347 4.347 0 0 0-2.419-1.542c-2.006-.511-3.95.319-4.34 1.853a2.533 2.533 0 0 0 .476 2.119 3.7 3.7 0 0 0 .619.66l.01.03a1.167 1.167 0 0 1-.118 1.386l-12.258-3.126-2.766 10.867a3.752 3.752 0 0 1 3.25-.73 4.167 4.167 0 0 1-2.044 8.056 3.75 3.75 0 0 1-2.512-2.2l-2.84 11.151 10.858 2.763a3.743 3.743 0 0 1-.695-3.21 4.015 4.015 0 0 1 4.977-2.715 4.276 4.276 0 0 1 2.782 2.192 3.645 3.645 0 0 1-1.191 4.679l-.13.511 2.479.636 6.55-25.73.247.064a.313.313 0 0 0 .381-.227l.276-1.11.163-.641Zm-2.521-.684c-.02.01-.041.021-.062.029Zm-.93.491.811.206Z"
                  />
                  <Path
                    data-name="Path 926"
                    d="M98.419 35.405a2.552 2.552 0 0 0-.507-2.16l-.971 3.815a2.531 2.531 0 0 0 1.478-1.655Z"
                  />
                </G>
                <Path
                  data-name="Rectangle 201"
                  fill="#3a3768"
                  d="m99.095 38.955.163-.642.553.141-.164.642z"
                />
                <Path
                  data-name="Rectangle 202"
                  fill="#3a3768"
                  d="m96.615 38.323.163-.642 1.833.467-.163.641z"
                />
                <Path
                  data-name="Rectangle 203"
                  fill="#3a3768"
                  d="m98.447 38.789.163-.642.649.165-.164.642z"
                />
                <Path
                  data-name="Path 927"
                  d="m96.807 37.597-.129.062.105.026-.163.645-.811-.206a.949.949 0 0 1 .082-.9 1.137 1.137 0 0 1 .684-.5 3.541 3.541 0 0 0 .506-.189Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 928"
                  d="m98.741 40.367.249.063a.313.313 0 0 0 .385-.227l.282-1.1-.547-.137Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 929"
                  d="M98.555 34.877a2.543 2.543 0 0 1-1.478 1.653l.972-3.815a2.54 2.54 0 0 1 .506 2.162Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 930"
                  d="M98.398 40.28a.313.313 0 0 1-.226-.381l.273-1.1-1.823-.469-5.586 21.947a3.64 3.64 0 0 1-1.191 4.677l-.13.511 2.48.632 6.549-25.73Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 931"
                  d="M98.173 39.898a.313.313 0 0 0 .226.381l.343.087.361-1.41-.648-.164Z"
                  fill="#3a3768"
                />
                <Path
                  data-name="Path 932"
                  d="M95.893 37.218a1.138 1.138 0 0 1 .684-.5 3.54 3.54 0 0 0 .506-.189l.971-3.815a4.345 4.345 0 0 0-2.417-1.542c-2.007-.51-3.95.319-4.341 1.854a2.531 2.531 0 0 0 .477 2.118 3.7 3.7 0 0 0 .619.662l.01.029a1.17 1.17 0 0 1-.117 1.386l-12.26-3.12-2.77 10.865a3.749 3.749 0 0 1 3.254-.729 4.164 4.164 0 0 1-2.051 8.049 3.754 3.754 0 0 1-2.507-2.2l-2.84 11.153 10.857 2.765a3.743 3.743 0 0 1-.693-3.21 4.013 4.013 0 0 1 4.977-2.715 4.266 4.266 0 0 1 2.784 2.2l5.586-21.947-.811-.206a.957.957 0 0 1 .082-.908Z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 933"
                  d="m96.784 37.686.022-.089a3.67 3.67 0 0 1-.127.061Z"
                  fill="#0e58c7"
                />
                <Path
                  data-name="Path 934"
                  d="M94.864 78.663a16.678 16.678 0 0 1 .892 3.357 2.823 2.823 0 0 1 .3 1.157 5.951 5.951 0 0 0 .3 1.5l1.062 3.925a3.528 3.528 0 0 0 .284 1.777c.4.734.359.511.171 1.8a2.9 2.9 0 0 0 .909 2.871c.682.387-.3 1.27-.3 1.27s4.361 1.176 5.272.455-.474-4.286-.474-4.286a24.152 24.152 0 0 0 .077-3.432c-.152-.436-.8-4.152-.8-4.152a7.059 7.059 0 0 1-.246-1.973c.152-.284-.094-1.094-.094-1.094s-.645-.91-.588-1.195a1.749 1.749 0 0 0-.19-.8s1.931-2.967 1.76-3.523a3.24 3.24 0 0 1 .075-1.441l.539-.922c.36-.615.794-1.352.941-1.582a20.164 20.164 0 0 0 .885-2.255l.178-.514a59.668 59.668 0 0 0 .569 6.144 45.57 45.57 0 0 1 .663 5.059 3.146 3.146 0 0 1 .19 1.251 31.628 31.628 0 0 0 .607 3.754 11.655 11.655 0 0 1 .094 2.734 40.453 40.453 0 0 0-.038 4.761 5.42 5.42 0 0 0-1.309 1.441 6.338 6.338 0 0 0 .038 2.324s3.034 1.518 4.375 1.12.8-2.693.8-2.693a7.317 7.317 0 0 0 .911-2.1 23.094 23.094 0 0 1 .331-2.383c1.157-2.123.7-7.281.891-7.7s-.4-1.973-.872-2.674a4.489 4.489 0 0 1 0-3.145c.284-.547-.293-2.449-.293-2.449s.547-3.679.53-4.248a12.9 12.9 0 0 1 .474-2.256s.492-.872.379-1.139.379-.948.246-1.251a3.4 3.4 0 0 1 .361-1.777 11.424 11.424 0 0 0 .41-1.746c.116-.655.2-1.23.2-1.23l-3.13-2.523-7.812-2.051-2.938-.948-2.864 4.512a11.417 11.417 0 0 0-.557 1.016 3 3 0 0 0-.391 1.317 1.821 1.821 0 0 1-.265 1.176s-1.708 5.4-1.669 6.959a34.877 34.877 0 0 1-.607 4.967s-.698 2.208-.277 2.835Z"
                  fill="#ceddf9"
                />
                <Path
                  data-name="Path 935"
                  d="M106.412 34.707c.12-.049 8.369-3.456 7.233-4.133-.674-.4-1.5-2.106-2.073-3.439-.4-.931-.666-1.682-.666-1.682s-6.62-1.176-4.251 2.882a7.519 7.519 0 0 1 .836 2 4.491 4.491 0 0 1-1.079 4.372Z"
                  fill="#fec2be"
                />
                <Path
                  data-name="Path 936"
                  d="M106.655 28.333a7.519 7.519 0 0 1 .836 2 4.622 4.622 0 0 0 3.909-2.747 4.39 4.39 0 0 0 .172-.453c-.4-.931-.666-1.682-.666-1.682s-6.62-1.173-4.251 2.882Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 937"
                  d="M102.539 25.567a4.625 4.625 0 1 0 .18-1.281 4.625 4.625 0 0 0-.18 1.281Z"
                  fill="#fec2be"
                />
                <Path
                  data-name="Path 938"
                  d="M98.077 61.417a2.83 2.83 0 0 1 .67 1.278s2.276 1.555 2.125.569 1.176-4.968 1.176-4.968l-.152 5.424s7.281-.342 7.812-.872a18.344 18.344 0 0 1 3.641-1.548s.957.764 1.827 1.344c.116-.655.2-1.231.2-1.231l-3.13-2.523-7.812-2.051-2.938-.948-2.864 4.512a11.467 11.467 0 0 0-.555 1.014Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 939"
                  d="M97.837 60.989a2.546 2.546 0 0 1 .834 1.4s2.275 1.555 2.123.569 1.176-4.968 1.176-4.968l-.152 5.424s7.282-.339 7.811-.872a18.227 18.227 0 0 1 3.641-1.554s2.693 2.162 3.186 1.971-.872-3.868-.872-3.868l-1.4-21.541s.379-6.41-.19-6.638a.819.819 0 0 1-.239-.149 2.419 2.419 0 0 1-.52-1.594c-.037-.684-.948-.342-.948-.342l.53.684-4.7 2.857-.041.025a5.188 5.188 0 0 0-.565-.256 2.045 2.045 0 0 0-1.332-.161 1.288 1.288 0 0 0-.5.448 5.633 5.633 0 0 0-.64 1.3l-1.7 2.881s-.872 3.828-.872 3.983a20.415 20.415 0 0 1-.569 4.02 6.343 6.343 0 0 0-.494 2.844 15.508 15.508 0 0 1-.19 2.693c-1.251 1.024-1.895 4.512-1.895 4.512s-1.977 3.91-2.133 4.361a2.055 2.055 0 0 0 .651 1.971Z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 940"
                  d="M108.118 32.522a9.608 9.608 0 0 0 1.792 1.641l3.843-3.247a2.42 2.42 0 0 1-.519-1.6c-.037-.684-.948-.34-.948-.34l.111.137a.612.612 0 0 1-.166.9Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 941"
                  d="M108.118 32.369a9.608 9.608 0 0 0 1.792 1.641l3.843-3.247a2.418 2.418 0 0 1-.519-1.594c-.037-.684-.948-.342-.948-.342l.111.137a.611.611 0 0 1-.166.9Z"
                  fill="#fff"
                />
                <Path
                  data-name="Path 942"
                  d="M106.34 32.88c.5.593 1.2 1.267 1.168.93a2.933 2.933 0 0 1 .708-1.416 2.1 2.1 0 0 0-1.378.038 1.278 1.278 0 0 0-.498.448Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 943"
                  d="M106.265 32.652c.5.595 1.2 1.267 1.166.931s.373-.885.662-1.218a2.034 2.034 0 0 0-1.332-.16 1.271 1.271 0 0 0-.496.447Z"
                  fill="#fff"
                />
                <Circle
                  data-name="Ellipse 77"
                  cx={0.304}
                  cy={0.304}
                  r={0.304}
                  transform="translate(107.204 35.2)"
                  fill="#ff718d"
                />
                <Circle
                  data-name="Ellipse 78"
                  cx={0.304}
                  cy={0.304}
                  r={0.304}
                  transform="translate(104.903 43.391)"
                  fill="#ff718d"
                />
                <Circle
                  data-name="Ellipse 79"
                  cx={0.304}
                  cy={0.304}
                  r={0.304}
                  transform="translate(102.3 51.685)"
                  fill="#ff718d"
                />
                <Circle
                  data-name="Ellipse 80"
                  cx={0.304}
                  cy={0.304}
                  r={0.304}
                  transform="translate(102.223 60.71)"
                  fill="#ff718d"
                />
                <Circle
                  data-name="Ellipse 81"
                  cx={0.304}
                  cy={0.304}
                  r={0.304}
                  transform="translate(105.864 39.068)"
                  fill="#ff718d"
                />
                <Circle
                  data-name="Ellipse 82"
                  cx={0.304}
                  cy={0.304}
                  r={0.304}
                  transform="translate(103.816 47.488)"
                  fill="#ff718d"
                />
                <Circle
                  data-name="Ellipse 83"
                  cx={0.304}
                  cy={0.304}
                  r={0.304}
                  transform="translate(101.819 55.755)"
                  fill="#ff718d"
                />
                <Circle
                  data-name="Ellipse 84"
                  cx={0.304}
                  cy={0.304}
                  r={0.304}
                  transform="translate(102.274 61.722)"
                  fill="#ff718d"
                />
                <Path
                  data-name="Path 944"
                  d="M113.753 30.947s-.051-.455.606.329a7.916 7.916 0 0 0 1.9 1.466s2.807 1.973 2.959 2.882 1.061 4.855.581 6.169-4.15 7.611-4.15 7.611a3.42 3.42 0 0 1 .734 2.479 16.849 16.849 0 0 0-.38 3.59c.126.4-.152 1.415.273 1.769s.885.957-.455 1.769c0 0-.253.684-.026.835s-3.362 1.719-4.785.885-3.965-7.509-4.02-9a35.428 35.428 0 0 1 1.239-7.585c.455-1.159 1.821-5.689 2.4-6.7s3.124-6.499 3.124-6.499Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 945"
                  d="M113.903 30.947s-.051-.455.607.329a7.944 7.944 0 0 0 1.9 1.466s2.807 1.973 2.959 2.882 1.061 4.855.581 6.169-4.147 7.611-4.147 7.611a3.421 3.421 0 0 1 .734 2.479 16.859 16.859 0 0 0-.38 3.59c.126.4-.152 1.415.274 1.769s.885.957-.455 1.769c0 0-.253.684-.026.835s-3.362 1.719-4.785.885-3.965-7.509-4.02-9a35.447 35.447 0 0 1 1.239-7.585c.455-1.159 1.821-5.689 2.4-6.7s3.119-6.499 3.119-6.499Z"
                  fill="#4c4981"
                />
                <Path
                  data-name="Path 946"
                  d="M114.919 35.251s-2.174 2.4-2.1 4a5.085 5.085 0 0 1 2.1-4Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 947"
                  d="M111.908 39.195c0 .075-1.467 5.536-1.391 6.22a13.238 13.238 0 0 1-.431 2.7l-.684-.176s.531-2.807.632-3.843a32.75 32.75 0 0 1 1.874-4.901Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 948"
                  d="M111.325 54.769c.05.075 3.464 3.943 2.5 4.222s-2.5-4.222-2.5-4.222Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 949"
                  d="M114.132 53.78c.075.051 1.367 2.781 1.516 2.051s-1.112 2-1.314-.025Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 950"
                  d="M107.578 31.813s-1.41-.86-3.18 1.34c0 0-1.289.733-1.668.911s-.81 4.88-.81 4.88a7.531 7.531 0 0 0-.607 3.186c.227 1.163-.656 5.157-.656 5.157s-1.468 7.178-1.419 7.383a7.234 7.234 0 0 0 1.467-3.465 21.543 21.543 0 0 1 1.39-5.234c.178-.228 1.391-6.724 1.391-6.724a24.428 24.428 0 0 1 1.617-3.667c.632-.911 1.417-2.629 1.745-2.933a3.343 3.343 0 0 1 .784-.506Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 951"
                  d="M107.596 31.813s-1.581-.86-3.35 1.34c0 0-1.291.733-1.669.911s-.809 4.88-.809 4.88a7.531 7.531 0 0 0-.607 3.186c.227 1.163-.656 5.157-.656 5.157s-1.467 7.181-1.417 7.383a7.231 7.231 0 0 0 1.467-3.465 21.541 21.541 0 0 1 1.391-5.234c.178-.228 1.395-6.724 1.395-6.724a24.433 24.433 0 0 1 1.617-3.667c.632-.911 1.417-2.629 1.745-2.933a3.107 3.107 0 0 1 .935-.506Z"
                  fill="#4c4981"
                />
                <Path
                  data-name="Path 952"
                  d="M100.657 47.613s-3.008-1.971-4.463-1-3.828 2.352-1.492 3.35a14.61 14.61 0 0 0 5.574.807Z"
                  fill="#fec2be"
                />
                <Path
                  data-name="Path 953"
                  d="M102.749 66.639c.448.957.82 5.794 1.069 7.327.359-.615.794-1.352.941-1.582a20.1 20.1 0 0 0 .885-2.255 15.121 15.121 0 0 1-1.075-3.418c0-.891-1.441-2.01-1.441-2.01a1.679 1.679 0 0 0-.379 1.938Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 954"
                  d="M112.419 81.487s-3.337-1.422-4.323-.41 4.323.41 4.323.41Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 955"
                  d="M110.542 82.055s3.376 1.9 2.219 2.214-2.219-2.214-2.219-2.214Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 956"
                  d="M100.454 80.406s1.441.094.891.379-.891-.379-.891-.379Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 957"
                  d="M98.652 80.842c.019.094 4.191 1.441 3.376 2.051s-3.376-2.051-3.376-2.051Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 958"
                  d="M111.925 92.447c-.625-.1-4.114-1.708-2.749-.547a2.7 2.7 0 0 0 2.749.547Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 959"
                  d="M110.2 93.718a1.356 1.356 0 0 1-1.46 1.024c-1.157-.152 1.46-1.024 1.46-1.024Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 960"
                  d="M111.167 96.106c-.209-.056-2.693-1.194-2.75-.663s2.369 1.46 2.56 1.176a1.017 1.017 0 0 0 .19-.513Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 961"
                  d="M103.127 94.741c-.3-.019-3.145-.93-3.716-.115Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 962"
                  d="M100.548 95.272a1.009 1.009 0 0 0-.986-.209c-.492.227.986.209.986.209Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 963"
                  d="M106.844 99.975a.849.849 0 0 1-.645.663Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 964"
                  d="M92.375 101.756c.19.778 2.845.853 4.115.645s3.906-.968 3.906-.968a21.379 21.379 0 0 0 3.584-.606c.815-.34.171-1.214.171-1.214v-.082a4.967 4.967 0 0 0-.119-1.777 3.777 3.777 0 0 1-.094-1.537s-3.925.759-4 .4a2.047 2.047 0 0 0-.967-.986c-.283-.114-.494.947-.494.947s-1.777 1.518-1.9 2.067-1.367.834-1.367.834a21.53 21.53 0 0 0-2.39.8.918.918 0 0 0-.522.737 2.051 2.051 0 0 0 .077.74Z"
                  fill="#ca8496"
                />
                <Path
                  data-name="Path 965"
                  d="M92.375 101.757c.19.778 2.845.853 4.115.645s3.906-.968 3.906-.968a21.369 21.369 0 0 0 3.584-.606c.815-.341.171-1.214.171-1.214v-.082l-3.965.879a10.8 10.8 0 0 1-3.2.834c-1.094 0-3.541.447-4.676-.231a2.049 2.049 0 0 0 .065.743Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 966"
                  d="M97.742 98.761a2.583 2.583 0 0 0 .949 1.668Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 967"
                  d="M102.72 24.286a1.352 1.352 0 0 0 .226.094 1.4 1.4 0 0 0 1.019-.336c.316-.191.752-.334 1.025-.085.357.324.1 1.016.466 1.329.233.2.6.13.86.293a1.233 1.233 0 0 1 .4.827c.066.308.2.659.5.749s.581-.108.878-.1c.062 0 .137.01.175-.034a.185.185 0 0 0 .029-.137 2.918 2.918 0 0 1 .1-1.094 1.054 1.054 0 0 1 .771-.722c.532-.082.979.384 1.292.82a13.4 13.4 0 0 1 .9 1.444.912.912 0 0 1 .045.1 4.627 4.627 0 1 0-8.679-3.145Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 968"
                  d="M110.456 25.817c-.313-.44-.76-.905-1.294-.82a1.049 1.049 0 0 0-.77.721 2.9 2.9 0 0 0-.1 1.094.191.191 0 0 1-.03.137c-.042.045-.114.038-.175.036-.3-.011-.592.182-.878.1s-.432-.442-.5-.749a1.216 1.216 0 0 0-.4-.827c-.265-.168-.628-.094-.86-.294-.368-.312-.108-1-.466-1.329-.273-.247-.71-.105-1.025.086a1.4 1.4 0 0 1-1.02.335c-.12-.033-.228-.1-.346-.146-.562-.215-1.291.149-1.753-.237a1.354 1.354 0 0 1-.35-.606 3.855 3.855 0 0 1-.256-.967 1.293 1.293 0 0 1 .257-.942c.3-.354.809-.443 1.194-.7a3 3 0 0 0 .763-.9 3.361 3.361 0 0 1 .741-.92 1.091 1.091 0 0 1 1.111-.175 1.232 1.232 0 0 0 .365.174.754.754 0 0 0 .4-.111 7.754 7.754 0 0 1 4.289-.325 5.526 5.526 0 0 1 1.689.41 2.029 2.029 0 0 1 1.139 1.247c.118.446.027.931.169 1.367.1.3.293.547.41.846a4.736 4.736 0 0 1-.216 2.52 11.8 11.8 0 0 1-.476 2.786c-.077.171-.163.47-.356.358-.137-.083-.282-.569-.364-.721a13.262 13.262 0 0 0-.892-1.448Z"
                  fill="#9a5e7f"
                />
                <Path
                  data-name="Path 969"
                  d="m118.788 40.638.684 1.947s-1.619 6.016-2.378 7.281-1.87 2.882-1.87 2.882a6.931 6.931 0 0 1-4.046.506c-2.175-.431-8.523-1.567-8.523-1.567a.844.844 0 0 1-.809-.3c-.278-.4-1.723-.61-1.723-.61s-1.668-2.427.38-3.439c0 0 .253.556 1.34.178s1.415.3 1.415.3a11.562 11.562 0 0 0 2.756.228 29.874 29.874 0 0 0 3.691-.38.325.325 0 0 1 .455.026 2.743 2.743 0 0 0 .808-.455c.2-.228.481.253.481.253s.354-.2.253-.455.328-1.213.328-1.213a2.472 2.472 0 0 0 .077-1.139 7.508 7.508 0 0 1 .632-2.324 3.212 3.212 0 0 0-.1-.911c-.127-.454.957-1.367.957-1.367s1.061-5.159 3.311-3.465a4.448 4.448 0 0 1 1.881 4.024Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 970"
                  d="m118.935 40.638.684 1.947s-1.619 6.016-2.378 7.281-1.869 2.882-1.869 2.882a6.931 6.931 0 0 1-4.046.506c-2.175-.431-8.521-1.567-8.521-1.567a.842.842 0 0 1-.808-.3c-.278-.4-1.721-.61-1.721-.61s-1.668-2.427.38-3.439c0 0 .253.556 1.34.178s1.415.3 1.415.3a11.562 11.562 0 0 0 2.756.228 29.871 29.871 0 0 0 3.691-.38.326.326 0 0 1 .455.026 2.743 2.743 0 0 0 .808-.455c.2-.228.481.253.481.253s.354-.2.253-.455.328-1.213.328-1.213a2.461 2.461 0 0 0 .075-1.139 7.469 7.469 0 0 1 .633-2.324 3.218 3.218 0 0 0-.1-.911c-.127-.454.957-1.367.957-1.367s1.061-5.159 3.311-3.465a4.433 4.433 0 0 1 1.876 4.024Z"
                  fill="#4c4981"
                />
                <Path
                  data-name="Path 971"
                  d="M102.503 48.777c.025.178.581.885.379 1.012s-.531.051-.227.455.273 1.01.075.935a2.444 2.444 0 0 1-.53-1.34 3.979 3.979 0 0 1 .303-1.062Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 972"
                  d="M110.011 48.372s.152 1.771 1.4 2.276-1.4-2.276-1.4-2.276Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 973"
                  d="M112.59 47.764c.075.026 1.769.936 1.012 1.467s-1.012-1.467-1.012-1.467Z"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 974"
                  d="M112.691 46.502s2.478.506 1.641.935-1.641-.935-1.641-.935Z"
                  opacity={0.1}
                />
                <G data-name="Group 1203" opacity={0.1}>
                  <Path
                    data-name="Path 975"
                    d="M108.395 25.283a1.058 1.058 0 0 1 .77-.721c.533-.082.98.384 1.294.82a13.447 13.447 0 0 1 .9 1.444c.082.152.221.636.364.719.193.113.273-.186.355-.357a11.78 11.78 0 0 0 .476-2.786 16.154 16.154 0 0 0 .325-1.627 7.9 7.9 0 0 1-.325 2.03 11.827 11.827 0 0 1-.476 2.788c-.077.171-.163.47-.355.357-.137-.083-.282-.567-.364-.719a13.447 13.447 0 0 0-.9-1.444c-.313-.439-.76-.905-1.294-.82a1.049 1.049 0 0 0-.77.721 2.006 2.006 0 0 0-.1.569 2.647 2.647 0 0 1 .1-.974Z"
                  />
                  <Path
                    data-name="Path 976"
                    d="M100.496 22.88a1.352 1.352 0 0 0 .35.607c.462.386 1.191.022 1.753.237.117.044.225.113.346.146a1.4 1.4 0 0 0 1.02-.336c.315-.191.753-.332 1.026-.085.358.324.1 1.016.466 1.329.232.2.6.137.86.294a1.218 1.218 0 0 1 .4.82c.065.3.2.659.5.749s.581-.107.878-.1c.062 0 .137.01.175-.036a.12.12 0 0 0 .021-.038c0 .1 0 .2.01.3a.192.192 0 0 1-.03.137c-.042.044-.113.037-.175.034-.3-.01-.592.182-.878.1s-.432-.44-.5-.749a1.185 1.185 0 0 0-.4-.82c-.265-.161-.628-.1-.86-.294-.368-.313-.108-1.006-.466-1.329-.273-.249-.71-.107-1.026.085a1.4 1.4 0 0 1-1.02.336c-.12-.033-.228-.1-.346-.146-.562-.215-1.291.149-1.753-.237a1.36 1.36 0 0 1-.35-.607 3.863 3.863 0 0 1-.256-.965 1.544 1.544 0 0 1 .008-.339 4.061 4.061 0 0 0 .247.907Z"
                  />
                </G>
                <Path
                  data-name="Path 977"
                  d="M13.642 99.341s-5.781-.349-5.1 3.7a.987.987 0 0 0 .514 1.042s.01-.3.593-.2a2.728 2.728 0 0 0 .628.032 1.308 1.308 0 0 0 .767-.317s1.626-.671 2.257-3.328c0 0 .468-.578.448-.727l-.975.41a1.749 1.749 0 0 1 .071 1.289s-.031-1.263-.219-1.23c-.038 0-.507.243-.507.243a2.872 2.872 0 0 1 .137 2.118s.164-1.511-.32-2.029l-.684.4a3.034 3.034 0 0 1 .216 2.3 4.308 4.308 0 0 0-.361-2.2l-.622.485a2.961 2.961 0 0 1 .246 2.1s-.051-1.844-.38-1.984a3.581 3.581 0 0 0-.628.684s.431.906.163 1.385c0 0-.164-1.231-.3-1.231a3.992 3.992 0 0 0-.6 1.367 2.961 2.961 0 0 1 .468-1.451 1.628 1.628 0 0 0-.83.431s.083-.576.964-.626a3.784 3.784 0 0 1 .567-.655 3.557 3.557 0 0 0-1.405.161 1.568 1.568 0 0 1 1.567-.3l.614-.5a5.084 5.084 0 0 0-1.641.016 2 2 0 0 1 1.806-.13l.669-.4a6.088 6.088 0 0 0-1.567-.137 2.406 2.406 0 0 1 1.764.029l.477-.215s-.719-.137-.93-.164-.223-.081-.223-.081a2.5 2.5 0 0 1 1.352.15 6.239 6.239 0 0 0 1.004-.437Z"
                  fill="#0e58c7"
                />
                <Ellipse
                  data-name="Ellipse 85"
                  cx={4.091}
                  cy={0.692}
                  rx={4.091}
                  ry={0.692}
                  transform="translate(5.57 103.745)"
                  fill="#0e58c7"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 978"
                  d="M24.725 88.667s-3.259-.2-2.871 2.088a.558.558 0 0 0 .29.586s0-.17.335-.112a1.6 1.6 0 0 0 .354.018.748.748 0 0 0 .432-.179 2.584 2.584 0 0 0 1.274-1.877s.264-.327.253-.41l-.547.234a.991.991 0 0 1 .04.727s-.018-.712-.123-.7c-.022 0-.286.137-.286.137a1.622 1.622 0 0 1 .079 1.194s.092-.852-.181-1.144l-.39.232a1.711 1.711 0 0 1 .122 1.3 2.428 2.428 0 0 0-.2-1.241l-.35.273a1.671 1.671 0 0 1 .137 1.187s-.029-1.04-.215-1.118a2.186 2.186 0 0 0-.354.381s.243.511.093.781c0 0-.093-.693-.168-.7a2.283 2.283 0 0 0-.338.774 1.668 1.668 0 0 1 .263-.82.927.927 0 0 0-.468.243s.048-.325.547-.353a2.068 2.068 0 0 1 .32-.369 2 2 0 0 0-.793.09.89.89 0 0 1 .883-.167l.346-.283a2.85 2.85 0 0 0-.924.01 1.116 1.116 0 0 1 1.019-.074l.376-.224a3.384 3.384 0 0 0-.883-.077 1.351 1.351 0 0 1 .994.015l.273-.12s-.41-.081-.524-.093-.126-.045-.126-.045a1.41 1.41 0 0 1 .763.085 3.174 3.174 0 0 0 .548-.249Z"
                  fill="#0e58c7"
                />
                <Ellipse
                  data-name="Ellipse 86"
                  cx={2.307}
                  cy={0.39}
                  rx={2.307}
                  ry={0.39}
                  transform="translate(20.179 91.15)"
                  fill="#0e58c7"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 979"
                  d="M5.495 90.65s-3.935-.238-3.466 2.52a.673.673 0 0 0 .35.708s0-.205.4-.137a1.791 1.791 0 0 0 .428.021.884.884 0 0 0 .522-.216 3.122 3.122 0 0 0 1.545-2.265s.317-.394.3-.5l-.674.284a1.194 1.194 0 0 1 .048.876s-.022-.859-.149-.838c-.026 0-.345.165-.345.165a1.966 1.966 0 0 1 .1 1.441s.111-1.028-.219-1.381l-.466.273a2.064 2.064 0 0 1 .146 1.564 2.964 2.964 0 0 0-.245-1.5l-.424.331a2.02 2.02 0 0 1 .167 1.433s-.034-1.257-.258-1.351a2.625 2.625 0 0 0-.428.461s.294.617.112.942c0 0-.112-.837-.2-.841a2.829 2.829 0 0 0-.41.935 2.017 2.017 0 0 1 .319-.987 1.106 1.106 0 0 0-.566.293s.057-.392.658-.427a2.617 2.617 0 0 1 .386-.446 2.423 2.423 0 0 0-.957.109 1.076 1.076 0 0 1 1.066-.2l.418-.342a3.454 3.454 0 0 0-1.117.012 1.356 1.356 0 0 1 1.23-.089l.455-.273a4.113 4.113 0 0 0-1.066-.093 1.633 1.633 0 0 1 1.2.019l.319-.139s-.489-.1-.633-.111-.152-.055-.152-.055a1.691 1.691 0 0 1 .92.1 4.021 4.021 0 0 0 .686-.296Z"
                  fill="#0e58c7"
                />
                <Ellipse
                  data-name="Ellipse 87"
                  cx={2.785}
                  cy={0.47}
                  rx={2.785}
                  ry={0.47}
                  transform="translate(0 93.648)"
                  fill="#0e58c7"
                  opacity={0.1}
                />
                <Ellipse
                  data-name="Ellipse 88"
                  cx={4.091}
                  cy={0.692}
                  rx={4.091}
                  ry={0.692}
                  transform="translate(78.998 110.549)"
                  fill="#0e58c7"
                  opacity={0.1}
                />
                <Path
                  data-name="Path 980"
                  d="M80.342 108.028a8.562 8.562 0 0 0 3.037-.573c.7-.5 3.589-1.094 3.764-.3s3.507 3.994.872 4.016-6.121-.41-6.824-.838-.849-2.305-.849-2.305Z"
                  fill="#a8a8a8"
                />
                <Path
                  data-name="Path 981"
                  d="M88.061 110.896c-2.635.022-6.121-.41-6.822-.837-.534-.327-.748-1.494-.82-2.033h-.078s.148 1.881.849 2.309 4.189.859 6.824.838c.76 0 1.023-.273 1.009-.684-.104.251-.395.403-.962.407Z"
                  opacity={0.2}
                />
              </G>
            </G>
          </G>
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Step3;
