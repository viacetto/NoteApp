import styled from "styled-components";

export const greetingsAnim = {
    duration: '4s',
    timing: 'ease-in-out'
}
export const StyledDiv = styled.div`
.greetings-header {animation-name: load1out5;animation-duration: ${greetingsAnim.duration};animation-timing-function: ${greetingsAnim.timing};}
.greetings-name {animation-name: load2out5;animation-duration: ${greetingsAnim.duration};animation-timing-function: ${greetingsAnim.timing};}
.greetings-comment1 {animation-name: load3out5;animation-duration: ${greetingsAnim.duration};animation-timing-function: ${greetingsAnim.timing};}
.greetings-highlight {animation-name: load4out5;animation-duration: ${greetingsAnim.duration};animation-timing-function: ${greetingsAnim.timing};}
.greetings-comment2 {animation-name: load5out5;animation-duration: ${greetingsAnim.duration};animation-timing-function: ${greetingsAnim.timing};}
@keyframes load1out5 {
0%   {opacity: 0;}
40%  {opacity: 1;}
60%  {opacity: 1;}
80%  {opacity: 1;}
90%  {opacity: 1;}
100% {opacity: 1;}
}
@keyframes load2out5 {
0%   {opacity: 0;}
20%  {opacity: 0;}
60%  {opacity: 1;}
80%  {opacity: 1;}
90%  {opacity: 1;}
100% {opacity: 1;}
} 
@keyframes load3out5 {
0%   {opacity: 0;}
60%  {opacity: 0;}
80%  {opacity: 1;}
90%  {opacity: 1;}
100% {opacity: 1;}
}
@keyframes load4out5 {
0%   {opacity: 0;}
60%  {opacity: 0;}
80%  {opacity: 0;}
90%  {opacity: 1;}
100% {opacity: 1;}
}
@keyframes load5out5 {
0%   {opacity: 0;}
60%  {opacity: 0;}
80%  {opacity: 0;}
90%  {opacity: 0;}
100% {opacity: 1;}
}

`