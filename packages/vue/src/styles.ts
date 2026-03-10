let injected = false;

const styleText = `
.s-icon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.s-icon > * { line-height: 1; }
.s-icon svg { display: inline-block; }
.s-icon::before { display: none; }
.s-icon[tabindex] { cursor: pointer; }
.s-icon-spin::before,
.s-icon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}
@-webkit-keyframes loadingCircle { 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg);} }
@keyframes loadingCircle { 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg);} }
`;

export function ensureIconStyles() {
  if (injected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.setAttribute('data-sensoro-icons', 'true');
  style.textContent = styleText;
  document.head.appendChild(style);
  injected = true;
}
