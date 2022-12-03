import { selector } from './src/utils/common.js';
import rerender from './core/renderer.js';
import App from './src/App.js';
import './src/reset.css';
import './src/base.css';

const $root = selector('#root');
App({ $target: $root })
rerender(App, $root)